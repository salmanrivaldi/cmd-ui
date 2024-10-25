import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full space-x-3 mt-6">
      <div className="relative w-7 h-7">
        <div className="absolute inset-0 w-full h-full border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>

        <div className="absolute inset-0 w-full h-full border-4 border-slate-400 border-t-transparent rounded-full animate-spin-reverse"></div>
      </div>

      <div className="text-gray-500 text-sm font-medium animate-pulse">Loading...</div>
    </div>
  );
};

export default LoadingSpinner;
