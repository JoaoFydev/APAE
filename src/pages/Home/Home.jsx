import React from 'react';

function Home() {
  return (
    <div className="home bg-gray-100 text-gray-900 h-screen flex items-start justify-center pt-4">
      <div className="container mx-auto px-4 flex flex-row items-start justify-between">
        <div className="w-1/2 flex flex-col items-center text-center">
          <div className="max-w-md mt-12">
            <h1 className="text-4xl font-bold mb-4">Big Title</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officiis accusamus neque deleniti eos maiores, at consectetur modi dolor error dolores cumque illum, fuga ad ipsum exercitationem repellat earum accusantium.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt fugit voluptatibus distinctio ratione ut aliquid. Officiis sed eius fuga voluptas voluptatum! Consectetur qui reprehenderit nostrum quaerat sit, iure aliquam fuga.
              </p>
              <p className="text-lg mt-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt fugit voluptatibus distinctio ratione ut aliquid. Officiis sed eius fuga voluptas voluptatum! Consectetur qui reprehenderit nostrum quaerat sit, iure aliquam fuga.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt fugit voluptatibus distinctio ratione ut aliquid. Officiis sed eius fuga voluptas voluptatum! Consectetur qui reprehenderit nostrum quaerat sit, iure aliquam fuga.
            </p>
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center mt-20"> {/* Aumentar a margem superior aqui */}
          <div className="bg-gray-300 w-full h-96 flex items-center justify-center mb-4"> {/* Adicionar margem inferior se necessário */}
            <img src="src/assets/images/filhote-capa.jpg" alt="Description" className="object-cover h-full w-full" />
          </div>
          <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded">
            Nossa Missão
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
