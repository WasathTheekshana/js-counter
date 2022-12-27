let count = 0; //initial count set
const value = document.querySelector('.value'); //select the value class
const btns = document.querySelectorAll('.btn'); //select all the buttons from btn class

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const style = e.currentTarget.classList;
        if(style.contains('decerase')){
            count--;
        }
        else if(style.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }

        if(count > 0){
            value.style.color = 'green';
        }
        if(count == 0){
            value.style.color = 'black';
        }
        if(count < 0){
            value.style.color = 'red';
        }

        value.textContent = count; 
    })
})
