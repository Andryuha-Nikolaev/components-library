import { NextResponse } from "next/server"
import { persons } from "@/data/persons"

export async function GET() {
  return NextResponse.json(persons)
}
