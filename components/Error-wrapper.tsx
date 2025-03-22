"use client";

import "../app/globals.css";
import { useState } from "react";

interface WrapperProps {
  children: React.ReactNode;
}

const ErrorSimulator = ({
  message = "An error occured",
}: {
  message: string;
}) => {
  const [error, setError] = useState(false);

  if (error) throw new Error(message);

  return (
    <button
      title="Simulate an error"
      className="bg-red-950 text-red-500 rounded-2xl p-1 leading-none font-semibold text-sm"
      onClick={() => setError(true)}
    >
      Simulate Error
    </button>
  );
};

export const ErrorWrapper = ({ children }: WrapperProps) => {
  return (
    <div className="flex flex-col rounded-lg mt-8 relative p-4 border border-gray-300">
      <div className="absolute top-0 left-4 -translate-y-3">
        <ErrorSimulator message="Simulate error in root layout" />
      </div>
      {children}
    </div>
  );
};
