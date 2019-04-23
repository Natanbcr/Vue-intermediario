<template>
    <div class="new-task">
        <input v-model="name" @keydown.enter="add" type="text"
        class="form-element" placeholder="Nova tarefa?">
        <button class="form-element" @click="add">+</button>
    </div>
</template>

<script>
export default {
     data() { 
         return {
             name: ''
         }
     },
     methods: {
         add() {
             this.$emit('taskAdded', { name: this.name})
             this.name = ''
             }
         }
     }

</script>

<style>
   .new-task { 
       margin: 35px;
   }


   .form-element {
       outline: none;
       font-size: 1.5rem;
       border: 2px solid rgb(214, 204, 204);
       padding: 5px 10px 7px;
       color: #FFF;
   }

   input.form-element {
       width: 500px;
       background: #FFF2;
       border-top-left-radius: 8px;
       border-bottom-left-radius: 8px;
   }

   button.form-element {
       border-left: none;
       background-color: #2196F3;
       border-top-right-radius: 8px;
       border-bottom-right-radius: 8px;
   }
</style>
