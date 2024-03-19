"use client";
import { useEffect, useState } from "react";
import EditBtn from "@/components/dashboard/EditBtn";
import Link from "next/link";
import Loading from "@/app/dashboard/loading";
// ** good design for skeleton(need to learn how to implement) , auth add: how we work section, nav underline and animations add:Faq in booking form page and policy information also

// format Date like 1990-12-12
const formatDate = (dateString: any) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

const getUsers = async () => {
  const res = await fetch("http://localhost:3000/api/booking", {
    next: { revalidate: 0 },
  });
  const result = await res.json();
  return result.data;
};
// getUsers().then((results) => console.log('log result:',results))

const Users = () => {
  const [loading, setLoading] = useState(false);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers()
      .then((result) => {
        // console.log(result);
        setUsers(result);
        setLoading(true);
      })
      .catch((error) => {
        console.error("Error fetching users data:", error);
      });
  }, []);

  // Delete function
  const handleDelete = async (id: string) => {
    try {
      const response = await fetch("http://localhost:3000/api/booking", {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });
      if (response.ok) {
        console.log("User deleted successfully");
        setUsers((users) => {
          return users.filter((user) => (user as any).id !== id);
        });
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="px-6 md:px-20 min-h-screen max-w-screen">
      {/*
        <div className="flex justify-center">
          <FormComponent />
        </div> */}
      {loading ? (
        <table className="bg-white w-full my-20 rounded table-auto">
          <thead>
            <tr>
              <th className="table_header">id</th>
              <th className="table_header">Name</th>
              <th className="table_header">Email</th>
              <th className="table_header">Number</th>
              <th className="table_header">TourName</th>
              <th className="table_header">Transport</th>
              <th className="table_header">No. of Adults</th>
              <th className="table_header">No. of Children</th>
              <th className="table_header">Start Date</th>
              <th className="table_header">End Date</th>
              <th className="table_header">Message</th>
            </tr>
          </thead>
          <tbody>
            {users.map((items) => {
              const {
                id,
                name,
                email,
                phonenumber,
                tourname,
                transport,
                adults,
                children,
                startdate,
                enddate,
                splmessage,
              } = items;
              return (
                <tr
                  key={id}
                  className="text-center hover:scale-100 transition-all duration-300 hover:shadow-2xl h-16 min-h-20 "
                >
                  <td className="table_data">{id}</td>
                  <td className="table_data">{name}</td>
                  <td className="table_data">
                    <Link href={`mailto:${email}`}>{email}</Link>
                  </td>
                  <td className="table_data">
                    <Link href={`tel:${phonenumber}`}>{phonenumber}</Link>
                  </td>
                  <td className="table_data">{tourname}</td>
                  <td className="table_data">{transport}</td>
                  <td className="table_data">{adults}</td>
                  <td className="table_data">{children}</td>
                  <td className="table_data">{formatDate(startdate)}</td>
                  <td className="table_data">{formatDate(enddate)}</td>
                  <td className="table_data">{splmessage}</td>
                  <td className="px-4 py-2">
                    <button className="cursor-pointer">
                      <EditBtn onDelete={() => handleDelete(id)} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Users;