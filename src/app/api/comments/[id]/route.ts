import { comments } from "../data";

export const GET = async (
  _request: Request,
  { params }: { params: Promise<{ id: String }> }
) => {
  const { id } = await params;
  const comment = comments.find((comment) => comment.id === Number(id));
  return Response.json(comment);
};

export const PATCH = async (
  request: Request,
  { params }: { params: Promise<{ id: String }> }
) => {
  const { text } = await request.json();
  const { id } = await params;

  const index = comments.findIndex((comment) => comment.id === Number(id));

  comments[index].text = text;

  return Response.json(comments[index]);
};
export const DELETE = async (
  _request: Request,
  { params }: { params: Promise<{ id: String }> }
) => {
  const { id } = await params;

  const index = comments.findIndex((comment) => comment.id === Number(id));

  const deletedComment = comments[index];

  comments.splice(index, 1);

  console.log(comments);

  return Response.json(deletedComment);
};
