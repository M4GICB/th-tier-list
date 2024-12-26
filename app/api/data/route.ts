import clientPromise from "@/lib/utils/db"; // Adjust the import path if necessary.
import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("Trying GET data...");
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);

    // Fetch data from the 'heroes' collection
    const dataHeroes = await db.collection("heroes").find({}).toArray();

    // Structure the result
    const result = { heroes: dataHeroes };

    return NextResponse.json(result); // Send the response
  } catch (error) {
    console.log("DATA.JS - DB ERROR LOGGING...");
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    ); // Send an error response
  }
}
