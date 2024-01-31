/* const URL = `https://random-word.ryanrk.com/api/en/word/random`;

async function getData(URL) {
    try {
        const response = await fetch(URL);
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        const grab = await response.json();
        console.log(grab.data);

    } catch (error) {
        console.log("something broke", error);
    }};
    getData(URL); */

    const arr = [
      {
         word: "apple",
      },
      {
         word: "banana",
      },
      {
         word: "purple",
      },
      {
         word: "origami",
      },
      {
         word: "evaporometer",
      },
      {
         word: "maimed",
      },
      {
         word: "imponent",
      },
      {
         word: "wakiki",
      },
      {
         word: "irksome",
      },
      {
         word: "stamba",
      },
      {
         word: "chantress",
      },
      {
         word: "phebe",
      },
      {
         word: "sweetland",
      },
      {
         word: "impurify",
      },
      {
         word: "internship",
      },
      {
         word: "platypus",
      },
      {
         word: "kinetosis",
      },
      {
         word: "autophosphorylation",
      },

  ]

    const displayWords = document.querySelector(".words");
    const wordSubmit = document.getElementById("submitForm");

    let win = 0;
    let lose = 0;

    function startGame() {
      const randomWord = arr[Math.floor(Math.random() * arr.length)];
      originalWord = randomWord.word;
      const display = scrambleWord(originalWord);
      displayWords.textContent = `Unscramble the word: ${display}`;
  }
    
    let originalWord = "";
    wordSubmit.addEventListener("submit", function(event) {
        event.preventDefault();
        const userGuess = document.getElementById("userResponse").value.trim().toLowerCase();
    
        if (userGuess === originalWord.toLowerCase()) {
            alert("Correct! You unscrambled the word! Click to refresh!");
            
            startGame();
            win++;
        } else {
            alert("That's Wrong! Try again.");
            lose++;
        }
        counter();
    });
    
    function scrambleWord(word) {
        const letters = word.split('');
        for (let i = letters.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [letters[i], letters[j]] = [letters[j], letters[i]];
        }
        return letters.join('');
    }
    
    document.getElementById("newWord").addEventListener("click", function() {
        startGame();
    });

    function counter() {
      document.querySelector(".counter").textContent = `Win/Lose Ratio: ${win}/${lose}`;
    }
    counter();
    startGame();

    //function for user input to unscramble word done

    //display scrambled words done

    //function for limit of input per turn to be done :)

    //algorithm to see if letters match in strings done 

