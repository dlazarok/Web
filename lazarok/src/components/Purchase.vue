<template>
  <div id="app">
    <div class="row">

      <div class="addPurchase col-sm-12 col-md-12 col-lg-6 col-xl-6" >

        <label for="typeProduct">Тип продукта</label>
        <select class="form-control" v-model="type" id="typeProduct">
          <option v-for="type1 in typesOfProducts" v-bind:key="type1.id">{{type1.type}}</option>
        </select>
        <label for="count">Количество продукта</label>
        <input class="form-control" id="count" type="text" placeholder="1" v-model="count" />
        <button class="btn btn-primary black-background" v-on:click="AddPurchase()">Добавить</button>
      </div>

      <div class="purchaseList col-sm-12 col-md-12 col-lg-6 col-xl-6">
        <h1>Список покупок</h1>
        <div class="row">
          <div class="col-2">ID</div>
          <div class="col-6">Тип</div>
          <div class="col-4">Количество</div>
        </div>
        <hr />
        <div class="row" v-for="product in purchases" v-bind:key="product.id">
          <div class="col-2">{{ product.id }}</div>
          <div class="col-6">{{ product.type }}</div>
          <div class="col-4">{{ product.count }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Purchase",
  data(){
    return{
      purchases:[],
      typesOfProducts:[],
      type:"",
      count: ""
    };
  },
  components: {},
  methods:{
    async updateData(){
      try{
        await this.$http
        .get("http://localhost:3000/types")
        .then(res => res.json())
        .then(res => (this.typesOfProducts = res) );
        await this.$http
        .get("http://localhost:3000/purchase")
        .then(res => res.json())
        .then(res => (this.purchases = res) );
      } catch(e){
        console.error(e);
      }
    },
    async AddPurchase(){
      let purchase = {
        type: this.type,
        count: this.count
      };
      try{
        await this.$http.post("http://localhost:3000/purchase", purchase);
        await this.updateData();
      } catch (e){
        console.error(e);
      }
    }
  },
  created(){
    this.updateData();
  }
}
</script>

<style scoped>

</style>