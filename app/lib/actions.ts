"use server";

import prisma from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";

export const deleteMovie = async (formData: FormData) => {
  const movieId = formData.get("movieId");

  await prisma.movie.delete({ where: { id: movieId as string } });

  revalidatePath("/");
};
