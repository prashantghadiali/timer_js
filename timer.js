var count = document.getElementById("cntdwn");
var btn = document.getElementById("btn");
var inputField = document.getElementById("user-input");
var add = document.getElementById("addition");


btn.addEventListener("click", (e) => {
    var input = parseInt(inputField.value);
    let counter = 0;
    let intervalID = setInterval(Timer, 1000);
    function Timer() {
        console.log(counter, input);
        if (counter == input){
            clearInterval(intervalID);
            console.log("reached");
            return
        }
        counter++;
        if (add.classList.contains('hide')){
            add.innerHTML = counter;
            add.classList.add('show');
            add.classList.remove('hide');
            add.style.transform = `translate( 0, 0)`;
            console.log(count.classList);
            count.classList.add('hide');
            count.classList.remove('show');
            count.style.transform = `translate(0, 20vh)`;
        }
        else{
            count.innerHTML = counter;
            add.classList.add('hide');
            add.classList.remove('show');
            add.style.transform = `translate(0, 20vh)`;
            count.classList.add('show');
            count.classList.remove('hide');
            count.style.transform = `translate(0, 0)`;
        }
    }
});




    // btn.addEventListener('click', evt => {
    //     add.classList.toggle('show')
    //     add.style.transform = `translate(${evt.clientY - 20}vh)`;
    //     let counter = 0;
    //     setInterval(() => {
    //         add.style.transform = 
    //     }, 1000);
    // })
