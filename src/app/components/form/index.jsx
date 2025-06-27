"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTodoStore } from "@/store/todoStore";

const FormMode = ({ editItem }) => {
  const { addTodo, updateTodo } = useTodoStore();
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    completed: "Devam Ediyor",
  });
  useEffect(() => {
    if (editItem) {
      setFormData({
        title: editItem.title || "",
        description: editItem.description || "",
        completed: editItem.completed ? "Tamamlandi" : "Devam Ediyor",
      });
    }
  }, [editItem]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!editItem) {
      await addTodo({
        title: formData.title,
        description: formData.description,
        completed: formData.completed === "Tamamlandi",
      });
      setFormData({
        title: "",
        description: "",
        completed: "",
      });
    } else {
      await updateTodo(editItem.id, {
        title: formData.title,
        description: formData.description,
        completed: formData.completed === "Tamamlandi",
      });
    }
    router.push("/todo/todos");
  };

  return (
    <div className="max-w-[600px]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <fieldset className="flex  items-center gap-10">
          <label htmlFor="">Baslik:</label>
          <input
            className="bg-zinc-600 w-[300px]"
            type="text"
            defaultValue={editItem?.title}
            name="title"
            onChange={handleChange}
            required
          />
        </fieldset>
        <fieldset className="flex  items-center gap-4">
          <label htmlFor="">Aciklama:</label>
          <textarea
            className="bg-zinc-600 w-[300px]"
            name="description"
            defaultValue={editItem?.description}
            onChange={handleChange}
            required
          />
        </fieldset>
        <fieldset className="flex  items-center gap-12">
          <label>Surec:</label>
          <select
            name="completed"
            defaultValue={editItem?.completed}
            onChange={handleChange}
            className="bg-zinc-600 text-md px-1 w-[200px]"
          >
            <option>Devam Ediyor</option>
            <option>Tamamlandi</option>
          </select>
        </fieldset>
        <div className=" flex justify-center items-center">
          <button className="bg-amber-500 cursor-pointer my-8  border border-amber-500 hover:rounded-full text-3xl w-[350px] flex justify-center items-center ">
            {editItem ? "Guncelle" : "Olustur"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormMode;
