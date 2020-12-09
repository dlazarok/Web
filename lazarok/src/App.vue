<template>
  <div id="app">
    <header>
      <div class="navbar navbar-expand-lg navbar-light bg-light">
        <a href="#" class="navbar-brand main-logo">
          <picture>
            <img src="./assets/logo.jpg" class="logo" alt="logo_err" srcset="./assets/logo.jpg 1980w, ./assets/logo2.png 990w"/>


          </picture>
        </a>
        <router-link class="nav-item nav-link" to="/Index">Главная</router-link>
        <router-link class="nav-item nav-link" to="/Purchase">Покупки</router-link>
      </div>
    </header>
    <main>
      <div class="container">
        <router-view>
          <mains></mains>
          <purchase></purchase>
        </router-view>
      </div>
    </main>
    <footer>
      <div class="row">

        <div class="autor col">
          <h3>Автор работы:</h3>
          <p>ФИО: Лазарок Денис Владимирович</p>
          <p>Группа: 181-361</p>
          <p>09.12.2020</p>
        </div>
        <div class="resources col">
          <a target="_blank" href="https://stackoverflow.com/questions/43839066/how-can-i-set-selected-option-selected-in-vue-js-2">Stackoverflow for-v in option</a>
        </div>

        <div class="resources col">
          <a target="_blank" href="https://getbootstrap.com>Bootstrap">Bootstrap</a>
        </div>
      </div>

    </footer>
  </div>
</template>

<script>
import Main from './components/Main.vue'
import Purchase from "@/components/Purchase";

export default {
  name: 'App',
  components: {
    mains: Main,
    purchase: Purchase,
  }
}
</script>

<style>
#app {

  font-family: 'Lora', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background-color: palegoldenrod;
}
footer{
  background-color: gray;
}
.logo{
  width: 80px;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
.logo:hover{
  border-radius: 100%;
  -webkit-transform: rotate(360deg);
  -moz-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  transform: rotate(360deg);
}
</style>
