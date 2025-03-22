import Link from "next/link";

export default function register() {
  return (
    <>
      <h1>Register</h1>
      <hr />
      <ol>
        <li>
          <Link href="/register/1">User 1</Link>
        </li>
        <li>
          <Link href="/register/2">User 2</Link>
        </li>
        <li>
          <Link href="/register/3" replace>
            User 3
          </Link>
        </li>
      </ol>
      <hr />
      <Link href="/">Home</Link>
    </>
  );
}
