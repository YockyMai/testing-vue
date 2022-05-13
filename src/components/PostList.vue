<template>
  <div class="posts" v-if="posts.length > 0">
    <Post
      :body="post.body"
      :dislike="post.dislike"
      :likes="post.likes"
      :title="post.title"
      :Like="Like"
      :Dislikes="Dislikes"
      :index="index"
      :key="post.id"
      v-for="(post, index) in posts"
      @remove="this.$emit('remove', post.id)"
    />
  </div>
  <h1 v-else-if="posts.length <= 0" class="emptyPosts">Список постов пуст</h1>
</template>
<script>
import Post from "./Post.vue";
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
  },
  methods: {
    Like(index) {
      return (this.posts[index].likes += 1);
    },
    Dislikes(index) {
      const count = 0;
      count < 1 && (this.posts[index].dislike += 1);
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
  padding-top: 200px;
}
.emptyPosts {
  text-align: center;
  color: #c74d4d;
  padding-top: 200px;
}
</style>
