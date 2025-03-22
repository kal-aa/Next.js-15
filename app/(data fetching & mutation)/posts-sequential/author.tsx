type Author = {
  id: number;
  name: string;
};

export async function Author({ userId }: { userId: number }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const user: Author = await response.json();
  await new Promise(resolve => setTimeout(resolve, 3000))
  

  return (
    <div className="text-sm text-gray-500">
      Writtten by:{" "}
      <span className="font-semibold text-gray-700 hover:text-gray-900 transition-colors delay-1000">
        {user.name}
      </span>
    </div>
  );
}
