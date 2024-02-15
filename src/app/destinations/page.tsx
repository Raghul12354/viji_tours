// import Tour from "@/components/destinations/Tour";

import Link from "next/link";

// const destinations = () => {
//   return (
//     <main className="px-48">
//       <h2>Destinations list</h2>
//       {/* filters like menu */}
//       <div>
//         <button>days</button>
//         <button>location</button>
//       </div>
//       {/* search bar */}
//       <p>searchbar</p>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-12 py-20">
//         <Tour />
//         <Tour />
//         <Tour />
//         <Tour />
//         <Tour />
//         <Tour />
//       </div>
//     </main>
//   );
// };

// export default destinations;

async function GetProducts() {
  const response = await fetch("https://dummyjson.com/products/?limit=10");
  const data = await response.json();
  return data.products;
}

export default async function Destinations() {
  const Products = await GetProducts();
  console.log({ Products });

  const handleClicks = () => {};
  return (
    <div className="flex flex-col gap-10">
      {Products.map((item: any) => {
        const { id, title, price } = item;
        return (
          <div className="border-1 bg-blue-500 flex flex-col gap-10 w-screen text-3xl font-medium">
            <p className="">{id}</p>
            <p>{title}</p>
            <p>{price}</p>
            <Link href={`/destinations/${id}`}>
              <button className="bg-green-300">see details</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
