import supabase from "../utils/supabaseClient";

export async function getAllProducts() {
  const { data: products } = await supabase.from("products").select("*");

  return products;
}
