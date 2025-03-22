"use client";

import { useState } from "react";
import { ServerComponentOne } from "./server-component-one";

export const ClientComponentOne = ({
  children,
}: //   serverComponentOne,
{
  children?: React.ReactNode;
  //   serverComponentOne: React.ReactNode;
}) => {
  const [name, setName] = useState("Batman");

  return (
    <>
      {/* {serverComponentOne} */}
      <h1>Client component One</h1>
      {children}
    </>
  );
};
