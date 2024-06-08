import React from 'react';

function Home() {
  return (
    <div className="home bg-gray-100 text-gray-900 h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-row items-center justify-between">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-4">Big Title</h1>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Necessitatibus rerum id blanditiis praesentium facilis atque magni quia possimus deserunt. 
            Consectetur aperiam hic accusantium ab ipsum incidunt, quaerat ut in neque!</p>
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="bg-gray-300 w-full h-96 flex items-center justify-center">
            <img src="src/assets/images/filhote-capa.jpg" alt="Description" className="object-cover h-full w-full"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
