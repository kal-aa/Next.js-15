import fs from "fs";

export const ServerComponentWo = () => {
  fs.readFileSync("components/server-component-two.tsx", "utf8");

  return <h1>Server Component two</h1>;
};
