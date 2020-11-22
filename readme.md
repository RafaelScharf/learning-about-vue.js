* * * * *

Esse é nosso hello word
-----------------------

####Veja o arquivo helloWord.html 

Primero precisamos instanciar o Vue com o código abaixo: \
>`const app = new Vue({ })`

Agora criamos nosso objetos dentro da instacia do vue \
>`const app = new Vue({ data: { }, methods: {  } })`

Utilizando esses objetos do **vue** podemos criar obejtos e funções que
retornem um valor no html com a interpolação veja: \
 No **data** por exemplo podemos guardar objetos dentro dele: \
>`const app = new Vue({ data: { message: 'Hello Vue!' }, methods: { } })`
\

>Interpolação é a forma que exibimos nossos valores de objetos e funções no HTML usando as 
{{ objetct }} \

 já no **methos** pode criar funções que nos retorne uma string: \
>`const app = new Vue({ data: { }, methods: { helloWord() {         return this.message = 'Olá VUE JS'       } } })`


```html
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>

<div id="app">
  <p v-once>{{ message }}</p> 
  <p>{{ helloWord() }}</p> 
</div>

<script>
  const app = new Vue({
    el: "#app",
    data: {
      message: "Hello Vue!",
    },
    methods: {
      helloWord() {
        return this.message = 'Ola VUE JS'
      }
      
    },
  });
</script>
```
