<template>
  <div id="TestView">
    <NavBar />
    <b-button @click="showModalType1Monthly" >Click me</b-button>
    <ModalMonthly :uniqueID="'key1'" />
  </div>
</template>

<script>
// import Logout from '@/components/authentication/Logout.vue'
import NavBar from "@/components/prefabs/navbar/Navbar.vue";
import ModalMonthly from "@/components/reporteditor/modals/type1/ModalMonthly.vue"

export default {
  name: "TestView",
  components: {
    NavBar,
    ModalMonthly
  },
  methods: {
    showModalType1Monthly() {
      this.$refs.modalType1Monthly.show();
    },
  },
  mounted(){
      //this.showModalType1Monthly();
  }
};
</script>

<style scoped>

</style>
