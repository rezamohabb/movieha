"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState, type FC } from "react";

const MovieThumbnail: FC<Parameters<typeof Image>[number]> = ({
  src,
  alt,
  className,
  ...otherProps
}) => {
  const [isLoading, setLoading] = useState<boolean>(true);

  return (
    <div
      className={clsx(
        "w-full rounded-2xl h-[220px] overflow-hidden bg-sky-100 relative before:w-[120px] before:h-[120px] before:bg-sky-950 before:absolute before:right-1/2 before:top-1/2 before:translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:blur-2xl before:scale-150",
        {
          "bg-gray-200": isLoading,
          "before:hidden": !isLoading,
        },
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={160}
        height={220}
        {...otherProps}
        onLoad={() => setLoading(false)}
        className={clsx("w-full h-[220px] transition-all", className, {
          "opacity-0": isLoading,
          "group-hover:brightness-75 opacity-100": !isLoading,
        })}
      />
    </div>
  );
};

export default MovieThumbnail;
