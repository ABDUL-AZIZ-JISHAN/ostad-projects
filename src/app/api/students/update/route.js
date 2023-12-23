import {NextResponse} from 'next/server'
import { PrismaClient } from '@prisma/client';

export async function PUT(req){
   const {searchParams} = new URL(req.url);
   const studentId = searchParams.get("id");

   const updatedData = await req.json();

  try{
    const Prisma = new PrismaClient();

    const result = await Prisma.student.update({
        where: {id: parseInt(studentId)},
        data: updatedData
    });
    
    return NextResponse.json({message: "Success", data: result});
  }catch(err){
    return NextResponse.json({message: "Failed", error: err});
  }
}