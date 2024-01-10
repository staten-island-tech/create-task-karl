const URL = `https://random-word.ryanrk.com/api/en/word/random`;

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
    getData(URL);

    //function for user input to unscramble word

    //display scrambled words

    //function for limit of input per turn

    //algorithm to see if letters match in strings

    //array to store used words, prevent reuse