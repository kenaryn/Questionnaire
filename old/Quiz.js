'use strict';

import { Question } from './Question.js';

export class Quiz {
  #questions;
  #score;

  constructor(questions = [], score = 0) {
    this.#questions = questions;
    this.#score = score;
  }

  get questions() {
    return this.#questions;
  }

  set questions(newQuestions) {
    this.#questions = newQuestions;
  }

  get score() {
    return this.#score;
  }

  set score(newScore) {
    this.#score = newScore;
  }

  aajouterQuestion(question) {
    this.questions.push(question);
  }

  afficherQuestion(question) {
    // Vider le contenu de la précédente question
    document.getElementById('quiz').textContent = '';
    question.afficher();
  }

  collecterReponse(reponse) {
    if (this.reponseCorrecte === reponse) {
      console.info('Bonne réponse');
      this.score += 1;
    }
  }

  afficherResultat() {
    const p = document.createElement('p');
    p.textContent = `Votre score final est : ${this.score} points`;
    document.body.append(p);
  }
}