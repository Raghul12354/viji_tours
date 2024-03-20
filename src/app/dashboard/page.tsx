import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import Users from "@/components/dashboard/Users";
import Logout from "@/components/Logout";
import Link from "next/link";

// ** add: how we work section and animations add:Faq in booking form page and policy information also

const DashboardPage = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  return (
    <div>
      {!!session && <Logout />}
      <Users />
    </div>
  );
};

export default DashboardPage;