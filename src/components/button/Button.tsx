import Link from "next/link";

export default function Button({ classProp }: { classProp: string }) {
  return (
    <Link href="/contact">
      <button
        className={`bg-yellow-400 hover:bg-yellow-500 capitalize md:text-xl font-semibold md:px-8 md:py-3 rounded-lg ${classProp}`}
      >
        Enquire Now
      </button>
    </Link>
  );
}
