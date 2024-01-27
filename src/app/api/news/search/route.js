import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const GET = async (req, res) => {
  const { searchParams } = new URL(req.url);
  const keyword = searchParams.get("keyword");
  try {
    const prisma = new PrismaClient();
    const result = await prisma.news_list.findMany({
      where: { title: { contains: keyword } },
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
    return NextResponse.json({ success: true, data: result }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: err, success: false, error: err },
      { status: 400 }
    );
  }
};
