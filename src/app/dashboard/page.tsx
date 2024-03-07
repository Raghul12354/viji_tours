"use client";
import { useEffect, useState } from "react";
import EditBtn from "@/components/dashboard/EditBtn";
import Loading from "./loading";
import Link from "next/link";

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
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getUsers()
      .then((result) => {
        console.log(result);
        setUsers(result);
        setLoading(true);
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
      {loading ? (
        <table className="bg-white w-full my-20 rounded table-auto">
          <thead>
            <tr>
              <th className="table_header">Id</th>
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
                username,
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
                  className="text-center hover:scale-100 transition-all duration-300 hover:shadow-2xl h-16 min-h-20"
                >
                  <td className="table_data">{id}</td>
                  <td className="table_data">{username}</td>
                  <td className="table_data"><Link href={`mailto:${email}`}>{email}</Link></td>
                  <td className="table_data"><Link href={`tel:${phonenumber}`}>{phonenumber}</Link></td>
                  <td className="table_data">{tourname}</td>
                  <td className="table_data">{transport}</td>
                  <td className="table_data">{adults}</td>
                  <td className="table_data">{children}</td>
                  <td className="table_data">{startdate}</td>
                  <td className="table_data">{enddate}</td>
                  <td className="table_data">{splmessage}</td>
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
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default DashboardPage;