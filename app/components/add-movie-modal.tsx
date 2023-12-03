"use client";

import { useRouter } from "next/navigation";
import { AddMovieForm } from "@/app/components";

const AddMovieModal = () => {
  const router = useRouter();

  return (
    <div className="md:hidden">
      <div
        onClick={router.back}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
      />
      <div className="fixed bottom-0 inset-x-5 [&>*]:rounded-b-none [&>*]:shadow-none">
        <AddMovieForm afterAddMovieCallback={router.back} />
      </div>
    </div>
  );
};

export default AddMovieModal;
