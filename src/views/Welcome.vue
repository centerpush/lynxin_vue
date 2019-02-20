<template>
  <div class="welcome">

    <div>
      <form>
      <h1>Sign Up</h1>
        <p>Find your own definition of success with help from an inspiring professional cat community</p>
        <div>
        Email: <input type="text" v-model="newUserEmail">
        </div>
        <div>
        Password: <input type="text" v-model="newUserPassword">
        </div>
        <div>
        Confirm password: <input type="text" v-model="newUserPasswordVerification">
        </div>
        <input type="submit" value="Join">
      </form>
    </div>

  </div>
</template>

<style>
  
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      newUserEmail: "",
      newUserPassword: "",
      newUserPasswordVerification: ""
    };
  },
  created: function() {},
  methods: {}
};
</script>