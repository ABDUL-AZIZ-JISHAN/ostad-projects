import {NextResponse} from 'next/server'
import { PrismaClient } from '@prisma/client';


// get all students 
export async function GET(){
  try{
    const Prisma = new PrismaClient();

    const result = await Prisma.student.findMany();
      
    return NextResponse.json({message: "Success", data: result});
    
  }catch(err){
    return NextResponse.json({message: "Failed", error: err});
  }
}

// create single student

export async function POST(req){
  const studentData = await req.json();

  try{
    const Prisma = new PrismaClient();

    const result = await Prisma.student.create({
      data: studentData
    });
      
    return NextResponse.json({message: "Success", data: result});
  }catch(err){
    return NextResponse.json({message: "Failed", error: err});
  }
}