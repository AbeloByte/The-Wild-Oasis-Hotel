import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qshxegwgnwuulymmfolf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzaHhlZ3dnbnd1dWx5bW1mb2xmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4Njg2ODAsImV4cCI6MjA3MTQ0NDY4MH0.Q4IXv9yZMeh4hwQXOiewguIOK02c9_dMYx0OwsYdHqg";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
