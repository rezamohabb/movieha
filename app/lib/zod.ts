import { z } from "zod";

export const AddMovieFormSchema = z.object({
  title: z.string().min(1, { message: "عنوان فیلم الزامی است." }),
  thumbnail: z
    .custom<FileList>()
    .refine((files) => files?.length !== 0, "عکس فیلم الزامی است.")
    .refine(
      (files) =>
        ["image/png", "image/jpg", "image/jpeg"].includes(files?.[0]?.type),
      "فرمت عکس فیلم نامعتبر است.",
    ),
});

export type AddMovieFormType = z.infer<typeof AddMovieFormSchema>;
