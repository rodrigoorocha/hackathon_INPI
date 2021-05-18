<template>
  <div id="app">
    <b-jumbotron
      align="center"    

      
      style="background-color: #1b263b"
      header="Marca coletiva"
      lead="-----     Descubra aqui se sua marca se encaixa em uma marca coletiva aaa     -----"
    >
      <b-button size="lg" variant="outline-light" to="/Quiz"
        >Iniciar teste</b-button
      >
    </b-jumbotron>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  background-color: rgb(13, 27, 42);
  font-family: "yu gothic light";
  letter-spacing: 1px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #e8e9eb;
  padding: 60px 200px 30px;
  height: 150vh;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(2em);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
</style>