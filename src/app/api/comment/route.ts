import { headers } from "next/headers";
import { comments } from "../_data/comments";

export async function GET() {
  return Response.json(comments);
}
export async function POST(request: Request) {
  const comment = await request.json();
  const id = comments.length + 1;
  const newComment = {
    id,
    comment: comment.comment,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(comments), {
    headers: { "Content-Type": "application/json" },

    status: 201,
  });
}
