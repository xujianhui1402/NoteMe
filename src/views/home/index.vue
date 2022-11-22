<template>
  <div class="app-main">
    <div>
      <cell-group>
        <field v-model="docValue" label="Doc" placeholder="please input doc" show-word-limit maxlength="1000" type="textarea" clearable/>
        <Button @click="noteDoc">Save</Button>
      </cell-group>
    </div>
    <grid class="bottom-menu">
      <grid-item><span>Home</span></grid-item>
      <grid-item><span>Menu1</span></grid-item>
      <grid-item><span>Menu2</span></grid-item>
      <grid-item><span>Menu3</span></grid-item>
    </grid>
  </div>
</template>

<script>
import SystemService from "@/common/systemService";
import { Grid, GridItem, Button, Field, CellGroup } from 'vant';
export default {
  name: "homeIndex",
  components:{
    Grid, GridItem, Button, Field, CellGroup
  },
  data(){
    return{
      service: SystemService,
      docValue: null,
    }
  },
  mounted() {
    this.service.init()
    let valueName = window.btoa('NoteMeData')
    this.docValue = localStorage.getItem(valueName)
  },
  methods:{
    /**
     * note doc
     */
    noteDoc(){
      this.service.saveDoc(this.docValue)
    }
  }
}
</script>

<style lang="less" scoped>
.app-main{
  width: 100%;
  height: 100%;
  display: flex;
  .bottom-menu{
    position: absolute;
    bottom:0;
    height: 50px;
    width: 100%;
  }
}
</style>