import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

export const Rside = () => {
  const elementsTransition = {
    in: {
      x: 0,
      opacity: 1,
    },
    out: {
      x: 100,
      opacity: 0,
    },
    transition: {
      delay: 5,
    },
  };

  return (
    <div style={{ overflow: "hidden" }} className="rightSide">
      <motion.div
        variants={elementsTransition}
        initial="out"
        animate="in"
        className="titles"
        transition={{ delay: 0.6 }}
      >
        <h1 className="name cream">Amine Abdelli</h1>
        <h1 className="orange">Développeur Web</h1>
        <p className="cream">Recherche stage de développeur web</p>
      </motion.div>

      <div className="mainSection cream">
        <motion.p
          variants={elementsTransition}
          initial="out"
          animate="in"
          className="titles"
          transition={{ delay: 0.8 }}
        >
          Ce <span className="orange">portfolio</span> est une fenêtre ouverte
          sur mes projets que je crée de toute pièce avec beaucoup de plaisir et
          d'<span className="orange">enthousiasme</span>. <br />
        </motion.p>
        <br />
        <motion.p
          variants={elementsTransition}
          initial="out"
          animate="in"
          className="titles"
          transition={{ delay: 1 }}
        >
          Tout récemment, après un long parcours dans l'hôtellerie restauration,
          j'ai mis de côté mon tablier de cuisinier pour entrer dans ce vaste
          univers qu'est le <span className="orange">développement</span>, qui
          est devenu une vraie <span className="orange">passion</span>. Je
          recherchais un domaine qui mèle à la fois science et esthétique. Et
          ayant toujours été un grand consommateur de contenu en ligne, mon
          choix s'est fait tout naturellement. Je suis un grand{" "}
          <span className="orange">curieux</span> de nature et{" "}
          <span className="orange">autodidacte</span>. Je travaille constamment
          à m'améliorer et apprendre de nouvelles choses. Bonne visite !
        </motion.p>
      </div>
      <motion.div
        className="logos"
        variants={elementsTransition}
        initial="out"
        animate="in"
        transition={{ delay: 1.2 }}
      >
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/amine-abdelli"
        >
          <FontAwesomeIcon className="logo_hover" icon={faGithubAlt} />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/amine-abdelli-b41623112/"
        >
          <FontAwesomeIcon className="logo_hover" icon={faLinkedin} />
        </a>
        <a href="mailto:amine.abdelli@outlook.fr">
          <FontAwesomeIcon className="logo_hover" icon={faEnvelope} />
        </a>
        <a
          href={require("../assets/amineabdellicv.pdf").default}
          rel="noreferrer"
          target="_blank"
          download
        >
          <div className="logo_hover cv_logo">
            <div className="adjustcv">cv</div>
          </div>
        </a>
      </motion.div>
    </div>
  );
};
