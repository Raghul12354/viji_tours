import FormComponent from "./form";

const getUsers = async () => {
  const res = await fetch("http://localhost:3000/api/booking");
  const result = await res.json();
  return result.data
};

getUsers()
  .then((result) => {
    console.log(result, "success nae");
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });


const dashboardPage = () => {
  const userData = getUsers();
  console.log(userData);
  return (
    <div>
      <h2>dashboardPage</h2>
      {/* <div className="flex justify-center">
        <FormComponent />
      </div> */}

      {/* display users */}
      <div><p></p></div>
    </div>
  );
};

export default dashboardPage;
