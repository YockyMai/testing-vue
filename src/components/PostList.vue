<template>
	<div class="posts">
		<Post
			:body="post.body"
			:dislike="post.dislike"
			:likes="post.likes"
			:title="post.title"
			:Like="Like"
			:Dislikes="Dislikes"
			:DeletePost="DeletePost"
			:index="index"
			:key="post.id"
			v-for="(post, index) in posts"
		/>
	</div>
</template>
<script>
import Post from './Post.vue';
export default {
	props: {
		posts: {
			require: true,
			type: Array,
		},
	},
	data() {
		return {};
	},
	created() {
		console.log(this.posts);
		console.log(this.Like);
	},
	methods: {
		Like(index) {
			return (this.posts[index].likes += 1);
		},
		Dislikes(index) {
			const count = 0;
			count < 1 && (this.posts[index].dislike += 1);
		},
		DeletePost(index) {
      return this.posts.splice(index, 1);
		},
	},
	components: {
		Post,
	},
};
</script>
<style scoped lang="scss">
.posts {
	margin: 0 auto;
	padding-top: 130px;
}
</style>
