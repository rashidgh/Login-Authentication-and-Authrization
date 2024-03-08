"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const page = () => {
  let [data, setData] = useState<{
    avatar: string;
    email: string;
    name: string;
    role: string;
  }>({ avatar: "", email: "", name: "", role: "" });
  let token: string;
  let accessToken = sessionStorage.getItem("token");
  if (accessToken) {
    token = accessToken;
  }
  let fetchData = async () => {
    try {
      let res = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      let data = await res.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-full flex justify-center items-center min-h-screen">
      <figure>
        <div className="w-[25%]">
          <img src={data.avatar} alt="" className="w-full" />
        </div>
        <figcaption>
          <section className="flex justify-start">
            <div>Name:</div>
            <div>{data.name}</div>
          </section>
          <section className="flex justify-start">
            <div>Role:</div>
            <div>{data.role}</div>
          </section>
        </figcaption>
      </figure>

      <Link href="/navbar" className="p-4 bg-green-300 text-gray-600 rounded">Go to Home</Link>
    </div>
  );
};

export default page;
