"use client";
import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Modal } from "@/components/booking/modal";
import { DateComp } from "@/components/booking/dateComp";

const Booking = () => {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    number: "",
    tourname: "",
    transport: "",
    adults: "",
    children: "",
    startDate: "",
    endDate: "",
  });

  const handleForm = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    if (
      !form.userName ||
      !form.email ||
      !form.number ||
      !form.tourname ||
      !form.transport ||
      !form.adults ||
      !form.children
      // !form.startDate ||
      // !form.endDate
    ) {
      alert("Please fill the required fields");
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
      console.log("Form submitted successfully:", data);
    } catch (error) {
      console.error("Error while submitting form:", error);
    }
  };

  //  EmailHandler
  const handleEmail = async (e: any) => {
    try {
      const res = await fetch("http://localhost:3000/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        throw new Error("Failed to submit Email Form");
      }
    } catch (error) {
      console.error("Error while submitting Email Form:", error);
    }
  };

  return (
    <div className="p-6 md:px-40 w-screen min-h-screen py-10">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
          handleEmail(e);
        }}
        className="p-8 md:p-20 bg-white shadow-xl rounded"
      >
        {/* Tour details  */}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">
              Destination Details
            </h2>
            <p>
              All fields marked with <span className="text-red-500 text-xl">&apos;{" "}*{" "}&apos;</span>{" "}
              must be filled in
            </p>
          </div>
          <Separator className="mb-10 bg-black" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <label className="booking_label">
              <p>
                Select your favorite Destination{" "}
                <span className="text-red-500">*</span>
              </p>
              <select
                className="booking_input pt-1"
                onChange={handleForm}
                value={form.tourname}
                name="tourname"
              >
                <option value="">Select...</option>
                <option value="TamilNadu Tour">TamilNadu Tour</option>
                <option value="Kerala Tour">Kerala Tour</option>
                <option value="Goa Tour">Goa Tour</option>
              </select>
            </label>
            <label className="booking_label">
              <p>
                Would you like assistance with transportation?{" "}
                <span className="text-red-500">*</span>
              </p>
              <select
                className="booking_input pt-1"
                name="transport"
                onChange={handleForm}
                value={form.transport}
              >
                <option value="">Select...</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
            <label className="booking_label">
              <p>
                Start Date
                <span className="text-red-500"> *</span>
              </p>
              <DateComp nameProp="Select your start date" />
            </label>
            <label className="booking_label">
              <p>
                End Date <span className="text-red-500"> *</span>
              </p>
              <DateComp nameProp="Select your end date" />
            </label>
            <label className="booking_label">
              <p>
                No. of Adults
                <span className="text-red-500"> *</span>
              </p>
              <input
                className="booking_input "
                type="text"
                name="adults"
                onChange={handleForm}
                value={form.adults}
              />
            </label>
            <label className="booking_label">
              <p>
                No. of Children
                <span className="text-red-500"> *</span>
              </p>
              <input
                className="booking_input "
                type="text"
                name="children"
                onChange={handleForm}
                value={form.children}
              />
            </label>
          </div>
        </div>
         {/* Personal details  */}
        <div>
          <h2 className="text-2xl md:text-3xl font-medium mb-4 mt-10">
            Personal Details
          </h2>
          <Separator className="mb-10 bg-black" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <label className="booking_label">
              <p>
                Name
                <span className="text-red-500"> *</span>
              </p>
              <input
                className="booking_input"
                type="text"
                name="userName"
                onChange={handleForm}
                value={form.userName}
              />
            </label>
            <label className="booking_label">
              <p>
                Email
                <span className="text-red-500"> *</span>
              </p>
              <input
                className="booking_input"
                onChange={handleForm}
                value={form.email}
                type="email"
                name="email"
              />
            </label>
            <label className="booking_label">
              <p>
                Number
                <span className="text-red-500"> *</span>
              </p>
              <input
                className="booking_input"
                onChange={handleForm}
                value={form.number}
                type="text"
                name="number"
              />
            </label>
            <label className="booking_label">
              Number
              <input className="booking_input" type="text" name="number" />
            </label>
            <label className="booking_label">
              Do you have any special requests?
              <textarea
                className="border"
                placeholder="message here..."
                name=""
                id=""
                cols={30}
                rows={10}
                spellCheck={true}
              />
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