import {NextResponse} from 'next/server'
import { PrismaClient } from '@prisma/client';

// get single student
export async function GET(req){
   const url = req.url.split('/');
   const studentId = url[url.length - 1];

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

// update single student

export async function PUT(req){
   const url = req.url.split('/');
   const studentId = url[url.length - 1];

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

// delete a single student 

export async function DELETE(req){
    const url = req.url.split('/');
    const studentId = url[url.length - 1];

  try{
    const Prisma = new PrismaClient();

    const result = await Prisma.student.delete({
        where: {id: parseInt(studentId)}
    });

    return NextResponse.json({message: "Success", data: result});
  }catch(err){
    return NextResponse.json({message: "Failed", error: err});
  }
}