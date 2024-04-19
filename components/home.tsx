"use client";
import React from "react";
import Free from "../public/free.gif";
import Image from "next/image";
import FreeCool from "../public/FreeCool.gif";
import Container from "./Container";

function Home() {
  return (
    <Container>
      <div className="w-1/2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        officiis alias odio saepe id iure quae cumque quam in ut dolore
        consequuntur fugit neque autem repellendus aut maiores optio, et ex,
        nostrum voluptatibus hic tempore rem? Sequi nam maxime autem odio
        exercitationem vitae officia. Maiores accusamus eius, iusto eum atque
        explicabo ipsa earum, odio voluptate placeat esse quaerat maxime omnis
        accusantium molestias a exercitationem dolor? Quaerat sequi sint
        voluptatem expedita sapiente veritatis similique officiis maxime
        voluptate nemo corporis in ex temporibus explicabo repellendus incidunt
        cum, inventore recusandae pariatur molestiae harum consequuntur maiores,
        totam exercitationem? Fuga saepe corrupti quaerat aliquid molestias!
      </div>
      <div>
        <Image
          src={FreeCool}
          alt="Free"
          width={500}
          height={600}
          className="rounded-full"
        />
      </div>
    </Container>
  );
}

export default Home;
