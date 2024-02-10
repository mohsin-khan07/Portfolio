import supabase from "./supabase";

export default async function getProjects() {
  const { data, error } = await supabase.from("Projects").select("*");

  if (error) {
    console.error(error);
    throw new Error("Error loading projects!");
  }

  return data;
}
