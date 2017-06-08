/*Programming Foundations in JavaScript Final Project
Now that you have completed the Programming Foundation in JavaScript Course, you will be putting your newly acquired knowledge to the test. You will be building a Quiz App with what you have learned in the lessons preceding this project.

Requirements
Use classes
Use the prompt and alert methods to present your quiz
Give the user 5 questions
Each question has one possible answer from a list of answers (Give the user a minimum of 3 and no more than 5 choices)
Assign points to each question and maintain a running total for the quiz
If you allow the user to retake the question until they get it correct deduct 1 point each time they get the question wrong
Bonus
Setup multiple quizzes
Store the quiz in local storage
Use HTML to present your quiz
Allow the user to create their own quizzes*/

class question{

      constructor(title,answer,pointValue){
        this.title=title;
        this.answer= answer;
        this.pointValue= pointValue;
        this.choices=["choice 1", "choice 2", "choice 3"]
      };
      getQuestion() {


          console.log( this.title + ' ' + this.pointValue+'pts.') ;
          for(var i=0; i<this.choices.length;i++)
          {
          console.log(this.choices[i]);
          }
      };

      getChoices() {
          return this.choices;
      };
      setChoices(choice1,choice2,choice3){

          this.choices[0]= choice1;
          this.choices[1]= choice2;
          this.choices[2]= choice3;


      };

};
class quiz{
  constructor(title){
    this.title=title;
    this.correct=0;
    this.totalValue= 0;
    this.score=0;
    this.questions=[new question,new question ,new question ];
  };

  calcScore(){
    return this.correct/this.totalValue;
  }

}
//make Questions
var myQuestion1=new question ("What makes the word go round?",1,8);
myQuestion1.setChoices("money","Women","Happiness");

var myQuestion2=new question ("What is a good philosopy question",2,5);
myQuestion2.setChoices("Are you smart?","How many toes do you have? ","Does God exist?");

var myQuestion3=new question ("Where do you keep your enemies",0,12);
myQuestion3.setChoices("Closer","close","far away ");


//initialize quiz
var philoQuiz= new quiz("Philosopy Quiz")
philoQuiz.questions[0]=myQuestion1;
philoQuiz.questions[1]=myQuestion2;
philoQuiz.questions[2]=myQuestion3;

console.log(philoQuiz.questions[1].pointValue);
//console.log("The correct answer is " + myQuestion1.choices[myQuestion1.answer]);
for(var i=0;i<philoQuiz.questions.length;i++){
philoQuiz.totalValue=philoQuiz.questions[i].pointValue+philoQuiz.totalValue;
};
console.log(philoQuiz.totalValue);
