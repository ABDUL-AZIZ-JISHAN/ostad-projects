import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const GET = async (req, res) => {
  const { searchParams } = new URL(req.url);
  const newsId = searchParams.get("id");

  try {
    const prisma = new PrismaClient();
    const result = await prisma.news_list.findMany({
      where: { id: parseInt(newsId) },
      include: {
        comments: {
          select: {
            userID: true,
            descriptions: true,
          },
        },
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
