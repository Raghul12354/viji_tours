"use client";

import { signOut } from "next-auth/react";

const Logout = async () => {
  return (
    <button
      onClick={() => {
        signOut();
      }}
      className="bg-red-500 hover:bg-red-400 transition-all duration-300 px-6 py-2 rounded-lg text-xl font-medium"
    >
      Logout
    </button>
  );
};

export default Logout;