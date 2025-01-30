import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://klipgyomefekutmreckt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsaXBneW9tZWZla3V0bXJlY2t0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5ODg3NDEsImV4cCI6MjA1MjU2NDc0MX0.yjsT35a7SQIyhhZCee-CAiTE2dZqU9gFy47lNFwBxQs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
