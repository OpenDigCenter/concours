import React, { useState, useEffect } from 'react';
import './App.css';

const phases = [
  {
    title: "Questions sur sa vie",
    questions: [
      { question: "Quelle est la nationalité de l’Apôtre ?", answer: "Béninoise" },
      { question: "Quel est le nom fon de l’Apôtre ?", answer: "Gbetigan" },
      { question:  "Quelle la date d’anniversaire de l’Apôtre", answer: "13 août 1974" },  
       { question: "A quelle âge Jésus lui est apparu pour la première fois ?", answer: "16 ans" },
       { question: "Le couple apostolique vient de fermer combien d’années de mariage ?", answer: "25 ans" },
       { question: "Comment s’appelle l’épouse de l’Apôtre ?", answer: "Prophétesse Caroline Houinsou" },
       { question: "Combien d’enfants a-t-il eu ?", answer: "5" },
       { question: "Quel est le nom de jeune fille de la prophétesse", answer: "ATTOLOU" },
       { question: "En quelle année est-il venu au Bénin ?", answer: "1990" },
       { question: "Dans l’ordre décroissant comment s’appelle les enfants du couple apostolique ?", answer: "Esdras- Jedida-Jemima-Consolée" },
       { question: "A quel âge s’engagea-t-il dans le ministère ?", answer: "19 ans" },
       { question: "En quelle année l’Apôtre a été consacré Pasteur ?", answer: "1996" },
       { question: "De quel Conseil d’administration fait partie l’Apôtre ?", answer: "Celui de Dag HEWARDS MILLS" },
     


    ],
  },
  
  {
    title: "Question sur son ministère",
    questions: [
      { question: "De quelle organisation évangélique fait partie l’Apôtre ?", answer: "AMMEB, (Association des missions et ministères évangéliques du Bénin)" },
       { question: "Comment l’Apôtre a-t-il quitté les assemblées de Dieu ?", answer: "Par lettre de démission" },
      { question: "Quel poste l’Apôtre occupe-t-il au sein de l’AMMEB ?", answer: "Il est le trésorier adjoint" },
      { question: "Combien de pasteurs assistants compte le ministère de l’Apôtre ?", answer: "13" },
      { question: "L’apôtre est-il Docteur en théologie ? si oui combien de doctorats dispose-t-il ?", answer: "Oui, il en a 03, un doctorat honoris causa, un doctorat en théologie pratique et un PhD en théologie pratique" },
      { question: "Combien de livres sont à l’actif de l’Apôtre ? ", answer: "02" },
      { question: "Parmi ces livres lesquels sont écrits par l’Apôtre ? La croissance spirituelle- Loyauté Déloyauté- la maternité de Dieu- Le leadership chrétien", answer: "La croissance spirituelle, la maternité de Dieu" },
      { question: "Qui est actuellement le Père spirituel de l’Apôtre ? ", answer: "Papa Mamadou KARAMBIRI      " },
      { question: "L’Apôtre a combien d’années dans le ministère ?", answer: "29 ans" },
      { question: "Qui sont les mentors actuels de l’Apôtre ?", answer: "Papa Mamadou Karambiri, Bishop Josué AHOUNOU, Bishop Dag Heward Mills   " },
      { question: "Dans quelle confession religieuse, l’Apôtre a-t-il commencé le ministère ?", answer: "Assemblée de Dieu" },
      { question: "Un jour, où l’Apôtre était affamé, Dieu lui dit d’ordonner à la journée pour que le jour prenne soins de lui. Et quand il eut fait, une femme voisine est venue avec les mains chargées de quel bon plat ?", answer: "Du riz chaud avec sauce du poisson carpe frais" },
   

    ],
  },
  {
    title: "Questions sur la Mission Chrétienne Rhema",
    questions: [
      { question: "Quelle est la date de création de la MCR ?", answer: "08 août 2010" },
      { question: "En quelle année a été organisé la première convention nationale de la MCR et où ?", answer: "2020 à Calavi sur le terrain du CEG Zoca" },
      { question: "Combien d’églises compte la MCR ?", answer: "8" },
      { question: "Combien d’annexes compte la MCR", answer: "7" },
      { question: "A partir de quel moment devient-on membre de la MCR ?", answer: "Après le discipolat 2 et le baptême d’eau" },
      { question: "Donnez 3 vérités bibliques qui constituent les fondements de la MCR ?", answer: "a)	La Bible est la parole infaillible de Dieu. b)	Un seul vrai Dieu. c)	La chute et la rédemption de l’homme par Jésus Christ. d)	La sanctification. e)	Les ordonnances du Seigneur" },
      { question: "Des 2 phrases suivantes, Quelle est la vision de la MCR ? a)	Nous existons pour faire rayonner la gloire de Dieu dans le monde à travers les vies transformées à l’image de Christ. b)	Evangéliser les peuples afin de faire d’eux des disciples de Christ.", answer: "a.	Nous existons pour faire rayonner la gloire de Dieu dans le monde à travers les vies transformées à l’image de Christ." },
      { question: "Des 2 phrases suivantes, Quelle est la mission de la MCR ? a)	Evangéliser les peuples afin de faire d’eux des disciples de Christ. b)	Implanter des églises dans les villes et villages du Bénin et en faire des centres de formation et de transformation des vies. ", answer: "a.	Evangéliser les peuples afin de faire d’eux des disciples de Christ." },
      { question: "Des 2 phrases suivantes, Quelle est le but de la MCR ? a)	Nous existons pour faire rayonner la gloire de Dieu dans le monde à travers les vies transformées à l’image de Christ. b)	Implanter des églises dans les villes et villages du Bénin et en faire des centres de formation et de transformation des vies.", answer: "b)	Implanter des églises dans les villes et villages du Bénin et en faire des centres de formation et de transformation des vies." },
      { question: "Quel est le thème de cette année 2023 ?", answer: "Croître à tous égards" },
      { question: " Combien de départements compte le siège de la MCR ? a- 40, b-	20, c-	10", answer: "b-	20" },
      { question: "Citez 3 ordonnances du Seigneur auxquelles se plie la MCR ?", answer: "a)	La sainte cène, b)	Le baptême d’eau, c)	Le baptême et les dons du Saint Esprit, d)	La guérison divine, e)	L’Evangélisation du monde, f)	Le jugement final" },
   
    ],
  },
];

