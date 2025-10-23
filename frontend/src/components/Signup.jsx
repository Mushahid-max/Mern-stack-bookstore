
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4002/users/signup", userInfo);
      if (res.data) {
        toast.success("Signup Successful! Please login.");
        navigate("/"); 
        setTimeout(() => {
          document.getElementById("my_modal_3")?.showModal(); 
        }, 300);
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        toast.error(err.response.data.message);  
      } else {
        toast.error("An error occurred during signup!");
      }
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Signup</h3>

            {/* Fullname input */}
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your name"
                className="py-1 w-80 px-3 border rounded-md outline-none"
                {...register("fullname", { 
                  required: "*This field is required",
                  pattern: {
                    value: /^[A-Za-z\s]+$/, 
                    message: "Only letters are allowed." 
                  }
                })}
              />
              {errors.fullname && <span className="text-red-500 text-sm">{errors.fullname.message}</span>}
            </div>

            {/* Email input */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="py-1 w-80 px-3 border rounded-md outline-none"
                {...register("email", { required: "*This field is required" })}
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>

            {/* Password input */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="py-1 w-80 px-3 border rounded-md outline-none"
                {...register("password", { required: "*This field is required" })}
              />
              {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
            </div>

            {/* Buttons */}
            <div className="flex justify-around mt-6">
              <button
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-800 duration-200"
              >
                Signup
              </button>
              <p className="text-xl">
                Have an account?{" "}
                <button
                  className="underline text-blue-500 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/");
                    setTimeout(() => {
                      document.getElementById("my_modal_3").showModal();
                    }, 100);
                  }}
                >
                  Login
                </button>
                <Login />
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
