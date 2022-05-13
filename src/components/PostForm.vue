<template>
  <div class="create-post">
    <MyModal @closeModal="modalVisible = false" :modalVisible="modalVisible">
      <h2>Создай пост</h2>
      <MyInput v-model="title" type="text" placeholder="Название поста" />
      <MyInput v-model="body" type="text" placeholder="Описание поста" />
      <!-- v-model делает автоматическое двусторонее свзяывание с моделью -->
      <MyButton @click="createPost"> Создать пост </MyButton>
    </MyModal>
    <MyButton @click="modalVisible = !modalVisible"> Создать пост </MyButton>
  </div>
</template>
<script>
import MyModal from "@/components/UI/MyModal";
import MyButton from "@/components/UI/MyButton";
export default {
  components: { MyButton, MyModal },
  data() {
    return {
      title: "",
      body: "",
      modalVisible: false,
    };
  },
  methods: {
    createPost() {
      if ((this.title.length && this.body.length) > 0) {
        this.$emit("create", this.title, this.body); // 1 param - name a function , next params - yours date
        this.title = "";
        this.body = "";
        this.modalVisible = !this.modalVisible;
      } else {
        alert("Заполните все поля");
      }
    },
  },
};
</script>
<style scoped lang="scss">
.create-post {
  h2 {
    color: #292d3e;
    padding-bottom: 10px;
  }
  position: fixed;
  width: 100%;
  background-color: rgb(40, 40, 72);
  height: 50px;
  display: flex;
  align-items: center;
}
</style>
