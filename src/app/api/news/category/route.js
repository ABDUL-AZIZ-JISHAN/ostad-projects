import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  let { searchParams } = new URL(req.url);
  let categoryId = parseInt(searchParams.get("id"));

  try {
    const prisma = new PrismaClient();
    const result = await prisma.news_list.findMany({
      where: {
        catID: categoryId,
      },
      select: {
        id: true,
        title: true,
        short_des: true,
        img1: true,
        img2: true,
        img3: true,
        img4: true,
        createdAt: true,
      },
    });
    return NextResponse.json(
      { status: "success", data: result },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({ status: "fail", error: e }, { status: 400 });
  }
}
