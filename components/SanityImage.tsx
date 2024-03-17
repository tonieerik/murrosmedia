"use client";

import { urlForImage } from "@/utils/sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image, { ImageProps } from "next/image";

type Props = Omit<ImageProps, "src"> & {
  src: SanityImageSource;
};

const SanityImage = ({ src, alt, ...props }: Props) => (
  <Image
    src="none"
    alt={alt}
    loader={({ width, quality = 100 }) =>
      urlForImage(src).width(width).quality(quality).url()
    }
    {...props}
  />
);

export default SanityImage;
