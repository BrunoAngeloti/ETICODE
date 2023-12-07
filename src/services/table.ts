import { supabase } from "@/lib/initSupabase"

export async function postTable(table: string, data: any){
  try {
    const response = await supabase.from(table).insert(data).select()
    
    return response.data
  }
  catch (error) {
    console.log(error)
    throw error
  }
}

export async function getTable(table: string, id?: string){
  try {
    if(!id){
      const response = await supabase.from(table).select('*')
      
      return response.data
    }
    
    const response = await supabase.from(table).select('*').eq('id', id)
    
    return response.data
  }
  catch (error) {
    console.log(error)
    throw error
  }
}

export async function putTable(table: string, id: string, data: any){
  try {
    const response = await supabase.from(table).update(data).eq('id', id)
    
    return response.data
  }
  catch (error) {
    console.log(error)
    throw error
  }
}