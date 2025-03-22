import { clerkClient } from "@clerk/nextjs/server";
import { removeRole, setRole } from "./actions";

export default async function Admin() {
  const client = await clerkClient();
  const users = (await client.users.getUserList()).data;

  // make the btns to be unable to change the role of the main admin
  const mainUserEmail = "sadkalshayee@gmail.com";
  const filterMainUser = users.find((user) =>
    user.emailAddresses.some((email) => email.emailAddress === mainUserEmail)
  );

  return (
    <>
      {users.map((user) => (
        <div
          key={user.id}
          className={`flex items-center justify-between gap-4 p-4 text-white ${
            users.indexOf(user) % 2 === 0
              ? "bg-neutral-50 dark:bg-neutral-800"
              : "bg-white dark:bg-neutral-900"
          }`}
        >
          <div className="flex gap-8 ">
            <div className="dark:text-neutral-200">
              {user.firstName} {user.lastName} {}
            </div>

            <div className="dark:text-neutral-200">
              {
                user.emailAddresses.find(
                  (email) => email.id === user.primaryEmailAddressId
                )?.emailAddress
              }
            </div>

            <div className="dark-text-200">
              {user.publicMetadata?.role as string}
            </div>
          </div>

          {filterMainUser?.id === user.id ? (
            <p className="mr-[5%] sm:mr-[12%]">Main</p>
          ) : (
            <div className="flex flex-col md:flex-row gap-2">
              <form action={setRole} className="inline">
                <input type="hidden" value={user.id} name="id" />
                <input type="hidden" value="admin" name="role" />
                <button
                  type="submit"
                  className="px-2 py-1 text-sm border border-neutral-300 cursor-pointer"
                >
                  Make Admin
                </button>
              </form>

              <form action={setRole} className="inline">
                <input type="hidden" value={user.id} name="id" />
                <input type="hidden" value="moderator" name="role" />
                <button
                  type="submit"
                  className="px-2 py-1 text-sm border border-neutral-300 cursor-pointer"
                >
                  Make Moderator
                </button>
              </form>

              <form action={removeRole} className="inline">
                <input type="hidden" value={user.id} name="id" />
                <button
                  // disabled={}
                  type="submit"
                  className="px-2 py-1 text-sm border border-neutral-300 cursor-pointer"
                >
                  Remove Role
                </button>
              </form>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
