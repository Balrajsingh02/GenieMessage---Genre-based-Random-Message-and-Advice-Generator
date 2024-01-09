const randomGenres = [
  "Motivation",
  "Mystery",
  "Science",
  "Comedy",
  "Life-Facts",
];

// our advices
const AdviceList = [
  "Listen more than you speak; understanding often begins with attentive listening.",
  "Don't fear failure; it's a stepping stone toward success, offering valuable lessons.",
  "Seek progress, not perfection; continuous improvement is the key to personal growth.",
  "Prioritize your mental health; self-care is crucial for a balanced and fulfilling life.",
  "Surround yourself with positivity; choose company that uplifts and supports you.",
];

// all msgs genre with their msgs
const msgObject = {
  motivation: [
    "Believe in yourself; you're capable of more than you imagine.",
    "Success often comes to those who dare to dream, who are not afraid to take risks.",
    "Your attitude determines your direction; stay positive, work hard, and success will follow.",
    "Every accomplishment starts with the decision to try; take that first step toward your goal.",
    "Embrace challenges as opportunities for growth; perseverance is the key to achieving greatness.",
  ],

  "life-Facts": [
    "Change is Inevitable",
    "Learning is Continuous",
    "Challenges Nurture Growth",
    "Connections Matter",
    "Time is Precious",
  ],

  mystery: [
    "Mystery novels often keep readers on the edge of their seats, unraveling enigmatic plots.",
    "The intrigue of a mystery lies in the anticipation of discovering the unknown.",
    "The allure of a mystery is in its ability to captivate, leaving audiences curious and engaged.",
    "Solving a mystery requires critical thinking, attention to detail, and piecing together clues.",
    "The thrill of a mystery is the satisfaction of uncovering the concealed truths.",
  ],

  science: [
    "Science is the art of asking questions and seeking answers through experimentation.",
    "The scientific method: observe, question, hypothesize, test, analyze, conclude, and share.",
    "The beauty of science lies in its ability to unveil the mysteries of the universe.",
    "In science, every failure is a step closer to understanding. It's about progress, not perfection.",
    "Science is a journey of discovery, exploring the unknown and expanding our understanding.",
  ],

  comedy: [
    "Why did the comedian go to school? To improve his 'stand-up' performance!",
    "I'm on a seafood diet. I see food and I eat it... except during a comedy show; then I try not to choke!",
    "Why don't comedians do knock-knock jokes? Because they don't want to 'stand-up' for the answer!",
    "Did you hear about the claustrophobic comedian? He couldn't 'stand' the 'close' set!",
    "How many comedians does it take to screw in a light bulb? One, but the light bulb has to 'twist' the punchline!",
  ],
};

//dom access

// start
// section first showing

let button2 = document.getElementById("button2");
let sectionDisplay = document.getElementById("main-section");
let genieDisplay = document.getElementById("genie-section");

// after that section showing
let button = document.getElementById("button");
let genre = document.getElementById("genre");
let fullMessage = document.getElementById("full-message");
let fullAdvice = document.getElementById("full-advice");

//end

// functions
const randomChoice =
  randomGenres[Math.floor(Math.random() * randomGenres.length)];

//console.log(randomChoice);

// function

const messageGeneratorFunction = (choice, obj, advice) => {
  let choiceToday = choice;
  let msgToday = "";
  let randomAdvice = advice[Math.floor(Math.random() * advice.length)];

  for (let key in obj) {
    if (choice.toLowerCase() === key.toLocaleLowerCase()) {
      msgToday = obj[key][Math.floor(Math.random() * obj[key].length)];
    }
  }

  return {
    choiceNow: choiceToday,
    msgNow: msgToday,
    adviceNow: randomAdvice,
  };
};

// button handler

button2.addEventListener("click", function () {
  //DOM update
  sectionDisplay.style.display = "flex";
  genieDisplay.style.display = "none";
});

button.addEventListener("click", function () {
  finalMessage = messageGeneratorFunction(
    randomGenres[Math.floor(Math.random() * randomGenres.length)],
    msgObject,
    AdviceList
  );

  genre.innerText = `Genre - ${finalMessage.choiceNow}`;
  fullMessage.innerText = finalMessage.msgNow;
  fullAdvice.innerText = finalMessage.adviceNow;
  button.innerText = "Show More";
});
