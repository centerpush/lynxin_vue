<template>
  <div class="cats-index">
    <div class="row">
      <div class="col-md-4" v-for="cat in cats">
          <div class="card">
          <h2 class="card-title"> {{ cat.first_name }}</h2>
          <router-link v-bind:to="'/cats/' + cat.id">
            <img class="card-img-top" v-bind:src="cat.profile_url" v-bind:alt="cat.first_name">
          </router-link>
          <p class="card-text">{{ cat.summary }}</p>
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
  methods: {
    
  }
};
</script>
