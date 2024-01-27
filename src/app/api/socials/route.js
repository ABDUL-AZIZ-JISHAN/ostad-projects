import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const GET = async (req, res) => {
  try {
    const prisma = new PrismaClient();
    const result = await prisma.socials.findMany();
    return NextResponse.json({ success: true, data: result }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: err, success: false, error: err },
      { status: 400 }
    );
  }
};
