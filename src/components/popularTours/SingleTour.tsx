import Link from "next/link";
import Image from "next/image";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const SingleTour = ({
  gridClass,
  imgProp,
  altProp,
  titleProp,
  cityProp,
  linkProp,
}: {
  gridClass: string;
  imgProp: string;
  altProp: string;
  titleProp: string;
  cityProp: string;
  linkProp: string;
}) => {
  return (
    <Link
      href={linkProp}
      className={`${gridClass} h-[200px] relative grid grid-cols-1 items-end pb-7 text-white`}
    >
      <Image
        src={imgProp}
        alt={altProp}
        fill
        sizes="100vw"
        className="object-cover -z-10 rounded-2xl"
      />
      <div className="flex justify-between px-7 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold capitalize">{titleProp}</h3>
          <p className="text-sm md:text-lg font-normal capitalize">{cityProp}</p>
        </div>
        <ArrowTopRightIcon className="h-6 w-6 border rounded-full" />
      </div>
    </Link>
  );
};

export default SingleTour;