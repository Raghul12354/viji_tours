import Users from "@/components/dashboard/Users";
import Link from "next/link";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

// ** auth, add: how we work section and animations add:Faq in booking form page and policy information also

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