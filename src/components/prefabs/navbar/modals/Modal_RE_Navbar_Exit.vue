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
      ok-title="Exit to Home Screen"
      ok-variant="primary"
      @ok="handleOk"
    >
    <span class="text-danger">Unsaved changes will be lost!</span><br>
    <div class="text-secondary mt-2">Ensure all changes are saved to the cloud by clicking the save icon! </div>
    </b-modal>
  </div>
</template>

<script>
export default {
    methods : {
        handleOk(){
            this.$router.replace({ name: "Userpage" });
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