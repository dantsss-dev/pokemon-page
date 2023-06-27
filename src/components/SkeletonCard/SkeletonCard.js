export const SkeletonCard = () => {
  return (
    <div className="w-full sm:w-1/3 border border-gray-300 shadow rounded-md p-4 mt-8 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex flex-wrap justify-center space-x-4">
        <div className="mb-8 rounded-full bg-gray-400 h-24 w-24"></div>
        <div className="w-full space-y-4 py-1">
          <div className="h-4 bg-gray-400 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  );
};
