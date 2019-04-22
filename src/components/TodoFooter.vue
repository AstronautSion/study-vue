<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn" v-on:click="clearAllItem">Clear All</span>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['clearAllItem'])
  }
}
</script>

<style scoped>
.clearAllContainer{
    width:8.5rem;
    height:50px;
    line-height:50px;
    background-color:#fff;
    border-radius:5px;
    margin:0 auto;
}
.clearAllBtn{
    color:#e20303;
    display:block;
    cursor:pointer;
}

</style>
