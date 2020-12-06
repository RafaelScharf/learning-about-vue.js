const vue =  new Vue({

  el: '#desafio',
  data: {
    nome: 'Rafael Klein Scharf!',
    idade: '21',
    img: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
  },
  methods: {
    randomNumber: function(){
      return Math.random()
    }
  }

 }) 