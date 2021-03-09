<template>
<div>
    <Navbar />
</div>
</template>

<script>
import Navbar from "@/components/prefabs/navbar/Navbar.vue";
import { getFile } from "@/js/auth/data/storeFile.js";

export default {
    name: "ReportEditor",
    components: {Navbar},
  data() {
    return {

    };
  },
  //mounted to set local/storage with file
  //use computed to return something from method --> get file from local storage
  mounted()
  {

  },
  computed()
  {
     
  },
  methods: 
  {
      
  }



}
</script>

<style>

</style>