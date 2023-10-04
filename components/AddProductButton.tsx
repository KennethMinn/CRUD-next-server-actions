"use client";

import { addData } from "@/actions/serverActions";
import React, { useTransition } from "react";

const AddProductButton = () => {
  const [isPending, startTransition] = useTransition();

  const formData = new FormData();
  formData.append("name", "HMH");
  formData.append("age", "19");

  return (
    <button
      type="button"
      onClick={() => startTransition(() => addData(formData))}
      className=" bg-black text-white py-2 rounded-md"
    >
      {isPending ? "Adding..." : "Add"}
    </button>
  );
};

export default AddProductButton;
