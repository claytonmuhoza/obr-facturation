import { comments } from "../../_data/comments";

export function GET(req: Request, { params }: { params: { id: string } }) {
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );
  return Response.json(comment);
}
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  const { comment } = await req.json();
  if (index >= 0) {
    comments[index].comment = comment;
    return Response.json(comments[index]);
  } else {
    return Response.json({ message: "le commentaire n'existe pas" });
  }
}
