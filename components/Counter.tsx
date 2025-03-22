"use client";

import { useUser } from "@clerk/nextjs";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // const { isLoaded, isSignedIn, sessionId, getToken } = useAuth();
  const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded && !isSignedIn) return null;

  return (
    <p className="border max-w-xs mx-auto">
      <span>{count}</span>
      <button onDoubleClick={() => setCount(count + 1)}>onDoubleClick </button>
    </p>
  );
};
export default Counter;
