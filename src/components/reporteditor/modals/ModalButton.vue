<template>
  <b-button variant="outline-primary" class="my-2 ml-3" @click="showModal"
    ><b-icon icon="pencil-square"></b-icon
  ></b-button>
</template>

<script>
export default {
    methods : {
        showModal() {
            this.$emit("trigger")
        }
    }
};
</script>

<style>
</style>