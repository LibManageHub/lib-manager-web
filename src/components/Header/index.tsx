"use client";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const { isLoggedIn, logout } = useAuth();
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.push("/login");
  };
  const handleLogin = () => {
    router.push("/login");
  };
  return (
    <div className="px-4 w-full min-h-[50px] bg-purple-50 shadow-lg shadow-purple-100 flex items-center justify-between">
      <h3 className="text-purple-500 font-bold tracking-wider">LibManager</h3>
      {isLoggedIn() ? (
        <button onClick={handleLogout}>Log out</button>
      ) : (
        <>
          <button onClick={handleLogin}>Log in</button>
        </>
      )}
    </div>
  );
};

export default Header;
