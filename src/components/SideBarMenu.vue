<template>
  <!-- se agrega la clase activo solo si sidebarActivo es true -->
  <section class="sidebar" :class="{ 'activo': sidebarActivo }">
    <div class="icono-hamburguesa" @click="toggleSidebar"> <!-- se agrega el evento click -->
      <IconHbgMenu />
    </div>
    <div>
      <img
        class="imagen-perfil"
        :class="{ 'show': sidebarActivo }"
        src="@/assets/yo.webp"
        alt="It should be me!"
      /> <!-- se agrega la clase show solo si sidebarActivo es true -->
      <div v-if="sidebarActivo" class="nombre-usuario">{{ nombreUsuario }}</div>
    </div>
    <div class="container-icons"> <!-- contenedor de los iconos -->
      <!-- estructura de cada icono con su svg y texto
      reactivo dependiendo de sidebarActivo
      router-link es para las rutas, teniendo el 'to' para saber a donde redirigir -->
      <router-link to="/" class="opcion-menu" :class="{ 'active': sidebarActivo }">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
          <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
          <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
        </svg>
        <span v-if="sidebarActivo">Home</span> <!-- se agrega el texto solo si sidebarActivo es true -->
      </router-link>
      <router-link to="/reports" class="opcion-menu" :class="{ 'active': sidebarActivo }">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-report" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697"></path>
          <path d="M18 14v4h4"></path>
          <path d="M18 11v-4a2 2 0 0 0 -2 -2h-2"></path>
          <path d="M8 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
          <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
          <path d="M8 11h4"></path>
          <path d="M8 15h3"></path>
        </svg>
        <span v-if="sidebarActivo">Reports</span>
      </router-link>
      <router-link to="/about" class="opcion-menu" :class="{ 'active': sidebarActivo }">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-flame" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z"></path>
        </svg>
        <span v-if="sidebarActivo">About</span>
      </router-link>
    </div>
  </section>
</template>

<script>
import { RouterLink } from 'vue-router' // se importa RouterLink para las rutas
import IconHbgMenu from './icons/IconHbgMenu.vue'

export default {
  props: {
    nombreUsuario: String
  },
  data() {
    return {
      sidebarActivo: false // se agrega la variable sidebarActivo
    }
  },
  components: {
    IconHbgMenu // se agrega el componente IconHbgMenu
  },
  methods: {
    toggleSidebar() {
      this.sidebarActivo = !this.sidebarActivo
    } // se agrega el metodo toggleSidebar, que con matematica booleana maneja el cambio a true o false
  }
}
</script>

<style scoped>
.sidebar {
  width: calc(100vw - 95vw);
  min-width: 60px;
  height: 100vh;
  background-color: #333;
  color: #fff;
  transition: 0.3s ease;
  overflow: hidden;
  display: grid;
}

.sidebar.activo {
  width: calc(100vw - 85vw);
  min-width: 150px;
}

.sidebar.activo .icono-hamburguesa {
  justify-content: right;
}

.icono-hamburguesa {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  padding: 10px;
}

.imagen-perfil {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 20px auto;
  display: block;
}

.imagen-perfil.show {
  width: 100px;
  height: 100px;
  display: block;
}

.nombre-usuario {
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
}

.container-icons {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
}

.opcion-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 15px);
  border-radius: 11px;
  padding: 10px;
  cursor: pointer;
  transition: 0.2s ease;
}

.sidebar.activo .opcion-menu {
  justify-content: flex-start;
}


.sidebar.activo .opcion-menu.active:hover {
  background-color: #444;
}
.sidebar.activo .opcion-menu:hover svg {
  transform: scale(1.07);
}
.sidebar.activo .opcion-menu svg {
  margin-right: 10px;
}
</style>