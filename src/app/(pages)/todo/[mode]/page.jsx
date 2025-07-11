import FormMode from "@/app/components/form";
import { Delius } from "next/font/google";

const delius = Delius({
  weight: "400",
  subsets: ["latin"],
});

const getTodoById = async (id) => {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://full-stack-next-js-todo.vercel.app";
  const res = await fetch(`${baseUrl}/api/todos/${id}`);

  if (!res.ok) return null;

  return res.json();
};

const Form = async ({ params }) => {
  const { mode } = await params;
  const isEditMode = mode !== "new" ? true : false;

  let editItem = null;
  if (isEditMode) {
    editItem = await getTodoById(mode);
  }

  return (
    <div
      style={delius.style}
      className=" my-20 font-extrabold text-xl flex flex-col  items-center gap-3 "
    >
      <h1 className="font-extrabold text-4xl my-6 text-zinc-600 flex flex-col">
        {isEditMode ? "Gorevi Guncelle" : "Yeni Gorev Olustur"}
      </h1>
      <FormMode editItem={editItem} />
    </div>
  );
};

export default Form;
