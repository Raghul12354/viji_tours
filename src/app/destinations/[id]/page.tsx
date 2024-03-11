import TourComp from "./TourComp";

// export async function generateStaticParams() {
//   const res = await fetch("http://localhost:3000/api/destinations");
//   const data = await res.json();
//   // console.log(data, "hello");
//   return data.data.map((items: any) => ({
//     id: items.id,
//   }));
// }
// generateStaticParams()
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

export default function TourPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <TourComp params={params} />
    </div>
  );
}