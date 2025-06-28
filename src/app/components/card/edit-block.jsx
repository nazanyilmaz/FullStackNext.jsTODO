"use client";

import Link from "next/link";
import { CiEdit } from "react-icons/ci";

const Edit = ({ todo }) => {
  return (
    <Link href={`/todo/${todo?.id}`}>
      <CiEdit size={25} className="text-blue-300 hover:text-blue-400 transition" />
    </Link>
  );
};

export default Edit;
