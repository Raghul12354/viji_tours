import Link from "next/link";

export default function Button() {
  return (
    <Link href="/contact">
      <button className="bg-yellow-400 capitalize text-xl font-semibold px-8 py-3 rounded-lg">Enquire Now</button>
    </Link>
  );
}
