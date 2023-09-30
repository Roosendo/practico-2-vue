<template>
  <section class="sidebar" :class="{ 'activo': sidebarActivo }">
    <div class="icono-hamburguesa" @click="toggleSidebar">
      <IconHbgMenu />
    </div>
    <img
      v-if="sidebarActivo"
      class="imagen-perfil"
      src="@/assets/yo.webp"
      alt="It should be me!"
    />
    <div v-if="sidebarActivo" class="nombre-usuario">{{ nombreUsuario }}</div>
    <div class="opcion-menu" v-for="opcion in opcionesMenu" :key="opcion.texto">
      <component :is="opcion.icono" #icon></component>
      <span v-if="sidebarActivo">{{ opcion.texto }}</span>
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
  background-color: #333;
  color: #fff;
  transition: width 0.3s;
  overflow: hidden;
}

.sidebar.activo {
  widows: 250px;
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
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 20px auto;
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
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.opcion-menu svg {
  margin-right: 10px;
}
</style>