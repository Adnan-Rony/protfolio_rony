import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DOMPurify from "dompurify";

import BlogdeatailsSkeleton from "./BlogdeatailsSkeleton.jsx";
import { extractHeadingsFromHTML } from './../../lib/extractHeadings';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const res = await axios.get(`https://devthroughts.vercel.app/api/v1/blogs/${id}`);
        setBlog(res?.data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [id]);

  if (loading) return <BlogdeatailsSkeleton />;
  if (!blog) return <div className="text-center py-10 text-red-500 text-xl">Blog not found!</div>;

  const sanitizedContent = DOMPurify.sanitize(blog.content);
  const { toc, htmlWithIds } = extractHeadingsFromHTML(sanitizedContent);


  return (
 <div>

     <div className=" min-h-screen text-white">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="bg-black lg:col-span-2 px-4 py-8 rounded-xl shadow-sm">
          <div className="my-4 space-y-3">
            <h1 className="lg:text-3xl font-bold mb-2">{blog.title}</h1>
            <p className="lg:text-sm text-xs mb-4 text-[#8A2BE2] font-medium">
              Posted on {new Date(blog.createdAt).toLocaleDateString()}
            </p>
          </div>

          <div className="my-4 pt-4">
            <img
              className="w-full  object-cover rounded-2xl"
              src={blog.image}
              alt="Blog Banner"
            />
          </div>

          <div
            className="prose  prose-invert prose-lg max-w-none leading-relaxed"
            dangerouslySetInnerHTML={{ __html: htmlWithIds }}
          />

          
          
        </div>

        {/* Sticky Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 space-y-6">
            <div className="bg-black p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-2">
                Table Of Contents
              </h2>
              <ul className="list-disc list-inside space-y-2 text-sm">
                {toc.map(({ id, text }) => (
                  <li key={id}>
                    <a href={`#${id}`} className="hover:underline">
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        
      </div>
    </div>
 </div>
  );
};

export default BlogDetails; 