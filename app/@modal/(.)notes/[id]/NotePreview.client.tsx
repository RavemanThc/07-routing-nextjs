"use client";

import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import { Note } from "@/types/note";

interface NotePreviewProps {
  note: Note;
}

export default function NotePreview({ note }: NotePreviewProps) {
  const router = useRouter();

  return (
    <Modal onClose={() => router.back()}>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </Modal>
  );
}
