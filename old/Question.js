'use strict';

export class Question {
  #enonce;
  #reponses;
  #reponseCorrecte;

  constructor(enonce, reponses, reponseCorrecte) {
    this.#enonce = enonce;
    this.#reponses = reponses;
    this.#reponseCorrecte = reponseCorrecte;
  }

  get enonce() {
    return this.#enonce;
  }

  set enonce(newEnonce) {
    this.#enonce = newEnonce;
  }

  get reponses() {
    return this.#reponses;
  }

  set reponses(newReponses) {
    this.#reponses = newReponses;
  }

  get reponseCorrecte() {
    return this.#reponseCorrecte;
  }

  set reponseCorrecte(newReponseCorrecte) {
    this.#reponseCorrecte = newReponseCorrecte;
  }

  afficher() {

  }
}

