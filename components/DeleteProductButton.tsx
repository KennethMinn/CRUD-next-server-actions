"use client";

import { deleteData } from "@/actions/serverActions";
import React, { useTransition } from "react";

const DeleteProductButton = ({ id }: any) => {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      onClick={() => startTransition(() => deleteData(id))}
      className=" bg-black text-white py-2 rounded-md"
    >
      {isPending ? "Deleting..." : "Delete"}
    </button>
  );
};

export default DeleteProductButton;
