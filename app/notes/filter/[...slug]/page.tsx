import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";

import NotesClient from "./Notes.client";
import { fetchNotes } from "@/lib/api";

export default async function NotesPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const queryClient = new QueryClient();

  const tag = params.slug?.[0] ?? "all";
  const search = tag === "all" ? "" : tag;

  await queryClient.prefetchQuery({
    queryKey: ["notes", tag], // ✅ важливо
    queryFn: () => fetchNotes(search, 1, tag), // ✅ важливо
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}
