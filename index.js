const randomGenres = [
  "Motivation",
  "Mystery",
  "Science",
  "Comedy",
  "Life-Facts",
];

// full lists
const motivation = [
  "Believe in yourself; you're capable of more than you imagine.",
  "Success often comes to those who dare to dream, who are not afraid to take risks.",
  "Your attitude determines your direction; stay positive, work hard, and success will follow.",
  "Every accomplishment starts with the decision to try; take that first step toward your goal.",
  "Embrace challenges as opportunities for growth; perseverance is the key to achieving greatness.",
];

const lifeFacts = [
  "Change is Inevitable",
  "Learning is Continuous",
  "Challenges Nurture Growth",
  "Connections Matter",
  "Time is Precious",
];

const comedyHumorList = [
  "Why did the comedian go to school? To improve his 'stand-up' performance!",
  "I'm on a seafood diet. I see food and I eat it... except during a comedy show; then I try not to choke!",
  "Why don't comedians do knock-knock jokes? Because they don't want to 'stand-up' for the answer!",
  "Did you hear about the claustrophobic comedian? He couldn't 'stand' the 'close' set!",
  "How many comedians does it take to screw in a light bulb? One, but the light bulb has to 'twist' the punchline!",
];

const scienceList = [
  "Science is the art of asking questions and seeking answers through experimentation.",
  "The scientific method: observe, question, hypothesize, test, analyze, conclude, and share.",
  "The beauty of science lies in its ability to unveil the mysteries of the universe.",
  "In science, every failure is a step closer to understanding. It's about progress, not perfection.",
  "Science is a journey of discovery, exploring the unknown and expanding our understanding.",
];

const mysteryList = [
  "Mystery novels often keep readers on the edge of their seats, unraveling enigmatic plots.",
  "The intrigue of a mystery lies in the anticipation of discovering the unknown.",
  "The allure of a mystery is in its ability to captivate, leaving audiences curious and engaged.",
  "Solving a mystery requires critical thinking, attention to detail, and piecing together clues.",
  "The thrill of a mystery is the satisfaction of uncovering the concealed truths.",
];

// advices
const AdviceList = [
  "Listen more than you speak; understanding often begins with attentive listening.",
  "Don't fear failure; it's a stepping stone toward success, offering valuable lessons.",
  "Seek progress, not perfection; continuous improvement is the key to personal growth.",
  "Prioritize your mental health; self-care is crucial for a balanced and fulfilling life.",
  "Surround yourself with positivity; choose company that uplifts and supports you.",
];

// function random

const makeRandomNumber = (array) => {
  return Math.floor(Math.random() * array.length);
};

// choosing random genre
const genreChoiceFunk = (choiceArray) => {
  return choiceArray[makeRandomNumber(choiceArray)];
};

// choosing random msg according to random genre choice
const randomMsgGenrator = (genre) => {
  let randomMessage = "";
  if (genre === "Motivation") {
    randomMessage = motivation[makeRandomNumber(motivation)];
  } else if (genre === "Mystery") {
    randomMessage = mysteryList[makeRandomNumber(mysteryList)];
  } else if (genre === "Science") {
    randomMessage = scienceList[makeRandomNumber(scienceList)];
  } else if (genre === "Comedy") {
    randomMessage = comedyHumorList[makeRandomNumber(comedyHumorList)];
  } else if (genre === "Life-Facts") {
    randomMessage = lifeFacts[makeRandomNumber(lifeFacts)];
  } else {
    randomMessage = "Unknown genre or issue with genreChoiceFunk function.";
  }
  return randomMessage;
};

// free advice

const adviceFunk = (array) => {
  return array[makeRandomNumber(array)];
};

//saved data
// genreting random genre
const saveRandomGenre = genreChoiceFunk(randomGenres);

// genreting random msg according that genre choice
const saveRandomMsg = randomMsgGenrator(saveRandomGenre);

// life advice
const saveRandomAdvice = adviceFunk(AdviceList);

// msg app
const messageApp = (Genre, msg, advice) => {
  console.log(`Topic of your Message is: ${Genre}\n`);
  console.log(`Message: \n ${msg} \n `);
  console.log(`An Advice: ${advice} \n`);
};

messageApp(saveRandomGenre, saveRandomMsg, saveRandomAdvice);
