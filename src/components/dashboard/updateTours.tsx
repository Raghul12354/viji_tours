"use client";

import { useState } from "react";

const UpdateTours = () => {
  const [updateTours, setUpdateTours] = useState({
    img: "",
    title: "",
    description: "",
    location: "",
  });

  const handleTours = (e: any) => {
    const { name, value } = e.target;
    setUpdateTours({ ...updateTours, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/destinations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateTours),
      });
      if (res.ok) {
        setUpdateTours({
          img: "",
          title: "",
          description: "",
          location: "",
        });
      } else {
        console.log("Error Updating the tour");
      }
    } catch (error) {
      console.log(error, "failed to update the tours in db");
    }
  };
  // const handleDragEnter = (e: any) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  // };

  // const handleDropImages = (e: any) => {
  //   e.preventDefault();
  //   const droppedImage = e.dataTransfer.files[0];
  //   setUpdateTours({ ...updateTours, img: droppedImage });
  // };

  return (
    <div className="bg-white w-fit rounded my-20">
      <h3 className="text-center text-xl font-medium pt-10">
        Add New Tours Here
      </h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 w-full p-10"
      >
        {/* <div
          onDragOver={handleDragEnter}
          onDrop={handleDropImages}
          className="flex flex-col text-base font-medium bg-blue-300 p-10 rounded-md gap-5"
        >
          Drag and Drop or Choose Images
          <input onChange={handleSubmit} type="file" />
        </div> */}
        {/* <input type="file" /> */}
        <input
          className="rounded-md p-3 text-base capitalize bg-gray-100"
          type="text"
          name="img"
          value={updateTours.img}
          onChange={handleTours}
          placeholder="img"
          required
        />
        <input
          className="rounded-md p-3 text-base capitalize bg-gray-100"
          type="text"
          name="title"
          value={updateTours.title}
          onChange={handleTours}
          placeholder="title of your tour"
          required
        />
        <input
          className="rounded-md p-3 text-base capitalize bg-gray-100"
          type="text"
          name="description"
          value={updateTours.description}
          onChange={handleTours}
          placeholder="description of your tour"
          required
        />
        <input
          className="rounded-md p-3 text-base capitalize bg-gray-100"
          type="text"
          name="location"
          value={updateTours.location}
          onChange={handleTours}
          placeholder="location of your tour"
          required
        />
        <button className="bg-green-300 rounded-md px-6 py-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateTours;
