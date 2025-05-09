import { createClient } from "@supabase/supabase-js"

const url = "https://ikqconeovavcalktvbie.supabase.co"
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrcWNvbmVvdmF2Y2Fsa3R2YmllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2OTU1NTksImV4cCI6MjA2MjI3MTU1OX0.ahioGY-C3hBck1yFoCKGpPfQpqpjO4l0VyzR0FPyMI8"

const supabase = createClient(url,key)

export default function mediaUpload(file){
    const mediaUploadPromise = new Promise(
        (resolve,reject) => {
            if(file == null){
                reject("No file selected")
                return
            }

            const timestamp = new Date().getTime()
            const newName = timestamp+file.name

            supabase.storage.from("images").upload(newName,file,
                {
                    upsert:false,
                    cacheControl:"3600"
                }
            ).then(
                () => {
                    const publicUrl = supabase.storage.from("images").getPublicUrl(newName).data.publicUrl

                    resolve(publicUrl)
                }
            ).catch(
                () => {
                    reject("Error occured in supabase connection")
                }
            )
        }
        
        
    )
    return mediaUploadPromise
}