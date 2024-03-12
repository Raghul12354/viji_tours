// "use client";
// import { useEffect, useState } from "react";
// import EditBtn from "@/components/dashboard/EditBtn";
// import Loading from "./loading";
// import Link from "next/link";
import Users from "@/components/dashboard/Users";
import Link from "next/link";
import LoginPage from "../login/page";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
// ** good design for skeleton , delete method , auth add: how we work section, nav underlin and animations add:Faq in booking form page and policy information also
// const formatDate = (dateString: any) => {
//   const date = new Date(dateString);
//   return date.toLocaleDateString();
// };

// const getUsers = async () => {
//   const res = await fetch("http://localhost:3000/api/booking", {
//     next: { revalidate: 0 },
//   });
//   const result = await res.json();
//   return result.data;
// };
// getUsers().then((results) => console.log('log result:',results))

const DashboardPage = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  return (
    <div>
      {!!session && <Link href="/logout">Logout</Link>}
      <Users />
    </div>
  );
};

export default DashboardPage;