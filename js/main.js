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
    currentImg : 0
  },
  methods:{
    slideNext: function(){
      if(this.currentImg === this.imgSrc.length - 1){
        this.currentImg = 0;
      } else {
        this.currentImg++
      };
    },
    slidePrev: function(){
      if(this.currentImg === 0){
        this.currentImg = this.imgSrc.length - 1;
      } else {
        this.currentImg--;
      }
    }
  }
});
