

const BlogdeatailsSkeleton = () => {
    return (
        <div>
             <div className="max-w-3xl h-screen mx-auto p-4 animate-pulse space-y-4">
        <div className="h-10 bg-gray-300 rounded w-3/4"></div>
        <div className="h-64 bg-gray-300 rounded w-full"></div>
        <div className="h-5 bg-gray-300 rounded w-1/2"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        </div>
        <div className="h-6 bg-gray-300 rounded w-1/3 mt-6"></div>
        <div className="flex gap-2 mt-2">
          <div className="h-6 w-16 bg-gray-300 rounded-full"></div>
          <div className="h-6 w-20 bg-gray-300 rounded-full"></div>
          <div className="h-6 w-14 bg-gray-300 rounded-full"></div>
        </div>
      </div>
        </div>
    );
};

export default BlogdeatailsSkeleton;