import { fetchNotes } from "@/lib/api";

export default async function FilterPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const slug = params.slug;

  const tag = slug?.[0] ?? "all";

  const search = tag === "all" ? "" : tag;

  const data = await fetchNotes(search, 1);

  return (
    <div>
      <h1>Notes: {tag}</h1>

      {data.notes.map((note) => (
        <div key={note.id}>
          <h3>{note.title}</h3>
        </div>
      ))}
    </div>
  );
}
