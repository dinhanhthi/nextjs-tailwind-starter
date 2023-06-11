// https://nextjs.org/docs/app/api-reference/file-conventions/route

export async function GET(request: Request) {
  return new Response(JSON.stringify({ name: 'Anh Thi Dinh' }), {
    headers: { 'Content-Type': 'application/json' }
  })
}
