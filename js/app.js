const url = "https://icanhazdadjoke.com/";
//const url = "https://icanhazdadjoke.com/sss";// error!!


const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
  ///console.log('hello');
  fetchDadJoke();
});

const fetchDadJoke = async () => {
  result.textContent = "Loading...";

  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "learning app",
      },
    });
    if (!response.ok){
        throw new Error('there was an error');
        //console.log('there was an error');
    }
    //console.log(response)
    const data = await response.json();
    //console.log(data)
    result.textContent = data.joke;
    //console.log(data)
    //console.log(response)
  } catch (error) {
    console.log(error.message)
    result.textContent = 'there was an error...'
  }
};
// console.log(btn, result);
// console.log('Dad Jokes Starter');

fetchDadJoke();
