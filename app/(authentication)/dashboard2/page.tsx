import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Dashboard2() {
  const authObject = await auth();
  const userObject = await currentUser();
  console.log("AUTH:", authObject, "USER:", userObject);

  return <h2>Dashborad</h2>;
}
