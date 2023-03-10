// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]"

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

export default async function handler (req, res)  {
  const session = await getServerSession(req, res, authOptions)
  if (session) {
    res.send({
      content:
        "This is protected content. You can access this content because you are signed in.",
    })
  } else {
    res.send({
      error: "You must be signed in to view the protected content on this page.",
    })
  }
}