import {NextResponse} from 'next/server'
import { PrismaClient } from '@prisma/client';

export async function POST(req){
  const studentsData = await req.json();

  try{
    const Prisma = new PrismaClient();

    const result = await Prisma.student.createMany({
      data: studentsData
    });
      
    return NextResponse.json({message: "Success", data: result});
  }catch(err){
    return NextResponse.json({message: "Failed", error: err});
  }
}