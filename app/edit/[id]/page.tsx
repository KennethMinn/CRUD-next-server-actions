import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import React from "react";

const Edit = ({ params }: { params: { id: string } }) => {
  const updateData = async (formData: FormData) => {
    "use server";

    const name = formData?.get("name");
    const age = formData?.get("age");

    if (!name || !age) return;

    const updatedProduct = {
      name,
      age,
    };

    await fetch(`http://localhost:8888/data/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedProduct),
      headers: {
        "Content-Type": "application/json",
      },
    });

    revalidateTag("data"); // or revalidatePath(`/edit/${id}`)
    redirect("/");
  };

  return (
    <div>
      <form action={updateData} className="border-2 p-5 flex flex-col gap-4">
        <h1 className=" text-2xl font-bold">Update Form</h1>
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
        <button type="submit" className=" bg-black text-white py-2 rounded-md">
          Update
        </button>
      </form>
    </div>
  );
};

export default Edit;
