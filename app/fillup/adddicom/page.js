"use client";
import Link from "next/link";
import { useState } from "react";

function FillUpPage() {
  const [fullName, setFullName] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="container mx-auto mt-10 text-center min-h-screen ">
      <h1 className="text-2xl font-semibold mb-4">Certificate Information</h1>
      <div className="max-w-md mx-auto p-5 border rounded-md shadow-md ">
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-600"
          >
            Enter Your Full Name:
          </label>
          <input
            type="text"
            id="fullName"
            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md shadow-sm"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full Name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-600"
          >
            Enter Today&apos;s Date:
          </label>
          <input
            type="date"
            id="date"
            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md shadow-sm"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <Link
          className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
          href={{
            pathname: "http://localhost:3000/certificate/adddicom",
            query: { name: fullName, date: date },
          }}
        >
          Get your Certificate
        </Link>
      </div>
    </div>
  );
}

export default FillUpPage;
