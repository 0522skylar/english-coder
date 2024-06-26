import OpenAI from "openai";
import type { NextApiResponse } from 'next'
import { NextRequest } from 'next/server';


type Data = {
  name?: string
  message?: string
}
const openai = new OpenAI({
  organization: process.env.ORGANIZATION_ID,
  project: process.env.PROJECT_ID,
  apiKey: process.env.OPEN_ID_KEY
});

export default function  handler(
  _req: NextRequest,
  res: NextApiResponse<Data>
) {
  // console.log('[Time] ', new Date().toLocaleString());
  // res.status(200).json({ name: 'John Doe' })
  openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{
      role: 'user',
      content: 'say hello use in chinese',
      // stream: true
    }]
  }).then(stream => {
    console.log(stream)
    for(const chunk in stream) {
      // process.stdout.write(chunk.choices[0]?.delta?.content || "");
      res.status(200).json({ name: chunk || '' })
    }
  }).catch (err => {
    console.log(err)
    res.status(200).json({ message: '出错了' })
  })

}

