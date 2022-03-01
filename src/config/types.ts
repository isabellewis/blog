import { Path } from "react-router-dom";

export interface Blog {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface BlogCommentInterface {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface LocationInterface extends Path {
  blog: Blog;
}
