import type { APIRoute } from 'astro'
import nodemailer from 'nodemailer'

const emailTo = import.meta.env.EMAIL
const emailToPass = import.meta.env.PASS
const host = import.meta.env.HOST

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get('Content-Type') === 'application/json') {
    const formData = await request.json()
    const firstName = formData.firstName
    const lastName = formData.lastName
    const email = formData.email
    const message = `${formData.message}
    ----------------------------------------------------------------------
    From: ${firstName} ${lastName} • email: ${email}
    `
    const html = `<div style="margin: 20px auto;font-family: Helvetica, Verdana, sans-serif">${message.replace(
      /[\r\n]/g,
      '<br>'
    )}</div>` 

    let mailTransporter = nodemailer.createTransport({
      host: host, 
      port: 465,
      secure: true,
      auth: {
        user: emailTo,
        pass: emailToPass,
      },
    })

    let mailDetails = {
      from: emailTo,
      to: "darknab@live.fr",
      subject: `A message from Furni`,
      text: message,
      html,
    }

    let mailResult
    try {
      mailResult = await mailTransporter.sendMail(mailDetails);
    } catch (error) {
      console.log('Error', error);
    }
    console.log('Message sent: %s', mailResult?.messageId)

    return new Response(JSON.stringify(mailDetails), {
      status: 200,
    })
  }
  return new Response(null, { status: 400 })
}
