// import fs from "fs";
import { ClientComponentOne } from "./client-component-one";

export const ServerComponentOne = () => {
//   fs.readFileSync("components/server-component-one.tsx", "utf8");

  return (
    <>
      <h1>Server Component one</h1>
      <ClientComponentOne />
    </>
  );
};
