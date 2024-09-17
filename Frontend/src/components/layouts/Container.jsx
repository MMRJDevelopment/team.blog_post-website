import React from "react";

const Container = ({ className, children }) => {
  return (
    <div className={`max-w-[1180px] mx-auto sm:w-full md:w-full ${className}`}>
      {children}
    </div>
  );
};

export default Container;
