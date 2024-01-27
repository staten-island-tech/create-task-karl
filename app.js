/* const URL = `https://random-word.ryanrk.com/api/en/word/random`;
deciding whether to use api or array

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
    }
    }
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
    const wordSubmit = document.getElementById("#submitForm");

    function startGame() {
      const randomWord = arr[Math.floor(Math.random() * arr.length)];
      const originalWord = randomWord.word;
      const scrambledWord = scrambleWord(originalWord);
      displayWords.textContent = `Scrambled word: ${scrambledWord}`;
  
      submitForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const results = document.getElementById("#userResponse").value.toLowerCase();
        if (results === originalWord.toLowerCase()) {
          alert("Correct! You unscrambled the word! Click to refresh!");
          startGame();
        } else {
          alert("That's Wrong! Try again.");
        }
      });
    }
  
    function scrambleWord(word) {
      const letters = word.split('');
      for (let i = letters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[j]] = [letters[j], letters[i]];
      }
      return letters.join('');
    }
    startGame();

    
/*     const find = arr[(Math.floor(Math.random() * arr.length))];
      console.log(find);

    function randomWord() {
      const find = arr[(Math.floor(Math.random() * arr.length))];
      console.log(find);
      console.log(find.split(''));
        const scramble = find.split((a, b) => 0.5 - math.random());
        for (i= arr.length - 1; i > 0 ; i--) {
         let a = [0]
         let b = scramble b
      
         console.log(scramble(a,b));
         document.querySelector("#words").insertAdjacentHTML(randomWord());
        }
    randomWord();
    } */


    //function for user input to unscramble word done

    //display scrambled words done

    //function for limit of input per turn to be done :)

    //algorithm to see if letters match in strings done