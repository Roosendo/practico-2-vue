<template>
  <section class="sidebar" :class="{ 'activo': sidebarActivo }">
    <div class="icono-hamburguesa" @click="toggleSidebar">
      <IconHbgMenu />
    </div>
    <div>
      <img
        class="imagen-perfil"
        :class="{ 'show': sidebarActivo }"
        src="@/assets/yo.webp"
        alt="It should be me!"
      />
      <div v-if="sidebarActivo" class="nombre-usuario">{{ nombreUsuario }}</div>
    </div>
    <div>
      <div class="opcion-menu" v-for="opcion in opcionesMenu" :key="opcion.texto">
        <component :is="opcion.icono" #icon></component>
        <span v-if="sidebarActivo">{{ opcion.texto }}</span>
      </div>
    </div>
  </section>
</template>

<script>
import IconHbgMenu from './icons/IconHbgMenu.vue'
import IconHome from './icons/IconHome.vue'
import IconReport from './icons/IconReport.vue'
import IconFire from './icons/IconFire.vue'

export default {
  props: {
    nombreUsuario: String
  },
  data() {
    return {
      sidebarActivo: false,
      opcionesMenu: [
        { icono: IconHome, texto: 'Home' },
        { icono: IconReport, texto: 'Reportes' },
        { icono: IconFire, texto: 'About' }
      ]
    }
  },
  components: {
    IconHbgMenu,
    IconHome,
    IconReport,
    IconFire
  },
  methods: {
    toggleSidebar() {
      this.sidebarActivo = !this.sidebarActivo
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 60px;
  height: 100vh;
  background-color: #333;
  color: #fff;
  transition: 0.3s ease;
  overflow: hidden;
  display: grid;
}

.sidebar.activo {
  width: 200px;
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

.opcion-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
  transition: 0.2s ease;
}

.sidebar.activo .opcion-menu {
  justify-content: flex-start;
  margin-left: 7px;
}

.sidebar.activo .opcion-menu:hover svg {
  transform: scale(1.075);
}
.sidebar.activo .opcion-menu svg {
  margin-right: 10px;
}
</style>