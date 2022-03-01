import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { LocationInterface, BlogCommentInterface } from "../config/types";
import { fetchBlogComments } from "../api";

const BlogPost = () => {
  const location = useLocation();
  const state = location.state as LocationInterface;
  const [blogComments, setBlogComments] = useState<BlogCommentInterface[]>([]);

  useEffect(() => {
    fetchBlogComments(state.blog.id).then((response: BlogCommentInterface[]) =>
      setBlogComments(response)
    );
  }, []);

  return (
    <div>
      <h2>{state.blog.title}</h2>
      <p>{state.blog.body}</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {blogComments.map((comment: BlogCommentInterface) => (
            <tr key={comment.id}>
              <td>{comment.name}</td>
              <td>{comment.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogPost;
