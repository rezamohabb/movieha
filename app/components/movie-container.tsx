import clsx from "clsx";

import type { FC, HTMLAttributes } from "react";

const MovieContainer: FC<HTMLAttributes<HTMLLIElement>> = ({
  children,
  className,
  ...movieContainerProps
}) => (
  <li {...movieContainerProps} className={clsx("space-y-3 group", className)}>
    {children}
  </li>
);

export default MovieContainer;
