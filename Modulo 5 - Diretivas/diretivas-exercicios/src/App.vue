<template>
	<div id="app">
		<h1>Diretivas</h1>
		<p v-text="'Usando v-text'" ></p>
		<p v-html="'Usando <b>v-html</b>'" ></p>
		<p v-destaque:fundo.atrasar="'red'">Primeira diretiva personalizada</p>
		<p v-destaque="'red'">Segunda com argumento diretiva personalizada</p>
	</div>
</template>

<script>
export default {
	
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
