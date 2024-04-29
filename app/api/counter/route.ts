import { type NextRequest, NextResponse } from "next/server";

interface Context {
  params: undefined;
}

export async function POST(request: NextRequest, context: Context) {
  const body: { amount: number } = await request.json();
  const { amount = 1 } = body;

  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json({ data: amount });
}