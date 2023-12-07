import React from 'react';

function Main({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS and Tailwind'
}: {
  title?: string;
  description?: string;
}) {
  return (
    <main className="bg-blue-500 text-white w-full h-screen p-12 items-center justify-center border flex flex-col">
      <h1 className="text-xl">{title}</h1>
      <h2 className="font-normal">{description}</h2>
      <h2 className="font-normal">Descricao</h2>
    </main>
  );
}

export default Main;
