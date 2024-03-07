"use client";
import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Modal } from "@/components/booking/modal";
import { DateComp } from "@/components/booking/dateComp";
import { EndDateComp } from "@/components/booking/EndDateComp";
import { z } from "zod";

// **Pending tasks: modal,whatsapp api,dashboard auth, 
const bookingSchema = z.object({
  userName: z
    .string()
    .min(3, { message: "Username must be at least 3 characters." })
    .max(50),
  email: z.string().email({ message: "Please enter a valid email address." }),
  number: z.string().min(10, { message: "Please enter a valid phone number." }),
  tourname: z.string().min(1, { message: "Please select a tour name." }),
  transport: z
    .string()
    .min(1, { message: "Please select transportation preference." }),
  adults: z.string().min(1, { message: "Please enter number of adults." }),
  children: z.string().min(1, { message: "Please enter number of children." }),
  startDate: z.string().min(1, { message: "Please select start date." }),
  endDate: z.string().min(1, { message: "Please select end date." }),
});

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
    splMessage: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const handleForm = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // start_Date Function
  const handleStartDateSelect = (startDate: Date | null) => {
    if (startDate) {
      setForm({ ...form, startDate: startDate.toISOString().split("T")[0] });
    }
  };
  // start_Date Function
  const handleEndDate = (endDate: Date | null) => {
    if (endDate) {
      setForm({ ...form, endDate: endDate.toISOString().split("T")[0] });
    }
  };

  const handleSubmit = async (e: any) => {
    try {
      //** Validate form data using zod schema
      bookingSchema.parse(form);

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
      // If validation fails, set the errors state
      if (error instanceof z.ZodError) {
        setErrors(
          error.errors.reduce((acc: Record<string, string>, curr) => {
            acc[curr.path[0]] = curr.message;
            return acc;
          }, {})
        );
      }
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
            <p className="hidden md:block">
              All fields marked with{" "}
              <span className="text-red-500 text-xl">&apos; * &apos;</span> must
              be filled in
            </p>
          </div>
          <Separator className="mb-10 bg-black" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <label className="booking_label">
              <p>
                Select your favorite Destination{" "}
                <span className="text-red-500">*</span>
              </p>
              {errors.tourname && (
                <p className="text-red-500">{errors.tourname}</p>
              )}
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
              {errors.transport && (
                <p className="text-red-500">{errors.transport}</p>
              )}
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
              {errors.startDate && (
                <p className="text-red-500">{errors.startDate}</p>
              )}
              <DateComp
                nameProp="Select your start date"
                dateProp={handleStartDateSelect}
              />
            </label>
            <label className="booking_label">
              <p>
                End Date <span className="text-red-500"> *</span>
              </p>
              {errors.endDate && (
                <p className="text-red-500">{errors.endDate}</p>
              )}
              <EndDateComp
                nameProp="Select your end date"
                endDateProp={handleEndDate}
              />
            </label>
            <label className="booking_label">
              <p>
                No. of Adults
                <span className="text-red-500"> *</span>
              </p>
              {errors.adults && <p className="text-red-500">{errors.adults}</p>}
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
              {errors.children && (
                <p className="text-red-500">{errors.children}</p>
              )}
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
                Full Name
                <span className="text-red-500"> *</span>
              </p>
              {errors.userName && (
                <p className="text-red-500">{errors.userName}</p>
              )}
              <input
                className="booking_input"
                type="text"
                name="userName"
                onChange={handleForm}
                value={form.userName}
              />
            </label>
            <label className="booking_label ">
              <p>
                Number
                <span className="text-red-500"> *</span>
              </p>
              {errors.number && <p className="text-red-500">{errors.number}</p>}
              <input
                className="booking_input"
                onChange={handleForm}
                value={form.number}
                type="tel"
                name="number"
              />
            </label>
            <label className="booking_label col-span-2">
              <p>
                Email
                <span className="text-red-500"> *</span>
              </p>
              {errors.email && <p className="text-red-500">{errors.email}</p>}
              <input
                className="booking_input"
                onChange={handleForm}
                value={form.email}
                type="email"
                name="email"
              />
            </label>
            <label className="booking_label col-span-2">
              Do you have any special requests?
              <textarea
                className="border-2 w-full mt-3"
                placeholder="Type here..."
                name="splMessage"
                onChange={handleForm}
                value={form.splMessage}
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