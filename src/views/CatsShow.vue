<template>
  <div class="cats-show">
    <h2> {{ cats.first  }} </h2>
    <h2> {{ cats.title  }} </h2>
    <h2> {{ cats.title  }} </h2>
    <h2> {{ cats.title  }} </h2>
    <h2> {{ cats.title  }} </h2>
    <h2> {{ cats.title  }} </h2>
    <h2> {{ cats.title  }} </h2>
    <h2> {{ cats.title  }} </h2>
    <h2> {{ cats.title  }} </h2>
    <h2> {{ cats.title  }} </h2>
  </div>
</template>

<style>
  
</style>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      cats: {
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
      }
    };
  },
  created: function() {
    axios.get("/api/cats/" + this.$route.params.id)
    .then(response => {
      this.cats = response.data;
    });
  },
  methods: {}
};
</script>
