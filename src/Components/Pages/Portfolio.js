import React from "react";
import '../../Styles/Projects/Projects.css'
import { projects } from '../../Data/Datas'



function Portfolio() {

  return (
    <div className="main-container" id="work">
      <div className="title">My projects</div>
      <article className="container">
        {projects.map(links => (
          <main className="block" key={links.id}>
            <img src={links.image} alt='linkimg' />
            <a href={links.path}><p className="name">{links.name}</p></a>
          </main>
        ))}
      </article>
    </div>
  );
}

export default Portfolio;
