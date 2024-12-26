"use client"; // This is a client component 👈🏽

import React from "react";

export const LoginButton = () => {
  return (
    <button
      // onClick={handleEdit}
      className="bg-slate-600 rounded-md p-3 disabled:opacity-60 transition-all hover:bg-slate-800 text-white"
    >
      <a href="/auth">Login</a>
    </button>
  );
};
