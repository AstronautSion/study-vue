<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
        <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleOneItem({todoItem, index})"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
        <span class="removeBtn" v-on:click="removeOneItem({todoItem, index})">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  methods:{
    ...mapMutations(['removeOneItem','toggleOneItem'])
  },
  computed:{
    ...mapGetters(['storedTodoItems'])
  }
}
</script>

<style scoped>
  ul{
    list-style-type:none;
    padding-left:0px;
    margin-top:0;
    text-align:left; 
  }
  li{
    display:flex;
    min-height:50px;
    height:50px;
    line-height:50px;
    margin:.5rem 0;
    padding:0 .9rem;
    background:#fff;
    border-radius:5px;
  }
  .checkBtn{
    line-height:45px;
    color:#62acde;
    margin-right:5px;
  }
  .checkBtnCompleted{
    color:#b3adad;
  }
  .textCompleted{
    text-decoration:line-through;
    color:#b3adad;
  }
  .removeBtn{
    margin-left:auto;
    color:#de4343;
  }
  .todoList{transition:all .1s;}
  /* list input transition */
  .list-enter-active, 
  .list-leave-active {
    transition: all 1s;
  }
  .list-enter, 
  .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
