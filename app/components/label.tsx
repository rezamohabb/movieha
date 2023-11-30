import clsx from "clsx";

import type { FC, LabelHTMLAttributes } from "react";

const Label: FC<LabelHTMLAttributes<HTMLLabelElement>> = ({
  children,
  className,
  ...otherProps
}) => (
  <label
    {...otherProps}
    className={clsx(
      "before:w-1 before:h-full before:bg-sky-500 before:absolute relative before:-right-5 before:rounded-l-full before:top-0",
      className,
    )}
  >
    {children}
  </label>
);

export default Label;
