import clsx from "clsx";

import type { FC, HTMLAttributes } from "react";

const MovieDetailsContainer: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...otherProps
}) => (
  <div {...otherProps} className={clsx("flex justify-between px-2", className)}>
    {children}
  </div>
);

export default MovieDetailsContainer;
