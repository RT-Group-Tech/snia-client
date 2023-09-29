<template>
  <div>
    <div class="form-group form-group-default">
      <span v-if="disableState" style="cursor: pointer;" @click="enableEdit()" class="fa fa-pencil-alt pull-right"></span>
      <span v-else style="cursor: pointer;" @click="updateValue()" class="fa fa-check pull-right"></span>
      <label >{{label}}</label>
      <input type="text" :disabled="disableState" class="form-control" name="name"
             :placeholder="placeholder"  v-model="inputValue">
    </div>
  </div>
</template>

<script>
export default {
  name: "input",
  data(){
    return {
      disableState:true,
      inputValue:this.val
    };
  },
  props:{
    label:String,
    agentId:Number,
    inputName:String,
    val:String,
    placeholder:String,
    disabled:{
      type:Boolean,
      default:true
    },
    mounted() {
      //this.disabled=true
    }
  },
  methods:{
    enableEdit(){
      this.disableState=false;
    },
    updateValue(){
      console.log("update value...");
      console.log(this.agentId)
      console.log(this.inputName);
      console.log(this.inputValue);

      /**
       * Make server request.
       */

      this.disableState=true;
    }
  },
  watch:{
    disable(newVal){
      console.log("disable changed to :"+newVal);
    }
  }
}
</script>

<style scoped>

</style>