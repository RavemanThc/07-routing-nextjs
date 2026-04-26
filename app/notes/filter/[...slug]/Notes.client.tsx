"use client";

import { Note } from "@/types/note";

interface NotesProps {
  notes: Note[];
}

export default function Notes({ notes }: NotesProps) {
  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>{note.title}</div>
      ))}
    </div>
  );
}
