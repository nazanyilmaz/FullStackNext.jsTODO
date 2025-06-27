import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const todos = await prisma.todo.findMany();
    return NextResponse.json({
      total: todos.length,
      data: todos,
    });
  } catch (error) {
    return NextResponse.json({ message: "Error fetching todos" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { title, description } = body;

    const newTodo = await prisma.todo.create({
      data: { title, description },
    });

    return NextResponse.json(newTodo);
  } catch (error) {
    console.log("PostError", error);
    return NextResponse.json({ message: "Error creating todo" }, { status: 500 });
  }
}
