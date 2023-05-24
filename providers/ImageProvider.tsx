import React, { FC } from "react";
import Image from "next/image";

interface Props {
  alt?: string;
  src: string;
  unoptimized?: boolean;
  height?: string;
  width?: number | string;
  priority?: boolean;
  styles?: object;
  aspectRatio?: number;
}

const ImageProvider: FC<Props> = ({
  alt = "alt",
  src,
  unoptimized,
  height,
  width,
  priority,
  styles,
  aspectRatio,
}) => {
  return (
    <div
      style={{
        width: width,
        height: `${height ? height : "auto"}`,
        aspectRatio: aspectRatio,
      }}
      className="relative"
    >
      <Image
        src={src}
        alt={alt}
        unoptimized={unoptimized}
        priority={priority}
        fill={true}
        style={{ ...styles }}
      />
    </div>
  );
};
export default ImageProvider;
