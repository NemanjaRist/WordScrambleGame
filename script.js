const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btnClear = document.querySelector('.btnClear');
const btnStartAgain = document.querySelector('.btnStartAgain');
const timerH2 = document.querySelector('.timer');

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');

let newWords = "";
let randomWords = "";
let word = 'posao';
let state = true;
btnStartAgain.style.display = "none";

setTimeout(()=>{
    console.log('animacija zavrsena');

const mixedLetters = (arr) => {
    for(let i = arr.length-1; i>=0; i--){
        let temp = arr[i];
        // console.log(temp);
        let j = Math.floor(Math.random()* (i+1));
        // console.log(j);

        arr[i] = arr[j];
        arr[j] = temp;

    }
    return arr;
}

const buttonWriting = () => {
    btn1.innerHTML = `${randomWords[0]}`;
    btn2.innerHTML = `${randomWords[1]}`;
    btn3.innerHTML = `${randomWords[2]}`;
    btn4.innerHTML = `${randomWords[3]}`;
    btn5.innerHTML = `${randomWords[4]}`;
}

const buttonClickHandler = (arr) => {
    arr.addEventListener('click', () => {
        guess.value += arr.innerHTML;

        let tempWord = guess.value;

        if(guess.value.length >= 5){
            if(tempWord == newWords)
            {
                state = false;
                msg.innerHTML = `Tacno`;
                guess.value = '';
                clearTimeout(timer);
                window.clearInterval(interval);
                btnClear.style.display = "none";
                btnStartAgain.style.display = "block";
                btnStartAgain.addEventListener('click', () =>{
                    window.location.reload();
                });
            }
            else
            {
                msg.innerHTML = `Netacno`;
                guess.value = '';
                clearTimeout(timer);
                window.clearInterval(interval);
                
                    window.location.reload();

                let i = 4;
                timer = setTimeout(()=>{
                },4000);
            
                interval = setInterval(()=>{
                    i--
                    timerH2.innerHTML = `${i}`
                    if(i==0)
                    {
                        i=4;
                        /*window.clearInterval(interval);*/
                    }
                },1000);
            }
        console.log(tempWord);
        console.log(state);
        }
    });
}

const buttonClearkHandler = (arr) => {
    arr.addEventListener('click', () =>{

        let tempWord = guess.value.slice(0,-1);
        console.log(tempWord);

        
        guess.value = "";
        guess.value = tempWord;
    });
}

    let details = navigator.userAgent;
    let regexp = /android|iphone|kindle|ipad/i;
    let isMobileDevice = regexp.test(details);

if (isMobileDevice) {
    if(state == true){
        newWords = word;
        randomWords = mixedLetters(newWords.split("")).join("");
        console.log(randomWords);
    
        msg.innerHTML = `Igra je pocela`;
    
        buttonWriting();
    
        let i=6;
        var timer = setTimeout(()=>{ 
            window.location.reload();
        },5000);
    
        var interval = setInterval(()=>{
            i--;
            timerH2.innerHTML = `${i}`;
            if(i==0)
            {
                i=5;
                /*window.clearInterval(interval);*/
            }
        },1000);
    
    
        buttonClickHandler(btn1);
        buttonClickHandler(btn2);
        buttonClickHandler(btn3);
        buttonClickHandler(btn4);
        buttonClickHandler(btn5);
        buttonClearkHandler(btnClear);
    
    }
    else
    {
        msg.innerHTML = `Tacno`;
        window.clearInterval(interval);
        clearTimeout(timer);
    
        window.location.reload();
    }
 } else {
    if(state == true){
        newWords = word;
        randomWords = mixedLetters(newWords.split("")).join("");
        console.log(randomWords);
    
        msg.innerHTML = `Igra je pocela`;
    
        buttonWriting();
    
        let i=5;
        var timer = setTimeout(()=>{ 
            window.location.reload();
        },4000);
    
        var interval = setInterval(()=>{
            i--;
            timerH2.innerHTML = `${i}`;
            if(i==0)
            {
                i=5;
                /*window.clearInterval(interval);*/
            }
        },1000);
    
    
        buttonClickHandler(btn1);
        buttonClickHandler(btn2);
        buttonClickHandler(btn3);
        buttonClickHandler(btn4);
        buttonClickHandler(btn5);
        buttonClearkHandler(btnClear);
    
    }
    else
    {
        msg.innerHTML = `Tacno`;
        window.clearInterval(interval);
        clearTimeout(timer);
    
        window.location.reload();
    }
 }
},4000);
// if(state == true){
//     newWords = word;
//     randomWords = mixedLetters(newWords.split("")).join("");
//     console.log(randomWords);

//     msg.innerHTML = `Igra je pocela`;

//     buttonWriting();

//     let i=5;
//     var timer = setTimeout(()=>{ 
//         window.location.reload();
//     },4000);

//     var interval = setInterval(()=>{
//         i--;
//         timerH2.innerHTML = `${i}`;
//         if(i==0)
//         {
//             i=5;
//             /*window.clearInterval(interval);*/
//         }
//     },1000);


//     buttonClickHandler(btn1);
//     buttonClickHandler(btn2);
//     buttonClickHandler(btn3);
//     buttonClickHandler(btn4);
//     buttonClickHandler(btn5);
//     buttonClearkHandler(btnClear);

// }
// else
// {
//     msg.innerHTML = `Tacno`;
//     window.clearInterval(interval);
//     clearTimeout(timer);

//     window.location.reload();
// }








/*
    play = true;
    guess.classList.toggle('hidden');
    newWords = word;
    randomWords = mixedLetters(newWords.split("")).join("");
    console.log(randomWords);
    console.log(randomWords[0]);
    msg.innerHTML = `${randomWords}`;

    let i=4    
    const timer = setTimeout(()=>{
        play = false;
        msg.innerHTML = "Vreme je isteklo";
        guess.classList.toggle('hidden');
        guess.value = "";
    },4000);
    
    const interval = setInterval(()=>{
        i--
        timerH2.innerHTML = `${i}`
        if(i==0)
        {
            window.clearInterval(interval);
        }
    },1000);



    btn.addEventListener('click', function(){
        if(play){
            let tempWord = guess.value;
            if(tempWord === newWords){
                // console.log('correct');
                play = false;
                msg.innerHTML = `Bravo , pogodili ste. Rec je ${newWords}`;
                guess.classList.toggle('hidden');
                guess.value = "";
                clearTimeout(timer);
                
            }else{
                // console.log('incorrect');
                msg.innerHTML = `Netacno`;
            }
        }
});

*/