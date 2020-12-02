import Vue from 'vue'

export default new Vue({
    methods: {
        alterarIdade(idade){
            this.$emit('idadeMudou2', idade)
        },
        quandoIdadeMudar(callback){
            this.$on('idadeMudou2', callback)
        }

    }

})