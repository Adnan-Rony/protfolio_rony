import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://devthroughts.vercel.app/api/v1/blogs"
        );
        setBlogs(response?.data || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  //   console.log(blogs);

  // Filter and slice blogs
  const peresonalBlog = blogs.filter(
    (blog) =>
      blog.categories?.some(
        (cat) => cat.toLowerCase().trim() === "portfolio"
      ) || blog.tags?.some((tag) => tag.toLowerCase().includes("portfolio"))
  );

  return (
    <div className="h-screen container mx-auto py-4 bg-[url('/darkbg.png')] bg-fixed">
      <div className="grid  grid-cols-1 my-10 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-w-7xl mx-auto">
        {peresonalBlog.map((blog) => (
          <Link key={blog._id} to={`/blogs/${blog._id}`}>
            <div className="bg-black  rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden lg:h-[510px] py-1">
              <img
                src={blog.image}
                alt={blog.title}
                loading="lazy"
                className="w-full lg:h-56 object-center lg:object-cover"
              />

              <div className="p-4 space-y-3">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {blog.tags?.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-[#8A2BE2] text-white font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="text-lg font-semibold text-white hover:text-[#8A2BE2] line-clamp-2">
                  {blog.title}
                </h2>

                {/* Author & Meta */}
                <div className="text-sm text-gray-400 flex flex-wrap gap-4 items-center">
                  <p>{blog.author?.name || "Unknown Author"}</p>
                  <p>{new Date(blog.createdAt).toLocaleDateString()}</p>
                  <p>💬 {blog.comments?.length ?? 0}</p>
                </div>

                {/* Content Preview */}
                <p className="text-sm text-gray-300 line-clamp-3">
                  {blog.content.replace(/<[^>]+>/g, "").slice(0, 80)}...
                </p>

                {/* Read More Button */}
                <div>
                  <button
                    className="btn bg-black text-white border
     border-white  
     hover:bg-[#8A2BE2]
      hover:text-white hover:border-none hover:border-transparent
      transition duration-500 ease-in-out
      "
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
