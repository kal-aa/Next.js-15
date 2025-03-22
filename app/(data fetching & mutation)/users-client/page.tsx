"use client";

import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export default function UsersClient() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const asyncFetch = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) throw new Error("Failed to fetch users");
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
        else setError("An unknown error occured");
      } finally {
        setLoading(false);
      }
    };

    asyncFetch();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

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
