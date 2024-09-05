import React from "react";
import { Link } from "react-router-dom";

const BrandLogo = () => {
  return (
    <div className="fixed top-0 left-0 m-4 ml-6">
      <Link to={"/"}>
        <img
          src="/Logo_NBG_Wide.png"
          alt="Brand Logo"
          className="h-20 w-auto"
        />
      </Link>
    </div>
  );
};

export default BrandLogo;
