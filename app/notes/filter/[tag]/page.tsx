import { fetchNotes } from "@/lib/api";

export default async function FilteredNotesPage({
  params,
}: {
  params: { tag: string };
}) {
  const tag = params.tag;

  const search = tag === "all" ? "" : tag.toLowerCase();

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