function App() {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timer, setTimer] = useState(10);
  const [showResultButton, setShowResultButton] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [phaseStarted, setPhaseStarted] = useState(false);

  useEffect(() => {
    if (phaseStarted) {
      if (timer > 0 && !showAnswer) {
        const countdown = setInterval(() => {
          setTimer(timer - 1);
        }, 1000);
        return () => clearInterval(countdown);
      } else if (timer === 0 && !showAnswer) {
        setShowResultButton(true);
      }
    }
  }, [timer, showAnswer, phaseStarted]);

  const handleShowResultClick = () => {
    setShowAnswer(true);
    setShowResultButton(false);
  };

  const handleNextClick = () => {
    if (currentQuestion < phases[currentPhase].questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimer(10);
      setShowAnswer(false);
      setShowResultButton(false);
    } else if (currentPhase < phases.length - 1) {
      setCurrentPhase(currentPhase + 1);
      setCurrentQuestion(0);
      setTimer(10);
      setShowAnswer(false);
      setShowResultButton(false);
      setPhaseStarted(false);
    } else {
      // La dernière phase est terminée, afficher "FIN"
      setCurrentPhase(null);
      setCurrentQuestion(null);
      setShowAnswer(false);
      setShowResultButton(false);
    }
  };

  const handleStartClick = () => {
    setPhaseStarted(true);
    setTimer(10);
  };

  return (
    <div className="App">
      <div className="question-container">
        {currentPhase !== null ? (
          <div>
          
            <h2 className="theme">{phases[currentPhase].title}</h2>
            {!phaseStarted ? (
              <button className="start-button" onClick={handleStartClick}>Démarrer</button>
            ) : (
              <div>
                {/* <h3>Question {currentQuestion + 1}</h3> */}
                <p className="question">{phases[currentPhase].questions[currentQuestion].question}</p>
                {showResultButton ? (
                  <button className="result-button" onClick={handleShowResultClick}>Afficher le résultat</button>
                ) : (
                  <div>
                    {showAnswer && <p className="answer">{phases[currentPhase].questions[currentQuestion].answer}</p>}
                    <button className="answer-button" onClick={handleNextClick}>Suivant</button>
                    {!showAnswer && <p className="temps">Temps restant : <span>{timer} </span>seconde{timer !== 1 && 's'}</p>}
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <h2 className="answer">FIN</h2>
        )}
      </div>
    </div>
  );
}

export default App;
