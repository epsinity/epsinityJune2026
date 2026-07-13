import React from "react";

const Section = ({ name, title, element }) => {
  return (
    <section
      id={name}
      className="flex flex-col w-full max-w-screen h-full px-2 py-5"
    >
      <span className="tag">{name}</span>
      {title === "" ? (
        ""
      ) : (
        <h1 className="text-black text-4xl md:text-6xl uppercase my-8 text-center font-bold">
          {title}
        </h1>
      )}
      <div className="w-full max-w-screen py-3 h-full">{element}</div>
    </section>
  );
};

export default Section;
