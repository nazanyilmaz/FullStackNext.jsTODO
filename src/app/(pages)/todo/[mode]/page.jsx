import FormMode from "@/app/components/form";
import { useTodoStore } from "@/store/todoStore";
import { Delius } from "next/font/google";

const delius = Delius({
  weight: "400",
  subsets: ["latin"],
});

const Form = async ({ params }) => {
  const { mode } = await params;
  const fetchTodo = useTodoStore.getState().fetchTodo;
  const isEditMode = mode !== "new" ? true : false;

  let editItem = null;
  if (isEditMode) {
    editItem = await fetchTodo(mode);
  }

  return (
    <div
      style={delius.style}
      className=" my-20 font-extrabold text-xl flex flex-col justify-center items-center gap-3"
    >
      <h1 className="font-extrabold text-4xl my-6 text-zinc-600 flex flex-col">
        {isEditMode ? "Gorevi Guncelle" : "Yeni Gorev Olustur"}
      </h1>
      <FormMode editItem={editItem} />
    </div>
  );
};

export default Form;
