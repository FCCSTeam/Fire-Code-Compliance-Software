<template>
<div>
    <Navbar />
    <Sidemenu />

</div>
</template>

<script>
import Navbar from "@/components/prefabs/navbar/Navbar.vue";
import { getFileContent, getFileId } from "@/js/auth/data/storeFile.js";
import Sidemenu from "@/components/reporteditor/sidemenu/Sidemenu.vue"

export default {
    name: "ReportEditor",
    components: {Navbar, Sidemenu},
  // data() {
  //   return {
  //       //reportFile: getFileContent()

  //   };
  // },
  mounted()
  {
      console.log(getFileContent())
      console.log(getFileId())

  },
  //TODO:
  //saving (patching) edited file to google drive, sending file ID to allow patching
  methods: 
  {

  }



}
</script>

<style>

</style>