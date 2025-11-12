'use strict';

export class Question {
  #enunciation;
  #answers;
  #correctAnswer;

  constructor(enunciation, answers, correctAnswer) {
    this.#enunciation = enunciation;
    this.#answers = answers;
    this.#correctAnswer = correctAnswer;
  }

  afficher() {
    const divQuizz = document.getElementById('quizz');
    // const divEnunciation = document.createElement('div');
    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend');
    legend.textContent = this.enunciation;
    fieldset.appendChild(legend);

    // Créer un bouton `input type="radio" name=`answers` + le label associé pour chaque item de `#answers`
    this.answers.forEach((val, idx) => {

      const inputAnswer = document.createElement('input');
      inputAnswer.type = 'radio';
      inputAnswer.name = 'answers'
      inputAnswer.value = String(idx);
      fieldset.appendChild(inputAnswer);

      const labelAnswer = document.createElement('label');
      labelAnswer.textContent = val;
      fieldset.appendChild(labelAnswer);
      divQuizz.appendChild(fieldset);
    });
  }

  get enunciation() {
    return this.#enunciation;
  }

  get answers() {
    return this.#answers;
  }

  set answers(value) {
    this.#answers = value;
  }

  get correctAnswer() {
    return this.#correctAnswer;
  }

  set correctAnswer(value) {
    this.#correctAnswer = value;
  }
}