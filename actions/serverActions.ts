"use server";

import { revalidateTag } from "next/cache";

export const addData = async (formData: FormData) => {
  "use server";

  const name = formData?.get("name");
  const age = formData?.get("age");

  if (!name || !age) return;

  const newProduct = {
    name,
    age,
  };

  await fetch("http://localhost:8888/data", {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: {
      "Content-Type": "application/json",
    },
  });

  revalidateTag("data"); // or revalidatePath('/')
};

export const deleteData = async (id: string) => {
  "use server";

  await fetch(`http://localhost:8888/data/${id}`, {
    method: "DELETE",
  });

  revalidateTag("data");
};
