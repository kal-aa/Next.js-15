interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export default async function UsersServer() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (Math.floor(Math.random() * 2) === 1) throw new Error("Math random is 1");
  const users: User[] = await response.json();

  return (
    <ul className="space-y-4 p-4 w-full max-w-xl mx-auto">
      {users.map((user) => (
        <li
          key={user.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <h1 className="font-bold">name: {user.name}</h1>
          <div className="text-sm">
            <div>username: {user.username}</div>
            <div>email: {user.email}</div>
            <div>Phone: {user.phone}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
