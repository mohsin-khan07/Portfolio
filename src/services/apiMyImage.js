import supabase from "./supabase";

export default async function getMyImage() {
  const { data, error } = await supabase.from("My Image").select("*");

  if (error) {
    console.error(error);
    throw new Error("Error loading image!");
  }

  return data;
}
