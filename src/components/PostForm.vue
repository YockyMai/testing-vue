<template>
	<div class="create-post">
		<form @submit.prevent>
			<h2>Создай пост</h2>
			<input
				v-bind:value="title"
				@input="title = $event.target.value"
				type="text"
				placeholder="Название поста"
			/>
			<input v-model="body" type="text" placeholder="Описание поста" />
			<!-- v-model делает автоматическое двусторонее свзяывание с моделью -->
			<my-button @click="createPost"> Создать пост </my-button>
		</form>
	</div>
</template>
<script>
import MyButton from './UI/MyButton.vue';
export default {
	components: { MyButton },
	data() {
		return {
			title: '',
			body: '',
		};
	},
	methods: {
		createPost() {
			if ((this.title.length && this.body.length) > 0) {
				this.$emit('create', this.title, this.body); // 1 param - name a function , next params - yours date
				this.title = '';
				this.body = '';
			} else {
				alert('Заполните все поля');
			}
		},
	},
};
</script>
<style scoped lang="scss">
.create-post {
	position: fixed;
	width: 100%;
	background-color: rgb(127, 126, 219);
	height: 150px;
	display: flex;
	align-items: center;
	form {
		h2 {
			text-align: center;
		}
		input {
			display: block;
			margin-bottom: 10px;
		}
		margin: 0 auto;

		width: max-content;
	}
}
</style>
