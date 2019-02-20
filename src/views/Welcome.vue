<template>
  <div class="welcome">

    <div>
      <form>
      <h1>Sign Up</h1>
        <p>Find your own definition of success with help from an inspiring professional cat community</p>
        <div>
        <input type="text" v-model="newUserEmail" placeholder="Email">
        </div>
        <div>
        <input type="text" v-model="newUserPassword" placeholder="Password">
        </div>
        <div>
        <input type="text" v-model="newUserPasswordVerification" placeholder="Confirm Password">
        </div>
        <input type="submit" value="Join">
      </form>
      <form>
        <h1>Login</h1>
        <div>
          <input type="text" v-model="userEmail" placeholder="Email">
        </div>
        <div>
        <input type="text" v-model="userPassword" placeholder="Password">
        </div>
        <input type="submit" value="Login">
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
      newUserPasswordVerification: "",
      userEmail: "",
      userPassword: ""
    };
  },
  created: function() {},
  methods: {}
};
</script>