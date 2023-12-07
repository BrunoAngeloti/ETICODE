import { supabase } from "@/lib/initSupabase";

export async function uploadNewImage(image: File | null) {
  if (!image) {
    console.log("No image to upload");
    return null;
  }

  const { data, error } = await supabase
    .storage
    .from('photos')
    .upload(Math.random().toString(36).substring(2), image, {
      cacheControl: '3600',
      upsert: true
    })

  if (error) {
    console.log(error);
    return null;
  }

  return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/photos/${data?.path}`;
}