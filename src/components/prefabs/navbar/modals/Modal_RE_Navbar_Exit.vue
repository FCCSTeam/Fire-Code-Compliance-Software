<template>
  <div id="modal-re-navbar-exit-container">
      <div @click="$refs[getUniqueID].show()">
        <b-button class="px-4 py-2" variant="outline-primary">Exit Editor</b-button>
      </div>
    <b-modal
      :ref="getUniqueID"
      size="md"
      :static="true"
      title="Exit Report Editor?"
      ok-title="Exit"
      ok-variant="primary"
      @ok="handleOk"
    >
    <p class="text-danger">Unsaved changes will be lost!</p>
    </b-modal>
  </div>
</template>

<script>
export default {
    methods : {
        handleOk(){
            this.$router.replace({ name: "Home" });
        }
    },
    computed : {
        getUniqueID(){
            return "modal-re-navbar-exit"
        }
    }
};
</script>

<style>
</style>