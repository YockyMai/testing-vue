<template>
	<post-form @create="createPost" />
	<!--  @create - подписываемся на событие, описанное в родительском компоненте с помошью $emit (излучать)  -->
	<post-list :posts="posts" />
	<!--  v-bind:posts alternative :posts  -->
</template>

<script>
import PostList from '@/components/PostList.vue'; // " @ " - src
import PostForm from './components/PostForm.vue';
export default {
	components: { PostList, PostForm },
	data() {
		// модель vue
		return {
			posts: [
				{
					id: 1,
					title: 'Qweqqqweeqwqwewe',
					body: 'Post1',
					likes: 0,
					dislike: 1,
				},
				{ id: 2, title: 'zxczxc', body: 'Post2', likes: 4, dislike: 0 },
				{ id: 3, title: 'Ghoul', body: 'Post3', likes: 1, dislike: 0 },
			],
			title: '',
			body: '',
		};
	},
	methods: {
		createPost(title, body) {
			let post = {
				id: this.posts.length + 1,
				title,
				body,
				likes: 0,
				dislike: 0,
			};
			this.posts.unshift(post);
		},
	},
};
</script>

<style lang="scss">
body {
	background-color: rgb(246, 246, 255);
}
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
</style>
