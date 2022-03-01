import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { fetchBlogPosts } from "../api";

const BlogPostTable = () => {
  const navigate = useNavigate();
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetchBlogPosts().then((response) => {
      setBlogPosts(response);
    });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Author</th>
          <th>Blog</th>
        </tr>
      </thead>
      <tbody>
        {blogPosts.map(
          (blog: {
            id: number;
            userId: number;
            body: string;
            title: string;
          }) => (
            <tr key={blog.id}>
              <td>{blog.userId}</td>
              <td>
                {blog.title}{" "}
                <button
                  onClick={() =>
                    navigate("/blogpost", {
                      state: {
                        blog,
                      },
                    })
                  }
                >
                  Read more
                </button>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default BlogPostTable;
