<template>
    <div class="posts" v-if="posts.length > 0">
        <Post
            :body="post.body"
            :title="post.title"
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
    components: {
        Post,
    },
};
</script>
<style scoped lang="scss">
.posts {
    margin: 0 auto;
    padding-top: 100px;
}

.emptyPosts {
    text-align: center;
    color: #c74d4d;
    padding-top: 200px;
}
</style>
