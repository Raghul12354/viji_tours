"use client";
import React, { useState } from "react";

const contact = () => {
  const [form, setFrom] = useState({
    name: "",
    email: "",
    number: "",
    tourName: "",
  });

  const handleForm = (e: any) => {
    setFrom({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      const data = await response.json();
      console.log("Form submitted successfully:", data);
    } catch (error) {
      console.error("Error while submitting form:", error);
    }
  };
  return (
    <div className="px-40 w-screen h-screen">
      <h1 className="text-4xl font-medium capitalize">complete your booking</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 p-20 bg-white shadow-xl"
      >
        <label htmlFor="">
          Name
          <input
            className="bg-gray-300"
            type="text"
            name="name"
            onChange={handleForm}
            value={form.name}
          />
        </label>
        <label htmlFor="">
          Email
          <input
            className="bg-gray-300"
            onChange={handleForm}
            value={form.email}
            type="email"
            name="email"
          />
        </label>
        <label htmlFor="">
          Number
          <input
            className="bg-gray-300"
            onChange={handleForm}
            value={form.number}
            type="text"
            name="number"
          />
        </label>
        <label htmlFor="">
          name of the tour
          <input
            className="bg-gray-300"
            onChange={handleForm}
            value={form.tourName}
            type="text"
            name="tourName"
          />
        </label>
        {/*  */}
        <label htmlFor="">
          start date
          <input className="bg-gray-300" type="text" />
        </label>
        <label htmlFor="">
          end date
          <input className="bg-gray-300" type="text" />
        </label>
        <label htmlFor="">
          no. of adults
          <input className="bg-gray-300" type="text" />
        </label>
        <label htmlFor="">
          no. of children
          <input className="bg-gray-300" type="text" />
        </label>
        {/*  */}
        <label htmlFor="">
          transport
          <input className="bg-gray-300" type="text" />
        </label>
        <button type="submit" className="bg-yellow-400 px-6 py-2 rounded-xl font-semibold text-xl capitalize">submit</button>
      </form>
    </div>
  );
};

export default contact;
