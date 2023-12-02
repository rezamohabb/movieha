import { FC, PropsWithChildren } from "react";

const AddMovieFormError: FC<PropsWithChildren> = ({ children }) => (
  <p className="text-sm text-red-500 cursor-help">{children}</p>
);

export default AddMovieFormError;
