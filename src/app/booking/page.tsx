"use client";
import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Modal } from "@/components/booking/modal";
import { DateComp } from "@/components/booking/dateComp";

const Booking = () => {
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
    if (!form.name || !form.email || !form.number || !form.tourName) {
      alert("Please fill in all fields");
      return;
    }
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
      // console.log("Form submitted successfully:", data);
    } catch (error) {
      // console.error("Error while submitting form:", error);
    }
  };
  return (
    <div className="p-6 md:px-40 w-screen min-h-screen py-10">
      <form
        onSubmit={handleSubmit}
        className="p-8 md:p-20 bg-white shadow-xl rounded"
      >
        {/* tour details */}
        <div>
          <h2 className="text-2xl md:text-3xl font-medium mb-4">
            Destination Details
          </h2>
          <Separator className="mb-10 bg-black" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <label className="booking_label">
              Select your favorite Destination
              <select
                className="booking_input pt-1"
                onChange={handleForm}
                value={form.tourName}
                name="tourName"
                id=""
              >
                <option value="">Select...</option>
                <option value="TamilNadu Tour">TamilNadu Tour</option>
                <option value="Kerala Tour">Kerala Tour</option>
                <option value="Goa Tour">Goa Tour</option>
              </select>
            </label>
            <label className="booking_label">
              Would you like assistance with transportation?
              <select className="booking_input pt-1" name="transport" id="">
                <option value="">Select...</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
            {/*  */}
            <label className="booking_label">
              Start Date
              {/* <input className="booking_input " type="date" /> */}
              <DateComp nameProp="Select your start date" />
            </label>
            <label className="booking_label">
              End Date
              {/* <input className="booking_input " type="date" /> */}
              <DateComp nameProp="Select your end date" />
            </label>
            <label className="booking_label">
              No. of Adults
              <input className="booking_input " type="text" />
            </label>
            <label className="booking_label">
              No. of Children
              <input className="booking_input " type="text" />
            </label>
          </div>
        </div>
        {/* personal details */}
        <div>
          <h2 className="text-2xl md:text-3xl font-medium mb-4 mt-10">
            Personal Details
          </h2>
          <Separator className="mb-10 bg-black" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <label className="booking_label">
              Name
              <input
                className="booking_input"
                type="text"
                name="name"
                onChange={handleForm}
                value={form.name}
              />
            </label>
            <label className="booking_label">
              Email
              <input
                className="booking_input"
                onChange={handleForm}
                value={form.email}
                type="email"
                name="email"
              />
            </label>
            <label className="booking_label">
              Number
              <input
                className="booking_input"
                onChange={handleForm}
                value={form.number}
                type="text"
                name="number"
              />
            </label>
            {/* <label className="booking_label">
            <textarea
            className="border-2"
              placeholder="Message here..."
              name=""
              id=""
              cols={30}
              rows={10}
            />
          </label> */}
            <label className="booking_label">
              Number
              <input className="booking_input" type="text" name="number" />
            </label>
          </div>
        </div>
        {/* <Modal /> */}
        <button
          className="text-lg md:text-xl font-medium bg-yellow-400 rounded-xl px-16 py-3 shadow-md hover:bg-yellow-500 mt-12 md:mt-16 mx-auto flex"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Booking;