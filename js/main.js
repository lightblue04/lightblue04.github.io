'use strict';

{  
  const menuItems = document.querySelectorAll('.menu li a');
  const contents = document.querySelectorAll('.content');

  menuItems.forEach(clickedItem =>{
    clickedItem.addEventListener('click',e =>{
      e.preventDefault();

      menuItems.forEach(item =>{
        item.classList.remove('active');
      });
      clickedItem.classList.add('active');

      contents.forEach(content =>{
        content.classList.remove('active');
      });
      
      document.getElementById(clickedItem.dataset.id).classList.add('active');
    });
  });
}

{
  class Panel{
    constructor(){
      this.btn = document.createElement('div');
      this.btn.classList.add('panel');
      
      const main = document.querySelector('main');
      main.appendChild(this.btn);
      
      this.btn.addEventListener('click',() => {
        
        this.strings = ['Excellent!','Great!','Good!','>_<','*  _  *'];
        this.btn.textContent = this.strings[Math.floor(Math.random()*this.strings.length)];
        if(this.btn.textContent === '>_<'){
            this.btn.classList.add('correct');
            this.btn.classList.remove('wrong');       
        } else if(this.btn.textContent === '*  _  *'){
            this.btn.classList.add('wrong');
            this.btn.classList.remove('correct');
        } else{          
            this.btn.classList.remove('correct');
            this.btn.classList.remove('wrong');
        }
      });
    }   
  }

  const panels = [
    new Panel(),
    new Panel(),
    new Panel(),
  ]

  
}