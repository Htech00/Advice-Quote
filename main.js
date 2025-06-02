// GRAP ALL CONTAINER TO  DISPLAY THEIR VALUE
let text = document.querySelector(".txt");
let adviceID = document.querySelector(".adv");
let quotesText = document.querySelector(".quo");
let button =document.querySelector(".glow");
let loading = document.querySelector(".loading");

let adviceData= async ()=>{
    let API = await  fetch("https://api.adviceslip.com/advice");
    let convertedData= await API.json();
    loading.classList.add("hidden");
     adviceID.textContent = `A D V I C E ${convertedData.slip.id}`;
     quotesText.textContent = `"${convertedData.slip.advice}"`;
};

button.addEventListener("click", () => {
    location.reload();
})

setTimeout(() => {
   adviceData(); 
},3000);


// async marks a function as asynchronous which means the function will always return a promise(network) This function might take some time,but it will return something else
// await can only be used inside an asynchronous function,it "pauses" that function execution until the promise, use await to pause execution until a promise resolve or rejects