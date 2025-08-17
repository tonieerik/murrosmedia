"use client";

import { urlForImage } from "@/lib/sanity";
import Image from "next/image";

type ImageBlockProps = {
  image?: any;
  alt?: string;
  fullWidth?: boolean;
};

const ImageBlock = ({ image, alt = "", fullWidth = true }: ImageBlockProps) => {
  if (!image) return null;

  const imageUrl = urlForImage(image).width(1600).url();

  return (
    <div className={fullWidth ? "w-full" : "max-w-3xl mx-auto"}>
      <Image
        src={imageUrl}
        alt={alt}
        width={1600}
        height={900}
        className="w-full h-auto object-cover rounded-md shadow-md"
      />
    </div>
  );
};

export default ImageBlock;
