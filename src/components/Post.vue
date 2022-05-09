<template lang="html">
	<div class="post">
		<div class="post__header">
			<h1>{{ title }}</h1>
		</div>
		<p>{{ body }}</p>
		<div class="post__btnBlock">
			<my-button @click="Like(index)"> Like : {{ likes }} </my-button>
			<my-button @click="Dislikes(index)">
				Dislike : {{ dislike }}
			</my-button>
			<my-button @click="DeletePost(index)">Delete</my-button>
		</div>
	</div>
</template>
<script>
import MyButton from './UI/MyButton.vue';
export default {
	props: {
		title: {
			type: String,
			require: true,
		},
		body: {
			type: String,
			require: true,
		},
		likes: {
			type: Number,
			require: true,
		},
		dislike: {
			type: Number,
			require: true,
		},
		Like: {
			type: Function,
			require: true,
		},
		Dislikes: {
			type: Function,
			require: true,
		},
		DeletePost: {
			type: Function,
			require: true,
		},
		index: {
			type: Number,
			require: true,
		},
	},
	components: { MyButton },
};
</script>
<style lang="scss">
.post {
	margin: 0 auto 15px auto;
	border: 2px solid rgb(127, 126, 219);
	background-color: rgba(141, 138, 216, 0.801);
	border-radius: 1em;
	padding: 30px;
	width: fit-content;
	h1,
	h3 {
		font-weight: 500;
	}
	.post__btnBlock {
		button {
			margin-right: 10px;
		}
	}
}
</style>
