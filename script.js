q1 = "hello";
qNum = 0;
totalQ = 11;
score = 0;
answer = Array(totalQ - 1);
corrAns = Array(totalQ - 1);

function nextQ() {
  //declaring objects
  const btn = document.getElementById("nextButton");
  const quesTxt = document.getElementById("question");
  const ans = document.getElementById("answer");
  const qnaScr = document.getElementById("qnaScr");
  const endScr = document.getElementById("endScr");
  const scoreTxt = document.getElementById("score");
  const img = document.getElementById("qImg");

  //creating an array for storing questions and correct answers
  question = [
    "question 1 placeholder",
    "$$$",
    "fungal disease from Home.",
    "49 54 56 53 13 10  u0076\\u0065\\u0067\\u0065\\u0074 \\u0061\\u0072\\u0069\\u0061\\u006e\\u000d -- ELLA",
    "The dog is burning. The potrait was scratched. Long before you reached the Bottom.",
    "Sub-species of bird that buries its head into the sand, an element you have in hand. \n Atomically pronic, the colour bland, \n the number is important, keep that in your mind. \n Go back a century and tell me what you find........ ",
    "Space won\x27t save you",
    "£1 \n I can\x27t see and I can\x27t hear, but I can write with no fear.",
    "34.0140281880751,-118.28751964143076 \n What do people call me? I am very fast. \n Where do I migrate in hot weather forecast?",
    "Flying",
    "lamborghini-->pagani \n koenigsegg--> ? ",
  ];

  image = [
    "css/Q1.jpg",
    "css/Q2.jpg",
    "css/Q3.png",
    "css/Q4.png",
    "css/Q5.png",
    "",
    "css/Q7.png",
    "css/Q8.png",
    "",
    "css/Q10.png",
    "",
  ];

  corrAns = [
    "georgestafford",
    "3.47",
    "phacidiaceae",
    "LIVONIANWAR",
    "siriusblack",
    "fatman",
    "mackenziemcdonald",
    "helenbrawn",
    "canada",
    "mercedesclr",
    "nilu27",
  ];

  //SAVING ANSWER ----
  answer[qNum] = ans.value;

  ans.style.outlineColor = "red";

  //calculating score
  if (answer[qNum] == corrAns[qNum]) {
    //RESETTING VALUE OF TEXTBOX AND COLOR----
    ans.value = "";
    ans.style.outlineColor = "#222";

    //ADDING TO TOTAL NO. OF QUESTIONS AND SCORE----
    qNum++;
    score++;

    //CHANGING QUESTION TEXT AND IMAGE------
    img.src = image[qNum];
    quesTxt.innerText = qNum + 1 + "." + " " + question[qNum];
  }

  //ENDING
  if (qNum > totalQ - 1) {
    //making end screen visible
    qnaScr.style.visibility = "hidden";
    endScr.style.visibility = "visible";
  }
}
