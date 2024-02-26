import Link from "next/link";

export default function Button({
  classProp,
  nameProp,
  linkProp,
}: {
  classProp: string;
  nameProp: string;
  linkProp: string;
}) {
  return (
    <Link href={linkProp}>
      <button
        className={`bg-yellow-400 hover:bg-yellow-500 capitalize md:text-xl font-semibold md:px-8 md:py-3 rounded-lg ${classProp}`}
      >
        {nameProp}
      </button>
    </Link>
  );
}