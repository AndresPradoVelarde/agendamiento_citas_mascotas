import React from "react";

function Error({mensaje}) {
  return (
    <div className="text-white bg-red-700 text-center rounded-lg py-3 mb-5 shadow-md uppercase font-bold">
      <p>{mensaje}</p>
    </div>
  );
}

export default Error;
