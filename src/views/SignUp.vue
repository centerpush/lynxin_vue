<template>
  <div class="sign-up">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h2>We're in it together, you know, when we feel like it</h2>
        <p>Find your own definition of success with help from an inspiring professional feline community</p>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Name:</label> 
          <input type="text" class="form-control" v-model="name">
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <div class="form-group">
          <label>Password confirmation:</label>
          <input type="password" class="form-control" v-model="passwordConfirmation">
        </div>
        <input type="submit" class="btn btn-primary" value="Join">
      </form>
    </div>
  </div>
</template>

<style>
  h2{
    text-align: center;
    padding-bottom: 10px;
  }
  p{
    text-align: center;
  }
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
            errors: []
          };
        },
        methods: {
          submit: function() {
            var params = {
              name: this.name,
              email: this.email,
              password: this.password,
              password_confirmation: this.passwordConfirmation
            };
            axios
              .post("/api/users", params)
              .then(response => {
                this.$router.push("/login");
              })
              .catch(error => {
                this.errors = error.response.data.errors;
              });
          }
        }
      };
      </script>