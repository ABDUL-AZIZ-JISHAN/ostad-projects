import {NextResponse} from 'next/server'
import { PrismaClient } from '@prisma/client';

export async function GET(req){
   const {searchParams} = new URL(req.url);
   const studentId = searchParams.get("id");

  try{
    const Prisma = new PrismaClient();

    const result = await Prisma.student.findUnique({
        where: {id: parseInt(studentId)}
    });
      
    return NextResponse.json({message: "Success", data: result});
  }catch(err){
    return NextResponse.json({message: "Failed", error: err});
  }
}