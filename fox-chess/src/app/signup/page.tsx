"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";;
import axiosInstance from "@/utils/axiosInstance"

const SimpleForm = () => {
  const navigate = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async(data: any) => {
    console.log("Form Data:", data);
    // reset(); // Reset form after submission
    try {
      const response = await axiosInstance.post("/signup", data);
      debugger
      if(response.data.StatusCode=="1"){

        navigate.push("/home");

      }
      // console.log("AResponsePI :", response.data);

      alert("Signup successful!");
      reset(); // Reset form after successful submission
    } catch (error: any) {
      console.error("Error submitting form:", error);
      alert(error.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

        {/* Name Input */}
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          {...register("name", { required: "Name is required1" })}
          className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
        />
        <p className="text-red-500 text-sm">
          {errors.name?.message && String(errors.name.message)}
        </p>

        {/* Email Input */}
        <label className="block text-gray-700 mt-3">Email</label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
        />
        <p className="text-red-500 text-sm">
          {errors.email?.message && String(errors.email.message)}
        </p>

        {/* Password Input */}
        <label className="block text-gray-700 mt-3">Password</label>
        <input
          type="password"
          {...register("password", { required: "Password is required", minLength: { value: 6, message: "Must be at least 6 characters" } })}
          className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
        />
        <p className="text-red-500 text-sm">
          {errors.password?.message && String(errors.password.message)}
        </p>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;
