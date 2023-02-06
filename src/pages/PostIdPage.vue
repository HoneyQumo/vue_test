<template>
	<div class="PostIdPage">
		<h1 class="PostIdPage__title">Это страница поста с ID = {{ $route.params.id }}</h1>
	</div>
</template>

<script>
export default {
	name: 'PostIdPage',
}
</script>

<style scoped>
.PostIdPage {
	text-align: center;
}

.PostIdPage__title {
	font-size: 24px;
	line-height: 32px;
	font-weight: 600;
}

</style>