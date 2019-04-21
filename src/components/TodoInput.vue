<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">경고!</h3>
      <div slot="body">아무고또 입력안했쬬?</div>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';

export default {
  data(){
    return {
      newTodoItem : "",
      showModal: false
    }
  },            
  methods: { 
    addTodo(){
      if(this.newTodoItem.trim() !== ''){
        this.$store.commit('addOneItem', this.newTodoItem);
        this.clearInput();
      }else{
        this.showModal = !this.showModal;
      }
    },
    clearInput(){
      this.newTodoItem = "";
    }
  },
  components: {
    Modal
  }
}
</script>

<style scoped>
  input{
    width:calc(100% - 3rem); 
    height:100%;
    box-sizing:border-box;
    padding:0 1rem;
  }
  input:focus{
      outline:none;
  }
  .inputBox{
      background:#fff;
      height:50px;
      line-height:50px;
      border-radius:5px;
  }
  .inputBox input{
      border-style:none;
      font-size:.9rem;
  }
  .addContainer{
      float:right;
      background:linear-gradient(to right, #6478fb, #8763fb);
      display:block;
      width:3rem;
      border-radius:0 5px 5px 0;
  }
  .addBtn{
      color:#fff;
      vertical-align:middle;
  }

</style>
