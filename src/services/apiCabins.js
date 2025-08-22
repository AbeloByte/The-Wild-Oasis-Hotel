import supabase from "./supabase";

export const getCabins = async () => {
  const { data, error } = await supabase.from("Cabins").select("*");
  if (error) {
    console.log(error);
    throw new Error("cabins could not be loaded");
  }
  return data;
};

export async function DeleteCabin(id) {
  const { data, error } = await supabase.from("Cabins").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("cabin could not be deleted");
  }
  return data;
}
