"use client";

import Link from "next/link";
import ProtectedRoute from "../ProtectedRoute";
import { useRouter } from "next/navigation";

const Navbar = () => {
  let route = useRouter();

  return (
    <section className="min-h-screen flex flex-col items-center">
      <div className="h-[70px] w-[100%] bg-blue-400 flex justify-evenly items-center text-white">
        <Link href="">Public Home</Link>
        <ProtectedRoute>
          <Link href="navbar/home">Profile</Link>
        </ProtectedRoute>
        {window.sessionStorage.getItem("token") ? (
          <p
            className="cursor-pointer p-2 text-gray-600 bg-red-200 rounded"
            onClick={() => {
              window.sessionStorage.clear();
              location.reload();
            }}
          >
            Logout
          </p>
        ) : (
          <p
            className="cursor-pointer p-2 text-gray-600 bg-green-400 rounded"
            onClick={() => {
              route.push("/");
            }}
          >
            Login
          </p>
        )}
      </div>
      <div className="">
        <figure>
          <img
            className="w-[100vw] h-[89vh]"
            src="https://wallpapers.com/images/featured/beautiful-background-td7gsxerv3ecl20h.jpg"
          />
        </figure>
      </div>
    </section>
  );
};

export default Navbar;
