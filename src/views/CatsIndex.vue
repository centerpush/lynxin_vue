<template>
  <div class="cats-index">
    <div v-for="cat in cats">
      <h2> {{ cat.first_name }} {{ cat.family_name }} </h2>      
    </div>
  </div>
</template>

<style>
</style>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      cats: [],
      first_name: "",
      family_name: "",
      title: "",
      education: "",
      experience: "",
      location: "",
      owner: "",
      summary: "",
      profile_url: "",
      accomplishments: "",
      endorsements: "",
      skills: "",
      user_id: ""
    };
  },
  created: function() {
    axios.get("/api/cats")
    .then(response => {
      this.cats = response.data;
    });
  },
  methods: {}
};
</script>
