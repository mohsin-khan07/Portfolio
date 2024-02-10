import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wwkgjvdiokdnskihzgxi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3a2dqdmRpb2tkbnNraWh6Z3hpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc0NTkyNDEsImV4cCI6MjAyMzAzNTI0MX0.O6xKoLEcc_KK8-egQ2YOmdcr0Jw6OyLq0Jn0OeWEu3Q";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
