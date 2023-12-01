"use client";

import { useForm } from "react-hook-form";
import { RiLoopRightLine } from "react-icons/ri";
import { InputGroup, Label } from "@/app/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { uploadMovieThumbnail, addMovie } from "@/app/lib/actions";
import { type AddMovieFormType, AddMovieFormSchema } from "@/app/lib/zod";

const AddMovieForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AddMovieFormType>({
    resolver: zodResolver(AddMovieFormSchema),
  });

  const onSubmit = async ({ title, thumbnail }) => {
    const addMovieData = new FormData();
    const uploadMovieThumbnailData = new FormData();

    uploadMovieThumbnailData.append("thumbnail", thumbnail[0]);

    const thumbnailKey = await uploadMovieThumbnail(uploadMovieThumbnailData);

    addMovieData.append("title", title);
    addMovieData.append("thumbnail-key", thumbnailKey);

    await addMovie(addMovieData);

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="shadow-lg p-5 rounded-2xl shadow-gray-200 space-y-5 relative overflow-hidden"
    >
      <InputGroup>
        <Label htmlFor="title">نام فیلم</Label>
        <input
          id="title"
          {...register("title")}
          placeholder="برای مثال: آدم کش"
          className="w-full bg-gray-200 py-4 rounded-2xl px-5 border border-gray-300 focus:border-gray-400 transition-all placeholder:text-gray-400"
        />
        {errors.title && (
          <p className="text-sm text-red-500">{errors.title.message}</p>
        )}
      </InputGroup>
      <InputGroup>
        <Label htmlFor="thumbnail">عکس فیلم</Label>
        <input
          type="file"
          id="thumbnail"
          className="hidden"
          {...register("thumbnail")}
        />
        <label
          htmlFor="thumbnail"
          className="border border-gray-300 h-36 rounded-2xl flex flex-col items-center justify-center gap-y-2 bg-gray-200"
        >
          <h2 className="text-gray-400">
            عکس فیلم را بکشید و بندازید یا انتخاب کنید
          </h2>
          <p className="text-xs text-gray-400">
            فرمت های قابل آپلود: PNG | JPG | Jpeg
          </p>
        </label>
        {errors.thumbnail && (
          <p className="text-sm text-red-500">{errors.thumbnail.message}</p>
        )}
      </InputGroup>
      <button
        type="submit"
        className="bg-sky-500 h-14 w-full rounded-2xl text-white hover:bg-sky-600 transition-all"
      >
        افزودن فیلم
      </button>
      {isSubmitting && (
        <div className="w-full h-full absolute inset-0 backdrop-blur-sm grid place-items-center bg-gray-900/40 !mt-0">
          <RiLoopRightLine className="text-white w-8 h-8 animate-spin" />
        </div>
      )}
    </form>
  );
};

export default AddMovieForm;
