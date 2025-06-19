import React from 'react';

function Noticias() {
  return (
    <div className="home bg-gray-100 text-gray-900 h-screen flex items-start justify-center pt-4">
      <div className="container mx-auto px-4 flex flex-row items-start justify-between">
        <div className="w-1/2 flex flex-col items-center text-center">
          <div className="max-w-md mt-12">
            <h1 className="text-4xl font-bold mb-4">Big Title</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center mt-20">
          <video
            src="src\assets\images\video1.mp4"
            controls
            className="h-96"
          />
        </div>
      </div>
    </div>
  );
}

export default Noticias;
