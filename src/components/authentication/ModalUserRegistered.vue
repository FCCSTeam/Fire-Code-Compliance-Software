<template>
  <div id="userRegisteredModalContainer">
    <b-modal
      id="userRegisteredModal"
      ref="userRegisteredModal"
      :static="true"
      title="Success"
      ok-variant="primary"
      ok-title="Continue"
      ok-only
    >
      <div class="text-left">
        <p>An account with the following credentials has been created</p> 
        <ul>
          <li>Email: {{creds.email}}</li>
          <li>Password: {{creds.password}}</li>
          <li>Administrator Status: {{creds.admin}} </li>
        </ul>
        <p>Provide the user with these credentials to authenticate</p> 
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "ModalUserRegistered",
  props: {
    email:{
      type: String,
      required: true
    },
    password:{
      type: String,
      required: true
    },
    admin:{
      type: Boolean,
      required: true
    }
  },
  data(){
    return {
      creds: {
        email: "",
        password: "",
        admin: false
        }
    }
  },
  methods: {
    show() {
      this.creds = JSON.parse(JSON.stringify({email: this.email, password: this.password, admin: this.admin}))
      this.$refs.userRegisteredModal.show();
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
