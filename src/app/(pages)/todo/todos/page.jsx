"use client";

import { useEffect } from "react";
import { useTodoStore } from "@/store/todoStore";
import { Delius } from "next/font/google";
import Card from "@/app/components/card";

const delius = Delius({
  weight: "400",
  subsets: ["latin"],
});

const Todos = () => {
  const { todos, fetchTodos } = useTodoStore();
  useEffect(() => {
    fetchTodos();
  }, []);

  const completed = [...new Set(todos?.map((i, key) => i.completed))];

  return (
    <div className="">
      {completed.map((comp, key) => (
        <div key={key} className="">
          <h2
            style={delius.style}
            className="mt-25 text-xl md:text-3xl text-zinc-400 fmd:ont-bold"
          >
            {comp == true ? "Tamamlanan Gorevler" : "Devam Eden Gorevler"}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
            {todos
              .filter((i) => i.completed == comp)
              .map((todo, key) => (
                <div key={key} className="my-6">
                  <Card todo={todo} />
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;
