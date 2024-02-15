export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/products/?limit=10");
  const data = await res.json();

  return data.products.map((items: any) => ({
    id: items.id
  }));
}
generateStaticParams().then((result) => console.log(result)).catch((error) => console.error(error));

async function GetTours(id: any) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
  return data
}

export default async function Page({ params }: any) {
  console.log({ params }); // Log the params object
  const id: number = params?.slug; // Use optional chaining to handle undefined params
  const Tours = await GetTours(id);
  console.log({Tours});
  
  return (
    <div>
      <p>{Tours.title}</p>
      <p>{Tours.price}</p>
    </div>
  );
}

