"use client";
import React, { useState } from "react";
import HyperText from "@/components/magicui/hyper-text";
import Link from "next/link";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Dummy credentials for admin login
  const adminCredentials = {
    email: "admin@example.com",
    password: "password123",
  };

  // Function to handle login
  const handleLoginSubmit = (e: any) => {
    e.preventDefault();
    // Check if the input matches admin credentials
    if (
      email === adminCredentials.email &&
      password === adminCredentials.password
    ) {
      setLoggedIn(true); // Set the login status to true
      setShowLogin(false); // Close the login modal
    } else {
      setLoginError("Invalid email or password.");
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    setLoggedIn(false); // Set the login status to false
    setEmail(""); // Clear the email and password fields
    setPassword("");
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between px-5 md:px-20 py-2 bg-white">
      <div className="logo flex justify-center md:justify-start ">
        <Link href={"/"}>
          <HyperText
            text="MERAKI"
            className="text-2xl font-bold text-black dark:text-white"
          />
        </Link>
      </div>
      <div>
        <ul className="flex flex-col md:flex-row">
          <li className="mx-3 py-2 font-semibold">
            <Link href={"/collection"}>Collection</Link>
          </li>
          <li className="mx-3 py-2 font-semibold">
            <Link href={"/about"}>About us</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-col md:flex-row">
          <li className="mx-3 py-2 font-semibold cursor-pointer">
            {/* Conditionally render the account options */}
            {loggedIn ? (
              <h1 onClick={handleLogout}>Logout</h1>
            ) : (
              <h1 onClick={() => setShowLogin(!showLogin)}>Account</h1>
            )}
          </li>
          <li className="mx-3 py-2 font-semibold">
            <h1>Cart</h1>
          </li>
        </ul>
        {/* Account login form (shown only when not logged in) */}
        {showLogin && !loggedIn && (
          <div className="absolute top-16 right-10 p-5 bg-white border shadow-lg rounded-md z-50">
            <h2 className="text-xl font-semibold mb-4">Admin Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <input
                type="email"
                placeholder="Email"
                className="border px-2 py-1 mb-3 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="border px-2 py-1 mb-3 w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {loginError && (
                <p className="text-red-500 text-sm">{loginError}</p>
              )}
              <button
                type="submit"
                className="bg-blue-500 text-white py-1 px-4 rounded-md w-full"
              >
                Login
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
