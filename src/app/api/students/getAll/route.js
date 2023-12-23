import {NextResponse} from 'next/server'
import { PrismaClient } from '@prisma/client';

export async function GET(){
  try{
    const Prisma = new PrismaClient();

    const result = await Prisma.student.findMany();
      
    return NextResponse.json({message: "Success", data: result});
    
  }catch(err){
    return NextResponse.json({message: "Failed", error: err});
  }
}
