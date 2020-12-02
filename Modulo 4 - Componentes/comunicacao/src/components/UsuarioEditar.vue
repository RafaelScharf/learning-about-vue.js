<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do Usuário <strong>{{idade}}</strong></p>
        <button @click="alterarIdade">Alterar idade</button>
        <button @click="alterarIdade2">Alterar idade (Barramento)</button>
    </div>
</template>

<script>
import barramento from "@/barramento";
export default {

    props: {
        idade: Number,
    },
    methods: {
        alterarIdade(){
            this.idade  += 1
            this.$emit('idadeMudou', this.idade)
        },
        alterarIdade2(){
            this.idade  += 2
            barramento.alterarIdade(this.idade)
        }
    },
    created(){
       
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
