<template>
  <div id="passwordChangedModalContainer">
    <b-modal
      id="passwordChangedModal"
      ref="passwordChangedModal"
      title="Success"
      ok-variant="primary"
      ok-title="Continue"
      ok-only
    >
      <div class="text-left">
        <p>Your password has been successfully changed</p>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "ModalPasswordChanged",
  methods: {
    show() {
      this.$refs.passwordChangedModal.show();
    },
    handleOk(bvModalEvt) {
    },
  },
};
</script>

<style>
.form-text{
  font-size: 90%;
}
</style>
