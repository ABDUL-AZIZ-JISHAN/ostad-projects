import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const GET = async (req, res) => {
  const { searchParams } = new URL(req.url);
  const postId = parseInt(searchParams.get("postId"));

  try {
    const prisma = new PrismaClient();
    const result = await prisma.comments.findMany({
      where: { postID: postId },
      include: {
        users: { select: { firstName: true, lastName: true } },
      },
    });
    return NextResponse.json(
      { data: result, success: true, message: "Success" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: err, success: false, message: "Failed" },
      { status: err.status }
    );
  }
};
