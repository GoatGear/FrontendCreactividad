import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-start">
      
      {/* Imagen destacada */}
      <div className="w-full max-w-4xl my-4">
        <img 
          src="banner.jpg" 
          alt="ANCISSSTE 2024" 
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      
      {/* Título y subtítulo */}
      <div className="text-center mb-12 p-6">
        <h1 className="text-gray-200 text-2xl sm:text-4xl font-bold  mb-4">
          Bienvenidos a la Segunda Reunión Regional ANCISSSTE
        </h1>
        <h2 className="text-xl text-gray-200">
          Conferencias, Clases Magistrales, + de 20 especialistas.
        </h2>
      </div>
      
      {/* Sección de información o enlaces */}
      <div className="w-full max-w-3xl text-center space-y-6">
        <p className="text-sm text-gray-300">
          Registrate y confirma tu asistencia
        </p>
        <a 
          href="/register"
          className="inline-block bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
        >
          Regístrame
        </a>
        <a 
          href="/"
          className="inline-block text-blue-500 py-2 px-6 rounded-md hover:text-blue-600"
        >
          Saber Más...
        </a>
      </div>

    </div>
  );
};

export default Home;
