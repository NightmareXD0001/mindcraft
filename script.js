q1 = "hello";
qNum = 0;
totalQ = 13;
score = 0;
answer = Array(totalQ - 1);
corrAns = Array(totalQ - 1);
username = "null";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUeIf5A92cxymtacZ8IxvlIxE7pT9sJWo",
  authDomain: "matrix-mindcraft.firebaseapp.com",
  databaseURL:
    "https://matrix-mindcraft-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "matrix-mindcraft",
  storageBucket: "matrix-mindcraft.appspot.com",
  messagingSenderId: "269035655467",
  appId: "1:269035655467:web:5e388db04c11078b74f56e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//get ref to database services
const db = getDatabase(app);

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
    "placeholder",
    "Enter Your Password",
    "Send a message in a bottle €",
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
    "",
    "",
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
    "",
    "",
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
  if (qNum == 0) {
    username = ans.value;
  }
  if (qNum == 1) {
    const dbRef = ref(database, "user/" + username + "/password");
    // Read the data
    get(dbRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        }
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
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
      document.getElementById("submit").addEventListener("click", function (e) {
        e.preventDefault();
        set(ref(db, "user/" + document.getElementById("username").value), {
          username: document.getElementById("username").value,
          email: document.getElementById("email").value,
          score: score.value,
        });
        alert("Sucessfull!");
      });

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
}
