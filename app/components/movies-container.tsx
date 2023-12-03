import clsx from "clsx";

import type { FC, HTMLAttributes } from "react";

const MoviesContainer: FC<HTMLAttributes<HTMLUListElement>> = ({
  children,
  className,
  ...otherProps
}) => (
  <ul
    {...otherProps}
    className={clsx(
      "grid md:grid-cols-4 gap-7 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
      className,
    )}
  >
    {children}
  </ul>
);

export default MoviesContainer;
