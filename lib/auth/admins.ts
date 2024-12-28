import clientPromise from "../utils/db"; // Adjust the import path if necessary.

export const checkAdmin = async (email: any) => {
  const client = await clientPromise;
  const db = client.db(process.env.DB_NAME);

  // Fetch data from the 'heroes' collection
  const admin_records = await db.collection("admins").find({}).toArray();
  const admins = admin_records.map((admin) => admin.email);
  return admins.includes(email);
};
