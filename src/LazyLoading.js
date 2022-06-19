import React from "react";

export const Blogs = React.lazy(() => import("./containers/blogs"));

export const Blog = React.lazy(() => import("./containers/blog"));
