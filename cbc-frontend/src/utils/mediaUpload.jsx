import { createClient } from "@supabase/supabase-js"

const url = "https://jmktrrreqhjurovahtql.supabase.co"
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impta3RycnJlcWhqdXJvdmFodHFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzODYzNDYsImV4cCI6MjA2Njk2MjM0Nn0.6SEp8pny4FFjaef6kQ8cPS5m3Xh7fpHXEtr5xJCt2U8"

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