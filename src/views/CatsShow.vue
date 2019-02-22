<template>
  <div class="cats-show">
    <div class="container">
      <div class="card" style="width: 60rem;">
        <!-- <img :src='cat.profile_url' class="card-img-top" alt="Not loading"> -->
        <div class="card-body">
          <h5 class="card-title">{{ cat.first_name  }} {{  cat.family_name}}</h5>
          <p class="card-text">{{ cat.title }}</p>
          <p class="card-text">{{ cat.location }}</p>
          <p class="card-text">{{ cat.ownder }}</p>
          <p class="card-text">{{ cat.summary }}</p>
          <a href="#" class="btn btn-primary">Connect</a>
        </div>

        <div class="card" style="width: 60rem;">
          <div class="card-body">
            <p class="card-text">{{ cat.experience }}</p>
            <p class="card-text">{{ cat.education }}</p>
          </div>
        </div>

        <div class="card" style="width: 60rem;">
          <div class="card-body">
            <p class="card-text">{{ cat.skills }}</p>
            <p class="card-text">{{ cat.endorsements }}</p>
            <p class="card-text">{{ cat.accomplishments }}</p>
          </div>
        </div>
      </div>
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
      cat: {
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
      this.cat = response.data;
    });
  },
  methods: {}
};
</script>
