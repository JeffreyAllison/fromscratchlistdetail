const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYnpocGxkanJ4cWtqc2tjaXpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc1NTIwMDMsImV4cCI6MTk2MzEyODAwM30.idE1m2ehmckSIic7mOSaXFl1McMzBdIrhU_Vrsr6UyI';
const SUPABASE_URL = 'https://lrbzhpldjrxqkjskcizc.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getAmps() {

  const response = await client
    .from('amp')
    .select('*');

  return response.body;
}

export async function getAmp(id) {

  const response = await client
    .from('amp')
    .select('*')
    .match({ id: id })
    .single();

  return response.body;
}