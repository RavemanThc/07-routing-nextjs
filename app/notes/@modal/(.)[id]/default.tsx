import { fetchNoteById } from "@/lib/api";
import NotePreview from "@/components/NotePreview/NotePreview";

type Props = {
  params: {
    id: string;
  };
};

export default async function NoteModalPage({ params }: Props) {
  const note = await fetchNoteById(params.id);

  return <NotePreview note={note} />;
}
