'use strict';

import { Quiz } from './Quiz.js';
import { Question } from './Question.js';

const cheval = new Question('Quelle est la couleur du cheval blanc d\'Henry IV?', ['Bleu', 'Violet', 'Blanc'], 'blanc');
const ageCapitaine = new Question('Quel est l\'âge du capitaine?', [34, 49, 'Le capitaine n\'existe pas'], 49);
let score = 0;
const capitaleAes = new Question('Quelle est la capitale du Burkina Faso?', ['Niamey', 'Ouagadougou', 'Bamako'], 'Ouagadougou');

const html_form = document.querySelector('form');
const html_template = document.getElementById('templateQuestion');

cheval.afficher();

const afficher = function (question, label) {
  const clone = html_template.content.cloneNode(true);
  clone.querySelector('legend[enonce]').textContent = question.enonce;
  // Mettre à jour labels
  clone.querySelector('label[for=reponse1]').textContent = question.reponses[0];
  clone.querySelector('label[for=reponse2]').textContent = question.reponses[1];
  clone.querySelector('label[for=reponse3]').textContent = question.reponses[2];
  // Mettre à jour boutons radios
  clone.querySelector('input[id="reponse1"]').name = label;
  clone.querySelector('input[id="reponse2"]').name = label;
  clone.querySelector('input[id="reponse3"]').name = label;
  clone.querySelector('input[id=reponse1]').value = String(question.reponses[0]).toLowerCase();
  clone.querySelector('input[id=reponse2]').value = String(question.reponses[1]).toLowerCase();
  clone.querySelector('input[id=reponse3]').value = String(question.reponses[2]).toLowerCase();

  document.getElementById('quiz').append(clone);
}

afficher(cheval, 'cheval');
afficher(ageCapitaine, 'capitaine');
afficher(capitaleAes, 'capitale');

// Events
document.getElementById('submitQuiz').addEventListener('click', (e) => {  e.preventDefault();
});

document.getElementById('submitQuiz').addEventListener('click', () => {
  const reponseCochee = document.querySelector('input[name="reponse"]:checked')?.value;
  if (cheval.reponseCorrecte === reponseCochee) {
    score += 1;
  }
  if (ageCapitaine.reponseCorrecte === reponseCochee) {
    score += 1;
  }
  if (capitaleAes.reponseCorrecte === reponseCochee) {
    score += 1;
  }

  let quiz = new Quiz([cheval, ageCapitaine, capitaleAes]);
  // quiz.afficherResultat();
  const p = document.createElement('p');
  p.textContent = `Vous score est : ${score} points.`;
  document.body.append(p);
})