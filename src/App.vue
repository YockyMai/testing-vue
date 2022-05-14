<template>
    <post-form @create="createPost"/>
    <!--  @create - подписываемся на событие, описанное в родительском компоненте с помошью $emit (излучать)  -->
    <post-list @remove="removeItem" :posts="posts"/>
    <!--  v-bind:posts alternative :posts  -->
</template>

<script>
import PostList from "@/components/PostList.vue"; // " @ " - src
import PostForm from "./components/PostForm.vue";
import axios from "axios";

export default {
    components: {PostList, PostForm},
    data() {
        // модель vue
        return {
            posts: [],
            title: "",
            body: "",
        };
    },
    created() {
        this.fetchPosts();
    },
    methods: {
        createPost(title, body) {
            let post = {
                id: this.posts.length + 1,
                title,
                body,
            };
            this.posts.unshift(post);
        },
        removeItem(index) {
            this.posts = this.posts.filter((el) => el.id !== index);
        },
        async fetchPosts() {
            await axios
                .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
                .then((res) => {
                    this.posts = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    computed: {},
};
</script>

<style lang="scss">
body {
    @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
    font-family: "Quicksand", sans-serif;
    background-color: #202031ff;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    color: #fff;
}
</style>
