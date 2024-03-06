"use client";
import React, { useState } from "react";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/destinations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Handle success
      console.log("Form submitted successfully");
    } catch (error) {
      console.error("There was an error submitting the form:");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10 w-fit">
      <input
        type="text"
        name="id"
        value={formData.id}
        onChange={handleChange}
        placeholder="enter the id of tour"
      />
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="enter the title of tour"
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="enter the description of tour"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;