import TourComp from "./TourComp";

export async function generateStaticParams() {
  const res = await fetch("https://viji-tours.vercel.app/api/destinations");
  const data = await res.json();

  return data.data.map((tour: any) => ({
    id: tour.id.toString(),
  }));
}
// generateStaticParams()
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

export default function TourPage({ params }: { params: { id: string } }) {
  return (
    <>
      <TourComp params={params} />
    </>
  );
}