import { addData } from "@/actions/serverActions";
import AddProductButton from "@/components/AddProductButton";
import DeleteProductButton from "@/components/DeleteProductButton";
import Link from "next/link";
import React from "react";

const page = async () => {
  const res = await fetch("http://localhost:8888/data", {
    cache: "no-cache",
    next: {
      tags: ["data"],
    },
  });

  const data = await res.json();

  return (
    <>
      <div className=" flex justify-center gap-5 mt-3">
        <form action={addData} className="border-2 p-5 flex flex-col gap-4">
          <h1 className=" text-2xl font-bold">Create Form</h1>
          <div className="">
            <label htmlFor="">Name</label>
            <input
              className=" border-2 border-gray-200 w-full outline-none rounded-md py-2 ps-3"
              name="name"
            />
          </div>
          <div className="">
            <label htmlFor="">Age</label>
            <input
              className=" border-2 border-gray-200 w-full outline-none rounded-md py-2 ps-3"
              name="age"
            />
          </div>
          <button
            type="submit"
            className=" bg-black text-white py-2 rounded-md"
          >
            Add
          </button>
          <AddProductButton />
        </form>
      </div>
      <div className=" px-10 grid grid-cols-5 gap-4 text-center mt-3">
        {data.map((d: any) => (
          <div className=" col-span-1 border-2">
            <h1>{d.name}</h1>
            <DeleteProductButton id={d.id} />
            <Link href={`/edit/${d.id}`}>
              <button
                type="button"
                className=" py-2 px-1 bg-yellow-400 rounded-md ms-10"
              >
                Edit
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
