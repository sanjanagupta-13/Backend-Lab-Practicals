import pool from "@/app/lib/db"; // Adjust the path as necessary
import { NextResponse } from "next/server";

export async function GET() {
    try{

        const result = await pool.query("SELECT * from students");
        return NextResponse.json(result.rows);

    } catch (error) {

        console.error(error);
        return NextResponse.json({ error: "Failed to fetch students" }, { status: 500 });
    }
}