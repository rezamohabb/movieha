import clsx from "clsx";

import type { FC, HTMLAttributes } from "react";

const MoviesContainer: FC<HTMLAttributes<HTMLUListElement>> = ({
  children,
  className,
  ...moviesContainerProps
}) => (
  <ul
    {...moviesContainerProps}
    className={clsx("col-span-2 grid grid-cols-5 gap-7", className)}
  >
    {children}
  </ul>
);

export default MoviesContainer;
