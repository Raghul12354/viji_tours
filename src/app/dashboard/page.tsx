"use client";
import { useEffect, useState } from "react";
import EditBtn from "@/components/dashboard/EditBtn";

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
    <div className="px-6 md:px-40 min-h-screen max-w-screen">
      <h2>DashboardPage</h2>
      {/*
      <div className="flex justify-center">
        <FormComponent />
      </div> */}
      <table className="bg-white w-full my-20 rounded">
        <thead>
          <tr>
            <th className="px-4 py-2 text-base md:text-lg font-semibold">Id</th>
            <th className="px-4 py-2 text-base md:text-lg font-semibold">
              Name
            </th>
            <th className="px-4 py-2 text-base md:text-lg font-semibold">
              Email
            </th>
            <th className="px-4 py-2 text-base md:text-lg font-semibold">
              Number
            </th>
            <th className="px-4 py-2 text-base md:text-lg font-semibold">
              TourName
            </th>
            <th className="px-4 py-2 text-base md:text-lg font-semibold">
              Transport
            </th>
            <th className="px-4 py-2 text-base md:text-lg font-semibold">
              No. of Adults
            </th>
            <th className="px-4 py-2 text-base md:text-lg font-semibold">
              No. of Children
            </th>
            <th className="px-4 py-2 text-base md:text-lg font-semibold">
              Start Date
            </th>
            <th className="px-4 py-2 text-base md:text-lg font-semibold">
              End Date
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((items) => {
            const {
              id,
              username,
              email,
              phonenumber,
              tourname,
              transport,
              adults,
              children,
            } = items;
            return (
              <tr
                key={id}
                className="text-center hover:scale-100 transition-all duration-300 hover:shadow-2xl h-16 min-h-20"
              >
                <td className="bg-white shadow-md px-4 py-2 text-gray-600">
                  {id}
                </td>
                <td className="bg-white shadow-md px-4 py-2 text-gray-600">
                  {username}
                </td>
                <td className="bg-white shadow-md px-4 py-2 text-gray-600">
                  {email}
                </td>
                <td className="bg-white shadow-md px-4 py-2 text-gray-600">
                  {phonenumber}
                </td>
                <td className="bg-white shadow-md px-4 py-2 text-gray-600">
                  {tourname}
                </td>
                <td className="bg-white shadow-md px-4 py-2 text-gray-600">
                  {transport}
                </td>
                <td className="bg-white shadow-md px-4 py-2 text-gray-600">
                  {adults}
                </td>
                <td className="bg-white shadow-md px-4 py-2 text-gray-600">
                  {children}
                </td>
                <td className="bg-white shadow-md px-4 py-2 text-gray-600">
                  {tourname}
                </td>
                <td className="bg-white shadow-md px-4 py-2 text-gray-600">
                  {tourname}
                </td>
                <td className="px-4 py-2">
                  <button className="cursor-pointer">
                    <EditBtn />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardPage;