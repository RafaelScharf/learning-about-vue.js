<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Nome é: {{ nome }}</p>
        <p>Idade é: <strong>{{idade}}</strong></p>
        <button @click="alteraNome">Alterar nome</button>
        <hr>
        <div class="componentes">
            <app-usuario-info 
                :nome="nome" 
                :idade="idade"
                @nomeMudou="nome = $event"
                :propFunction="reiniciarNome"
            />
            <app-usuario-editar 
                :idade="idade" 
                @idadeMudou="idade = $event"
            />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
      data(){
        return {
            nome: '',
            idade: 21,
            nome1: 'Rafael',
            nome2: 'Rafael Klein Scharf'
        }
    },
    methods: {
        alteraNome(){
            this.nome == 'Rafael'
            ? this.nome = this.nome2
            : this.nome = this.nome1
        },
        reiniciarNome(){
            this.nome = 'Rafael'
            
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
