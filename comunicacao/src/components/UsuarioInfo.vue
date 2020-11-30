<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>{{ inverteNome() }}</p>
        <p>Idade do Usuário <strong>{{idade}}</strong></p>
        <button @click="reiniciarNome">Reiniciar nome</button>
        <button @click="propFunction()">Reniciar nome Callback</button>
    </div>
</template>

<script>
export default {
    props: {
        nome: {
            type: String,
            default:'Anônimo'
        },
        idade: Number,
        propFunction: Function
    },

    data(){
        return {

        }
    },
    methods:{
        inverteNome(){
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome(){
            this.nome = 'Rafael'
            this.$emit('nomeMudou', this.nome)
        }
    }
    
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
