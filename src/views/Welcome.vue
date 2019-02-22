<template>
  <div class="welcome">

    <div class="form">
      <form>
      <h1>Sign Up</h1>
        <p>Find your own definition of success with help from an inspiring professional cat community</p>
        <div>
        <input type="text" v-model="newUserEmail" placeholder="Email">
        </div>
        <div>
        <input type="text" v-model="newUserPassword" placeholder="Pawsword">
        </div>
        <div>
        <input type="text" v-model="newUserPasswordVerification" placeholder="Confirm Pawsword">
        </div>
        <input type="submit" value="Join">
      </form>
      <!-- <form>
        <h1>Login</h1>
        <div>
          <input type="text" v-model="userEmail" placeholder="Email">
        </div>
        <div>
        <input type="text" v-model="userPassword" placeholder="Pawsword">
        </div>
        <input type="submit" value="Login">
      </form> -->
    </div>

  </div>
</template>

<style>
.form{

padding-top: 50px;
}
h1{
  text-align: center;
}
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