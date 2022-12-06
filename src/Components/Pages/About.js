import React from "react";
import "../../Styles/About/About.css"
import { social } from "../../Data/Datas";





function About() {
  return (
    <div className="main-about" id="about">
      <main className="block">
        <img src="https://iphoneswallpapers.com/wp-content/uploads/2022/06/Do-Not-Disturb-I-am-Coding-iPhone-Wallpaper.jpg" alt="wallpaper" />
        <div className="text">
          <article className="me">Who am I?</article>
          <section className="text-about">
            I'm a <span className="emphasize">Web Developer</span> from Kyrgyzstan.<br />
            I use my passion and skills to create <span className="emphasize">Cross-browser </span>
            and <span className="emphasize">Adaptive </span> products by using  various tools and animations.<br />
            I'm going to be <span className="emphasize">Independent</span> employee with high attention to details.
          </section>
        </div>
      </main>
      <main className="social-media">
        {social.map(items => <div key={items.id} className="social-icons"  ><a href={items.path} target="_blank" rel='noreferrer' style={{ color: items.color }}>{items.icon}</a></div>)}
      </main>
      <div className="level"><div>English :   Upper-intermediate</div></div>

    </div >

  );
}

export default About;
