"use client";

import { useFormStatus } from "react-dom";
import { CgSpinner, CgTrash } from "react-icons/cg";

const DeleteMovieButton = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit">
      {pending ? (
        <CgSpinner className="w-5 h-5 cursor-not-allowed text-gray-400 animate-spin" />
      ) : (
        <CgTrash className="w-5 h-5 hover:text-red-600 cursor-pointer transition-all text-gray-400" />
      )}
    </button>
  );
};

export default DeleteMovieButton;
