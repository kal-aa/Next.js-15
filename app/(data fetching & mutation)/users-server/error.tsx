"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={() => window.location.reload()} className="border">
        Try again
      </button>
    </div>
  );
}
