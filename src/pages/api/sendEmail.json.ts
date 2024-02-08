// Outputs: /builtwith.json

import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY); 

export async function GET({params, request}) {
  const send = await resend.emails.send({
    from: "darknab@live.fr",
    to: "nabil_negadi@outlook.fr",
    subject: "Test email",
    html: "<p>It works!!!</p>",
    text: "It works!!!"
  });

  if(send.data) {
    return new Response(
      JSON.stringify({
        message: send.data,
      }),
      {
        status: 200,
        statusText: 'OK',
      }
    );
  } else {
    return new Response(
      JSON.stringify({
        message: send.error,
      }),
      {
        status: 500,
        statusText: 'Something went wrong',
      }
    );
  }
}

/** 
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ params, request }) => {
  return new Response(
    JSON.stringify({
      name: 'Astro',
      url: 'https://astro.build',
    })
  );
};
*/
