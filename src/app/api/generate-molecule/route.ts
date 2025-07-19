import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const API_KEY = process.env.NVIDIA_API_KEY!;
    const nvidiaUrl =
      "https://health.api.nvidia.com/v1/biology/nvidia/molmim/generate";

    const response = await fetch(nvidiaUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error calling NVIDIA API:", error);
    return NextResponse.json(
      { error: "Failed to call NVIDIA API" },
      { status: 500 },
    );
  }
}
