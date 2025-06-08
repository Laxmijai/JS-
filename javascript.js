const buttons=document.querySelectorAll('.button');
const div=document.querySelector('body');

buttons.forEach(function (button){
    button.addEventListener('click',function(event){ //clicking ek event h jo ki bhut sari information ko carry krega to hume usse bbgc nikalana h  
        
        // sirf ek line se bhi ho jayega but iff we want only particular box for avvoiding bug like bg col black
       // div.style.backgroundColor = event.target.id; //event hua uska ek target  banaya then get the id of that
        

        if(event.target.id==='grey'){
             div.style.backgroundColor = event.target.id; 
        }
          if(event.target.id==='white'){
             div.style.backgroundColor = event.target.id; 
        }
          if(event.target.id==='blue'){
             div.style.backgroundColor = event.target.id; 
        }
          if(event.target.id==='yellow'){
             div.style.backgroundColor = event.target.id; 
        }
          if(event.target.id==='red'){
             div.style.backgroundColor = event.target.id; 
        }
    });
});