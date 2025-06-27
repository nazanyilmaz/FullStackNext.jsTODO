"use client";

import { RiDeleteBin5Line } from "react-icons/ri";

const Delete = ({ id, handleDelete }) => {
  return (
    <div onClick={() => handleDelete(id)}>
      <RiDeleteBin5Line
        size={25}
        className="text-red-300 hover:text-red-400 transition"
      />
    </div>
  );
};

export default Delete;
