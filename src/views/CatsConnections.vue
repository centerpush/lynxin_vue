<template>
  <div class="cats-connections">
    <div class="container">
      <h1> {{ cat.first_name }} {{ cat.family_name }}'s Followers </h1>    

        <div v-for="follower in cat.followers"> 
          <h2> {{follower.first_name}} {{follower.family_name}} </h2>
          <router-link v-bind:to="'/cats/' + follower.id">
            <img v-bind:src=" follower.profile_url ">
          </router-link>
          <!-- <div v-for="attribute in follower"> {{ attribute }} </div> -->
        </div>

    </div>
      <!-- <h2> {{ cat.followers[0].first_name }} {{ cat.followers }} </h2>   -->
  </div>
</template>

<style>
.class {
  background-color: white;
}
</style>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      cat: [],
      // first_name: "",
      // family_name: "",
      // title: "",
      // education: "",
      // experience: "",
      // location: "",
      // owner: "",
      // summary: "",
      // profile_url: "",
      // accomplishments: "",
      // endorsements: "",
      // skills: "",
      // user_id: "",
      // followers: {
      //   id: "",
      //   first_name: "",
      //   family_name: "",
      //   profile_url: ""
      // }
    };
  },
  created: function() {
    axios.get("/api/cats/" + this.$route.params.id)
    .then(response => {
      this.cat = response.data;
    });
  },
  methods: {
    
  }
};
</script>
