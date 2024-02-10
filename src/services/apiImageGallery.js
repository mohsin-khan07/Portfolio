import supabase from "./supabase";

export default async function getImageGallery() {
  const { data, error } = await supabase.from("Image Gallery").select("*");

  if (error) {
    console.error(error);
    throw new Error("Error loading images!");
  }

  return data;
}
