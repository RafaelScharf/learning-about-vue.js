* * * * *

Esse é nosso hello word
-----------------------

Primero precisamos instanciar o Vue com o código abaixo: \
`const app = new Vue({ })`

Agora criamos nosso objetos dentro da instacia do vue \
`const app = new Vue({ data: { }, methods: {  } })`

Utilizando esses objetos do **vue** podemos criar obejtos e funções que
retornem um valor no html com a interpolação veja: \
 No **data** por exemplo podemos guardar objetos dentro dele: \

`const app = new Vue({ data: { message: 'Hello Vue!' }, methods: { } })`
\
 já no **methos** pode criar funções que nos retorne uma string: \
`const app = new Vue({ data: { }, methods: { helloWord() {         return this.message = 'Olá VUE JS'       } } })`

{{ helloWord() }}
