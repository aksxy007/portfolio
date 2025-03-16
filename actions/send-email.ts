 "use server"

 import { Resend } from "resend"

 const resend = new Resend(process.env.RESEND_API_KEY)
 const validateString = (value:unknown,maxLength:number)=>{
    if(!value || typeof value!=='string' || value.length>maxLength){
        return false
    }
 
    return true
 }
export const sendEmail = async (formData:FormData)=>{

    const message = formData.get("message")
    const senderEmail = formData.get("senderEmail")

    if(!validateString(senderEmail,500)){
        return {
            error:'Invalid sender email'
        } 
    }

    
    if(!validateString(message,5000)){
        return {
            error:'Invalid message'
        } 
    }


    const {data,error}= await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>',
        to: ["atul13062001@gmail.com"],
        subject: "Message from portfolio",
        replyTo:senderEmail as string,
        text:message as string
    })
    
   
    return {data,error}
}