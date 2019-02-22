<template>
  <div class="cats-connections">
      <h1> {{ cat.first_name }} {{ cat.family_name }}'s Followers </h1>    

      <ul>
        <li v-for="follower in cat.followers"> {{follower}} </li>
      </ul>

      <!-- <h2> {{ cat.followers[0].first_name }} {{ cat.followers }} </h2>   -->
  </div>
</template>

<style>
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
