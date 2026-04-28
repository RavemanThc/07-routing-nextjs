import axios from "axios";
import { Note, Tag } from "@/types/note";

const BASE_URL = "https://notehub-public.goit.study/api";
const TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (
  search = "",
  page = 1,
  tag?: Tag["name"],
): Promise<FetchNotesResponse> => {
  const normalizedTag = tag === "all" ? "" : tag;

  const { data } = await instance.get<FetchNotesResponse>("/notes", {
    params: {
      page,
      perPage: 12,
      search,
      tag: normalizedTag || undefined,
    },
  });

  return data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const { data } = await instance.get<Note>(`/notes/${id}`);
  return data;
};

export interface CreateNotePayload {
  title: string;
  content: string;
  tag: string;
}

export const createNote = async (note: CreateNotePayload): Promise<Note> => {
  const { data } = await instance.post<Note>("/notes", note);
  return data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const { data } = await instance.delete<Note>(`/notes/${id}`);
  return data;
};
export const getTags = async (): Promise<Tag[]> => {
  const { data } = await instance.get<Tag[]>("/categories");
  return data;
};
