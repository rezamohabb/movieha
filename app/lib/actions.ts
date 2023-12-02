"use server";

import prisma from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";
import { uploadFile, deleteFile } from "@/app/lib/s3";

export const uploadMovieThumbnail = async (formData: FormData) => {
  const thumbnail = formData.get("thumbnail") as File;
  const thumbnailKey = `${Date.now()}-${thumbnail.name}`;
  const thumbnailArrayBuffer = await thumbnail.arrayBuffer();
  const thumbnailBuffer = Buffer.from(thumbnailArrayBuffer);

  await uploadFile(thumbnailKey, thumbnailBuffer);

  return thumbnailKey;
};

export const addMovie = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const thumbnail = formData.get("thumbnail-key") as string;

  await prisma.movie.create({
    data: {
      title,
      thumbnail,
    },
  });

  revalidatePath("/");
};

export const deleteMovie = async (formData: FormData) => {
  const movieId = formData.get("movieId");

  const { thumbnail } = await prisma.movie.delete({
    where: { id: movieId as string },
  });

  await deleteFile(thumbnail);

  revalidatePath("/");
};
