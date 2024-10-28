import React from 'react';
import '/home/maxim/THP/dev++_semaine_6/mon-portfolio/src/styles/Contact.css';

function Contact() {
  return (
    <section className="contact">
      <h3>
        Vous souhaitez discuter avec moi, que ce soit pour me proposer un poste ou pour passer le temps pendant ce confinement ? Remplissez le formulaire ci-dessous, je vous contacterai dès que je le peux.
      </h3>
      <form>
        <div>
          <label>Sujet :</label>
          <input type="text" name="sujet" />
        </div>
        <div>
          <label>Message :</label>
          <textarea name="message"></textarea>
        </div>
        <button type="button">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact;
