'use strict';

export class Quizz {
  #questions;
  #score;
  #step;

  constructor(questions = [], score = 0, step = 0) {
    this.#questions = questions;
    this.#score = score;
    this.#step = step;
  }

  ajouterQuestion(question) {
    if (!this.#questions.includes(question)) {
      this.#questions.push(question);
    }
  }

  afficherQuestion(question) {
    // Vider le contenu de la précédente question
    document.getElementById('quizz').textContent = '';
    question.afficher();
  }

  collecterReponse() {
    /*
     0. Supprimer warning s'il existe
     1. Parcourir tous les boutons radio
     2. Pour chacun d'eux, vérifier s'il est coché, puis assigner sa valeur à la réponse de l'utilisateur
     3. Si cette réponse est la réponse correcte liée au pas de la question, incrémenter le score
     4. Incrémenter le pas de question
     5. Afficher la question suivante.
    */

    const avertissementExistant = document.querySelector('fieldset .warning');
    avertissementExistant?.remove();

    const answers = document.getElementsByName('answers');
    let reponseUtilisateur = null;
    let reponseExiste = false;

    for (const answer of answers) {
      if (answer.checked) {
        reponseUtilisateur = parseInt(answer.value);
        reponseExiste = true;
        break;
      }
    }

    if (!reponseExiste) {
      const warning = document.createElement('p');
      warning.textContent = 'Veuillez choisir une réponse';
      warning.classList.add('warning');
      document.querySelector('fieldset').appendChild(warning);
      return;
    }

    if (reponseUtilisateur === this.questions[this.#step].correctAnswer) {
      this.#score++;
    }
    this.#step++;
    this.afficherQuestionSuivante();
  }

  afficherQuestionSuivante() {
    if (this.#step !== this.#questions.length) {
      this.afficherQuestion(this.#questions[this.#step]);
    } else {
      this.afficherResultat()
    }
  }

  afficherResultat() {
    document.getElementById('quizz').textContent = `Ton score est : ${this.#score} points`;
    document.getElementById('submit').classList.add('hidden');
  }

  get questions() {
    return this.#questions;
  }
}