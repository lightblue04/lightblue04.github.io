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
  const btnId = document.getElementById('btn');
  const result = document.getElementById('result');
  const replay = document.getElementById('replay');
  const scoreLabel = document.querySelector('#result > p');
  
  class Panel{
    constructor(){
      this.btn = document.createElement('div');
      this.btn.classList.add('panel');
      
      const main = document.querySelector('main');
      main.appendChild(this.btn);
       
      this.btn.addEventListener('click',() => {
        if (this.btn.classList.contains('inactive')){
          return;
        }
        this.btn.classList.add('inactive');
        this.strings = [
          {p:'Good!',q:1},
          {p:'Great!',q:2},
          {p:'Excellent!',q:3},
          {p:'*^_^*',q:4},
          {p:'*´◡`*',q:5}
        ];
        this.num = Math.floor(Math.random()*this.strings.length)
       
        this.btn.textContent = this.strings[this.num].p;
        if(this.btn.textContent === '*^_^*'){
            this.btn.classList.add('correct');
            this.btn.classList.remove('wrong');       
        } else if(this.btn.textContent === '*´◡`*'){
            this.btn.classList.add('wrong');
            this.btn.classList.remove('correct');
        } else{          
            this.btn.classList.remove('correct');
            this.btn.classList.remove('wrong');
        }
        this.score = this.strings[this.num].q
        // console.log(this.score);
      });
    }
    setInitialState(){
      this.btn.textContent ='';
      this.score = 0;
      this.btn.classList.remove('correct');
      this.btn.classList.remove('wrong');
      this.btn.classList.remove('inactive');    
    }   
  }

  const panels = [
    new Panel(),
    new Panel(),
    new Panel(),
  ];

  
  btnId.addEventListener('click',()=>{
    if (panels[0].score > 0 && panels[1].score > 0 && panels[2].score > 0){
      result.classList.remove('hidden');
      scoreLabel.textContent = `Score:${panels[0].score + panels[1].score + panels[2].score} / 15`;
    } else {
      result.classList.remove('hidden');
      scoreLabel.textContent = `3つともクリックして下さい`;
    }
    console.log(panels[0].score);
    
  });

  replay.addEventListener('click',()=>{
    result.classList.add('hidden');
    panels.forEach(panel =>{
      panel.setInitialState();  
    });
  });
}

{
  document.getElementById('addbtn').addEventListener('click',()=>{

    // Company テキストボックス
    const tdcom = document.getElementById('tdcom');
    const textcom = document.querySelector('#control1 > input');
    tdcom.textContent = textcom.value;
    textcom.value = '';


    // Prefecture プルダウンメニュー
    const tdpre = document.getElementById('tdpre');
    const textpre = document.querySelector('#control2 > select');
    tdpre.textContent = textpre.value;
    

    // Customer ラジオボタン
    const customers = document.querySelectorAll('#control3input > input');
    let selectedCustomer;
    customers.forEach(customer =>{
      if(customer.checked === true){
        selectedCustomer = customer.value;
      }
    });
    const tdcus = document.getElementById('tdcus');
    tdcus.textContent = selectedCustomer;
    customers.forEach(customer =>{
      if(customer.checked === true){
        customer.checked = false;        
      }
    });


    // System type チェックボックス
    const types = document.querySelectorAll('#control4input > input');
    const selectedTypes = [];
    types.forEach(type =>{
      if(type.checked === true){
        selectedTypes.push(type.value);
      }
    });
    const tdsys = document.getElementById('tdsys');
    tdsys.textContent = selectedTypes;
    types.forEach(type =>{
      if(type.checked === true){
        type.checked = false;        
      }
    });
  });



}