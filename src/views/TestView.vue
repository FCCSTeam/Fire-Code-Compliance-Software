<template>
  <div id="TestView">
    <NavBar />
    <Modal :isCreate="true" :uniqueID="'fdfgfd1'" :recordBook="{}" :entryData="{}"/>


  </div>
</template>

<script>
// import Logout from '@/components/authentication/Logout.vue'
import NavBar from "@/components/prefabs/navbar/Navbar.vue";
import Modal from '@/components/reporteditor/modals/type2/EmergencyLighting/Modal_ELFPS_2_Weekly.vue'


export default {
  name: "TestView",
  components: {
    NavBar, Modal
  },
  methods: {

  },
  mounted(){

  }
};
</script>

<style scoped>

</style>
