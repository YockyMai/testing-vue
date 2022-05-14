<template lang="html">
    <div class="post">
        <div class="post__header">
            <h1>{{ title }}</h1>
        </div>
        <p>{{ body }}</p>
        <div class="post__btnBlock">
            <MyButton :red="true" @click="$emit('remove')"> Delete</MyButton>
        </div>
    </div>
</template>
<script>
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
        DeletePost: {
            type: Function,
            require: true,
        },
        index: {
            type: Number,
            require: true,
        },
    },
};
</script>
<style lang="scss">
.post {
    margin: 0 auto 15px auto;
    background-color: rgba(98, 98, 121, 0.8);
    border-radius: 1em;
    padding: 30px;
    width: 60%;
    
    h1,
    h3,
    p {
        padding-bottom: 10px;
    }
    
    .post__btnBlock {
        button {
            margin-right: 10px;
        }
    }
}
</style>
