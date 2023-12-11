export const runtime = "edge"

export function POST(req: Request) {
  // const r = req.headers.get
  return Response.json({ date: new Date().toString() })
}
