import Link from "next/link";

export default function F1() {
  return (
    <>
      <h1 className="heading">F1 page</h1>
      <Link href="/f1/f2">F2</Link>
      <hr />
      <Link href="/f3">F3</Link>
    </>
  );
}
