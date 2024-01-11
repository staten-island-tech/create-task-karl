const URL = `https://random-word.ryanrk.com/api/en/word/random`;

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

    function randomWord() {
        
    }
    
    for (i= 0; i < ; i++)

    randomWord();



    //function for user input to unscramble word

    //display scrambled words

    //function for limit of input per turn

    //algorithm to see if letters match in strings

    //array to store used words, prevent reuse