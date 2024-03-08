"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

interface AuthState {
  email: string;
  password: string;
}

const Auth: React.FC = () => {
  let router = useRouter();
  const [state, setState] = useState<AuthState>({
    email: "",
    password: "",
  });

  const { email, password } = state;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload: { email: string; password: string } = { email, password };

    try {
   
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        payload
      );
      console.log(response);
      window.sessionStorage.setItem("token", response?.data?.access_token);
      if (response?.status == 201) {
        router.push("/navbar");
        toast.success(`successfully login`);
      }
    } catch (error) {
      console.error(error);
      toast.error("user unauthorized");
    }

    setState({
      email: "",
      password: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <section className="h-[84vh] w-[100vw] flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 text-gray-600"
      >
        <div>
          <input
            className="p-[15px] w-[20rem] rounded"
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="enter emaill"
          />
        </div>
        <div>
          <input
            className="p-[15px] w-[20rem] rounded"
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="enter password"
          />
        </div>
        <div>
          <button className="p-[15px] w-[20rem] rounded text-white bg-blue-400 mt-2">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Auth;
