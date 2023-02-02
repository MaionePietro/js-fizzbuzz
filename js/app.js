let i=0;
let stamp = document.querySelector('body')
for(i ; i<=100 ; i++){
    if( (i% 3 == 0) && (i % 5 == 0) ){
        console.log('FizzBuzz');
        stamp.innerHTML += ' <h1>FizzBuzz</h1>';
    }else if(i % 3 == 0){
        console.log('Fizz');
        stamp.innerHTML += ' <h1>Fizz</h1>';
    }else if(i % 5 == 0){
        console.log('Buzz');
        stamp.innerHTML += ' <h1>Buzz</h1>';
    }else {
        console.log(i);
        stamp.innerHTML += '<h1>'+i+'</h1>';
        
    }
}