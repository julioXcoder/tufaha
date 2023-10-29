"use server";

import { NextRequest, NextResponse } from "next/server";
import { utapi } from "@/server";
import { UploadFileResponse } from "@/types";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const files = formData.getAll("files");
  try {
    const response: UploadFileResponse[] = await utapi.uploadFiles(files);
    return NextResponse.json(response);
  } catch (ex) {
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
