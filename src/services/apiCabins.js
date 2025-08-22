import supabase from "./supabase";

export const getCabins = async () => {
  const { data, error } = await supabase.from("Cabins").select("*");
  if (error) {
    console.log(error);
    throw new Error("cabins could not be loaded");
  }
  return data;
};
