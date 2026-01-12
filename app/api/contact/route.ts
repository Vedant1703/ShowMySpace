import { connectDB } from "@/lib/db";
import { Contact } from "@/models/Contact";
import { NextResponse } from "next/server";

// CREATE: Store new contact entry
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const newEntry = await Contact.create(body);
    return NextResponse.json({ success: true, data: newEntry }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

// READ: Fetch all entries for your independent frontend
export async function GET() {
  try {
    await connectDB();
    const entries = await Contact.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: entries });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}