export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (slug?.length === 1) {
    return <h1>{slug}</h1>;
  }

  if (!slug) return <h1>no slug</h1>;

  return <h1>Docs home page</h1>;
}
