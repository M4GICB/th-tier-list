"use client";

//Actions
import { logOut } from "@/lib/auth/actions";

export const EditButton = () => {
  const handleEdit = async () =>
    logOut({ callbackUrl: `${window.location.origin}` });

  return (
    <button
      // onClick={handleEdit}
      className="bg-slate-600 rounded-md p-3 disabled:opacity-60 transition-all hover:bg-slate-800 text-white"
    >
      <a href="/edit">Edit</a>
    </button>
  );
};
