const emojiDetails = [
    { description: "Smiling face with sunglasses", emoji: "😎" },
    { description: "Thumbs up", emoji: "👍" },
    { description: "Heart eyes", emoji: "😍" },
    { description: "Crying face", emoji: "😢" },
    { description: "Party popper", emoji: "🎉" },
    // Add more emoji descriptions here
  ];
  
    let currentEmojiIndex = 0;
    let score = 0;
    let second=30;
    let timer=0;
  
  
    //
    const timerelement=document.getElementById("timer");
    const guessInput = document.getElementById("guess-input");
    const resultElement = document.getElementById("result");
    const scoreElement = document.getElementById("score");
  
    function displayEmoji() {
      const descriptionElement = document.getElementById("description");
      descriptionElement.textContent = emojiDetails[currentEmojiIndex].emoji;
      timerelement.textContent=`Time: ${second}`;
    }
  
    function checkGuess() {
      const guess = guessInput.value.trim().toLowerCase();
      const correctEmoji = emojiDetails[currentEmojiIndex].description.trim().toLowerCase();
  
      if (guess === correctEmoji) {
        resultElement.textContent = "Correct!";
        score++;
      } else {
        resultElement.textContent = "Wrong!";
      }
      console.log(score);
      scoreElement.textContent = `Score: ${score}`;
      guessInput.value = "";
      guessInput.focus();
      nextEmoji();
    }
  
    function nextEmoji() {
      currentEmojiIndex++;
     setTimeout(()=>{resultElement.textContent="";},1000);
      if (currentEmojiIndex === emojiDetails.length) {
        currentEmojiIndex = 0;
        score=0;
      }
  
      displayEmoji();
    }
  
    document
      .getElementById("guess-input")
      .addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          checkGuess();
        }
      });
  
    document.addEventListener("DOMContentLoaded", () => {
      displayEmoji();
      setTimer();
    });
  function setTimer(){
    timer=setInterval(()=>{
        second--;
        timerelement.textContent=`Time: ${second}`;
        if (second<=0){
            endgame();
        }
    },1000);
    function endgame(){
        clearInterval(timer);
        guessInput.disabled=true;
        timerelement.textContent="";
    }
   
    }
  


//     shuffleemojis([1,2,3,4,5]);
//    function shuffleemojis(opt){
//     for (let i=opt.length-1;i>=0;i--){
//         const j=Math.floor(Math.random()*i+1)
//         [opt[i],opt[j]]=[opt[j],opt[i]];
//     }
//     return opt;



//    }