<template>
  <div class="About">
    <h2 class="About__title">Информация о странице</h2>
    <p class="About__subtitle">Сайт разработан в целях приобретения навыков по Vue</p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.About {
	min-height: calc(100vh - 50px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.About__title {
	font-size: 24px;
	line-height: 32px;
	font-weight: 600;
}

.About__subtitle {
	font-size: 14px;
	line-height: 22px;
}
</style>