import clsx from "clsx";

import type { FC, HTMLAttributes } from "react";

const InputGroup: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...otherProps
}) => (
  <div {...otherProps} className={clsx("space-y-2.5", className)}>
    {children}
  </div>
);

export default InputGroup;
