import { ClientComponentOne } from "@/components/client-component-one";
import { ServerComponentOne } from "@/components/server-component-one";

export default function InterleavingPage() {
  return (
    <>
      <h1>Interleaving Page</h1>
      {/* We can't import and include sever component directly into our client component since that'll make the code a client component, to achieve the same effect we can send it as a prop or children/slot */}

      {/* <ClientComponentOne serverComponentOne={<ServerComponentOne />} /> */}

      {/* or */}

      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </>
  );
}
