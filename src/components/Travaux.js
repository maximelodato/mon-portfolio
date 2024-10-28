import React from 'react';
import '/home/maxim/THP/dev++_semaine_6/mon-portfolio/src/styles/Travaux.css';

function Travaux() {
  return (
    <section className="travaux">
      <h3>Vous pourrez trouver ci-dessous la liste de mes projets. J'en ai réalisé certains lors de ma formation chez The Hacking Project, et d'autres sont des projets personnels.</h3>
      <div className="projets">
        <div className="projet">
          <img src="lien_vers_image_projet1" alt="Projet 1" />
          <p>Projet 1 : Description du projet 1.</p>
        </div>
        <div className="projet">
          <img src="lien_vers_image_projet2" alt="Projet 2" />
          <p>Projet 2 : Description du projet 2.</p>
        </div>
        <div className="projet">
          <p>Projet 3 : Description du projet 3.</p>
        </div>
      </div>
    </section>
  );
}

export default Travaux;
