import Image from "next/image";
import Link from "next/link";

const SingleTour = () => {
  return (
    <Link href='/wayanad' className="relative h-[350px] w-full flex flex-col text-white items-center justify-center">
      {/* transform transition-transform duration-300 hover:scale-150 */}
      <Image
        src="https://images.unsplash.com/photo-1542396601-dca920ea2807?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D"
        alt=""
        fill
        className="-z-10 object-cover rounded-xl"
      />
      <h4 className="text-5xl font-medium mb-5">Wayanad Tour</h4>
      <button className="bg-yellow-400 capitalize px-4 py-2 rounded-lg">
        see more
      </button>
    </Link>
  ); 
};

export default SingleTour;
