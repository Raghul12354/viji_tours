"use client";
import { useEffect, useState } from "react";
import FormComponent from "./form";

const getUsers = async () => {
  const res = await fetch("http://localhost:3000/api/booking", {
      next: { revalidate: 0 },
  });
  const result = await res.json();
  return result.data;
  };
  // getUsers().then((results) => console.log('log result:',results))

const DashboardPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers()
      .then((result) => {
        console.log(result);
        setUsers(result);
      })
      .catch((error) => {
        console.error("Error fetching users data:", error);
      });
  }, []);
  return (
    <div>
      <h2>DashboardPage</h2>
      {/* <div className="flex justify-center">
        <FormComponent />
      </div> */}

      {/* display users */}
      {users.map((items: any) => {
        return (
          <div key={items.id}>
            <p>{items.id}</p>
            <p>{items.username}</p>
            <p>{items.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardPage;