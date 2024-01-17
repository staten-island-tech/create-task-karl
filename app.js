/* const URL = `https://random-word.ryanrk.com/api/en/word/random`; */

/* async function getData(URL) {
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
           pword: "Phebe",
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

    const find = arr[(Math.floor(Math.random() * arr.length))];
   /*     console.log(find); */

    function randomWord() {
      const find = arr[(Math.floor(Math.random() * arr.length))];
      console.log(find);
      console.log(find.split(''));
/*         const scramble = find.split((a, b) => 0.5 - math.random());
        for (i= arr.length - 1; i >0 ; i++) {
         let a = 
         let b = 

         console.log(scramble(a,b)); */
        }
    randomWord();

    function compare() {
      document.querySelector("#word-form").addEventListener("submit", function () {
         if ( //user input = find.result
          1
         );
         else (
          0
         );
         });
    }


    //function for user input to unscramble word

    //display scrambled words

    //function for limit of input per turn

    //algorithm to see if letters match in strings

    //try again button, new word button