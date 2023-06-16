import React from "react";

const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-28">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      <h3 className="text-white mt-4">Fetching data...</h3>
    </div>
  );
};

export default Spinner;
