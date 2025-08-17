"use client";

import { urlForImage } from "@/lib/sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image, { ImageLoaderProps, ImageProps } from "next/image";

type Props = Omit<ImageProps, "src"> & {
  src: SanityImageSource;
};

const SanityImage = ({ src, alt, ...props }: Props) => {
  const sanityLoader = ({ width, quality }: ImageLoaderProps) =>
    urlForImage(src)
      .width(width)
      .quality(quality || 75)
      .url();

  return (
    <Image
      loader={sanityLoader}
      src={urlForImage(src).url()}
      alt={alt}
      loading="lazy"
      {...props}
    />
  );
};

export default SanityImage;
