import Delete from "./delete-block";
import { useTodoStore } from "@/store/todoStore";
import Edit from "./edit-block";

const Card = ({ todo }) => {
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const updateTodo = useTodoStore((state) => state.updateTodo);
  return (
    <div className=" hover:bg-zinc-900 transition cursor-pointer hover:shadow-amber-500 shadow-amber-200 shadow mx-8 lg:mx-3 p-5 ">
      <div className="flex flex-row gap-8 ">
        <div className="flex flex-col gap-1">
          <h4 className="text-xl lg:text-2xl">{todo?.title}</h4>
          <p className="whitespace-pre-wrap text-zinc-400">{todo?.description}</p>
          <span className="">
            {new Date(todo?.createdAt).toLocaleDateString("tr-TR")}
          </span>
        </div>
        <div className="ml-auto flex flex-row gap-5">
          <div>
            <Edit todo={todo} />
          </div>
          <div className="">
            <Delete id={todo.id} handleDelete={deleteTodo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
