import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <Image
        src="/icons/loading-2.svg"
        alt="loading"
        width={150}
        height={150}
      />
    </div>
  );
};

export default Loader;
