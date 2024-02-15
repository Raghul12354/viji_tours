import Link from "next/link";
import Location from "../Icons/Location";
import TimeIcon from "../Icons/TimeIcon";

const Tour = () => {
  return (
    <div className="bg-white shadow-2xl rounded-2xl min-h-[400px]">
      {/* <Link href='/destinations/manali'> */}
      <img
        src="/hero/Test_bg.jpg"
        alt=""
        className="h-64 w-full object-cover rounded-2xl"
        />
        {/* </Link> */}
      <div className="flex flex-col gap-2 p-7">
        <p className="text-gray-500 capitalize text-sm flex flex-row items-center">
          <Location />
          kerala,wayanad
        </p>
        <h5 className="text-xl font-medium capitalize">
          Kerala Wayanad Tour package
        </h5>
        <p className="text-yellow-400 capitalize text-sm flex flex-row items-center">
          <TimeIcon />4 Nights 5 Days
        </p>
        <Link href="/wayanad">
          <button className="bg-yellow-400 font-medium text-base px-5 py-2 rounded hover:bg-yellow-500 mt-3">
            Expore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Tour;
