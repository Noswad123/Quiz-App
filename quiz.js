class Choice {

   constructor(isCorrect, answer ){
    isCorrect=false;
    answer='';
  };

  //renderChoice?
  // render out choice?
}
class Question{
      constructor(query, answer, pointValue, choices){
        this.query = query;
        this.pointValue = pointValue || 1;
        this.choices = choices || [new Choice, new Choice, new Choice];
      }

      renderQuestion(){
      // write html
    }

}
class Quiz{
  constructor(title){
    this.title=title||"quiz";
    this.correct=0;
    this.totalValue= 0;
    this.score=0;
    this.questions=[{
      query: 'What is a good philosopy question?',
      points: 20,
      choices: [{isCorrect: false,answer:"Are you smart?"},{isCorrect: false,answer:"How many toes do you have?",},{isCorrect: true, answer:"Does God exist?",}]
    },
    {
      query: 'What makes the word go round?',
      points: 20,
      choices: [{isCorrect: true,answer:"Money"},{isCorrect: false,answer:"Fame",},{isCorrect: true, answer:"Happiness",}]
    },
    {
      query: 'If your friends are close, where do you keep your enemies?',
      points: 20,
      choices: [{isCorrect: false,answer:"Close"},{isCorrect: true,answer:"Closer",},{isCorrect: false, answer:"Far Far Away",}]
    },
    {
      query: 'How much do your thoughts cost?',
      points: 20,
      choices: [{isCorrect: false,answer:"A million dollars"},{isCorrect: true,answer:"A Penny",},{isCorrect: false, answer:"Free",}]
    },
    {
      query: 'what does Hakuna Matata mean?',
      points: 20,
      choices: [{isCorrect: false,answer:"A Lion King"},{isCorrect: false,answer:"Hello World",},{isCorrect: true, answer:"No Worries",}]
    }];

  };



  renderQuiz(){
    // process the questions
    var node=[];
    var nodeList=[];
    var form=[];
    var radio=[];
    var node2=[];
    var nodeList2=[];
    for (var i=0;i<this.questions.length;i++)
    {
      node[i]=document.createElement("div");
      form[i]=document.createElement("form");
      form[i].setAttribute("id",this.questions[i].query);
      nodeList[i]=document.createTextNode(this.questions[i].query);
      document.getElementById("quiz").appendChild(node[i]);
      node[i].appendChild(nodeList[i]);
      node[i].appendChild(form[i]);

      for(var x=0;x<this.questions[i].choices.length;x++){

        radio[x]=document.createElement("input");
        node2[x]=document.createElement("div");
        radio[x].setAttribute("type","radio");
        radio[x].setAttribute("name",this.questions[i].query);
        radio[x].setAttribute("id",this.questions[i].choices[x].answer);
        radio[x].value=this.questions[i].choices[x].isCorrect;
        nodeList2[x]=document.createTextNode(this.questions[i].choices[x].answer);
        document.getElementById(this.questions[i].query).appendChild(radio[x]);
        document.getElementById(this.questions[i].query).appendChild(nodeList2[x]);



      }


    }
  }
}

function submitQuiz(){
  //alert("This feature does not exist yet");
  myQuiz.totalValue=0;
  myQuiz.correct=0;
  var selection=false;
  var rightAnswer=false;
  for(var i=0;i<myQuiz.questions.length;i++)
    {
      myQuiz.totalValue+=myQuiz.questions[i].points;

      for(var x=0;x<myQuiz.questions[i].choices.length;x++)
      {
      //  console.log(document.getElementById(myQuiz.questions[i].choices[x].answer).value+" "+document.getElementById(myQuiz.questions[i].choices[x].answer).checked);
        rightAnswer=document.getElementById(myQuiz.questions[i].choices[x].answer).value;
        selection=document.getElementById(myQuiz.questions[i].choices[x].answer).checked;

        if(rightAnswer=="true" && selection)
        {
          console.log(myQuiz.correct);
          myQuiz.correct+=myQuiz.questions[i].points;

        }else{console.log("not right")};
      }
    }
    myQuiz.score=myQuiz.correct/myQuiz.totalValue;
    alert("You scored a " + myQuiz.score*100);
  }


function createQuiz(){
if (run==0)
  {
    myQuiz.renderQuiz();
    run++;
  }
}
function saveQuiz(){

alert("This feature does not exist yet");
}
var myQuiz=new Quiz();
var run=0;
