import clsx from "clsx";

import type { FC, HTMLAttributes } from "react";

const MovieDetailsContainer: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...movieDetailsContainerProps
}) => (
  <div
    {...movieDetailsContainerProps}
    className={clsx("flex justify-between px-2", className)}
  >
    {children}
  </div>
);

export default MovieDetailsContainer;
