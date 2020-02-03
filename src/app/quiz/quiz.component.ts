import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  
  questions: boolean = false;
  isResult: boolean = false;
  result: string;

  constructor() { }

  showQuiz() {
  	document.getElementById("quiz").hidden = true;
  	this.questions = !this.questions;
  }

  getQuestionScore(question: string): number {
    let qScore: number = 0;
  	let q = document.getElementById(question);
    let radios = q.getElementsByTagName("input");
    for(let i = 0; i < radios.length; i++) {
      if(radios[i].checked) {
        qScore = parseInt(radios[i].value);
      }
    }
    return qScore;
  }

  calculateScore(): number {
    let score = +this.getQuestionScore("question1") + +this.getQuestionScore("question2") + +this.getQuestionScore("question3") + +this.getQuestionScore("question4");
    console.log(score);
    return score;
  }

  getSkinType(): string {
    let skinType: string;
    let score = this.calculateScore();
    if(score >= 0 && score < 11) {
      skinType = "Dry Skin";
    }
    else if(score >= 11 && score < 51) {
      skinType = "Combination Skin";
    }
    else if(score >= 51 && score < 91) {
      skinType = "Oily Skin";
    }
    else if(score >= 91 && score < 131) {
      skinType = "Sensitive Skin";
    }
    else if(score >= 131) {
      skinType = "Normal Skin";
    }
    console.log(skinType);
    return skinType;
  }

  showSkinType() {
    this.questions = !this.questions;
    this.isResult = !this.isResult;
    this.result = this.getSkinType();
  }

  ngOnInit() {
  }

}
