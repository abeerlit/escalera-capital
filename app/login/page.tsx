"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Header } from "@/components/common/header";
import { Input } from "@/components/auth/input";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("email", email);
    console.log("password", password);
    router.push("/");
  };
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex justify-center items-center bg-gray-200 flex-1">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-white min-w-[500px]"
        >
          <div className="flex flex-col gap-4 p-8">
            <h1 className="text-2xl uppercase mb-2">Login</h1>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={setEmail}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={setPassword}
            />
            <Link
              href="/login"
              className="text-center text-sm text-gray-500 mt-6 uppercase"
            >
              forget your password
            </Link>
          </div>

          <div className="bg-slate-700 text-white text-right p-3">
            <button type="submit" className="uppercase cursor-pointer">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
