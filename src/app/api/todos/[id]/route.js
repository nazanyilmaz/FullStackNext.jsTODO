import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const todo = await prisma.todo.findUnique({
      where: { id },
    });

    return NextResponse.json(todo);
  } catch (error) {
    console.log("get/id hata", error);
  }
}
export async function PUT(req, context) {
  try {
    const id = context.params.id;
    const body = await req.json();
    const { title, description, completed } = body;

    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: { title, description, completed },
    });

    return NextResponse.json(updatedTodo);
  } catch (error) {
    console.log("update error", error);
    return NextResponse.json({ message: "Error updating todo" }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  const { id } = await params;

  try {
    await prisma.todo.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.log("deleterror", error);
    return NextResponse.json({ message: "Error deleting todo" }, { status: 500 });
  }
}
