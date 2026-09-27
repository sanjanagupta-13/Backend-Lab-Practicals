import connecction from "@/app/lib/pool";
import { NextResponse } from "next/server";

export async function GET(req:Request,{params}:{params:Promise<{id:number}>}) {
    try{
        const {id}=await params;
        const pool=await connecction();
        const students=await pool.query("SELECT * FROM students WHERE id=?",[id]);
        return NextResponse.json(students[0]);
    }
    catch(err){
        return NextResponse.json(err)
    }   

}

