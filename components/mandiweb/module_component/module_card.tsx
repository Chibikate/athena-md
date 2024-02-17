import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ParsedUrlQueryInput } from "querystring";
import React from "react";

interface Props {
  to: string;
  image: StaticImageData;
  alt: string;
  query: string;
}

const ModuleCard = ({ to, image, alt, query }: Props) => {
  return (
    <Link
      href={{
        pathname: to,
        query: { page: query },
      }}
    >
      <Image
        className="rounded-full hover-border hover:ring-2 ring-offset-2 hover:ring-offset-purple-500 hover-border"
        src={image.src}
        alt={alt}
        width={200}
        height={200}
      />
    </Link>
  );
};

export default ModuleCard;
