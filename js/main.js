/*
Creare con Vue uno slider che permetta di:
 - Scorrere le immagini tramite appositi bottoni
 - Selezionare una immagine tra quelle disponibili
*/

const myApp = new Vue({
  el: '#root',
  data:{
    imgSrc: [
      'img/image1.jpg',
      'img/image2.jpg',
      'img/image3.jpg',
      'img/image4.jpg'
    ],
    counter : 0,

  },
  methods:{
    slideNext: function(){
      if(this.counter === this.imgSrc.length - 1){
        this.counter = 0;
      } else {
        this.counter++
      };
    },
    slidePrev: function(){
      if(this.counter === 0){
        this.counter = this.imgSrc.length - 1;
      } else {
        this.counter--;
      }
    },
  }
});
