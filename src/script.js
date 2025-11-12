'use strict';

import { Question } from './Question.js';
import { Quizz } from './Quizz.js';

const init = function () {
  const cheval = new Question('Quelle est la couleur du cheval blanc d\'Henry IV?', ['Bleu', 'Violet', 'Blanc'], 2);
  const ageCapitaine = new Question('Quel est l\'âge du capitaine?', [34, 49, 'Le capitaine n\'existe pas'], 1);
  const capitaleAes = new Question('Quelle est la capitale du Burkina Faso?', ['Niamey', 'Ouagadougou', 'Bamako'], 1);

  let quizz = new Quizz();
  quizz.ajouterQuestion(cheval);
  quizz.ajouterQuestion(ageCapitaine);
  quizz.ajouterQuestion(capitaleAes);
  quizz.afficherQuestion(cheval);

  document.getElementById('submit').addEventListener('click', () => quizz.collecterReponse());
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}