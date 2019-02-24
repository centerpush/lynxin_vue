<template>
  <div class="cats-connections">
    <div class="container"> <h1> {{ cat.first_name }} {{ cat.family_name }}'s Followers </h1> </div>
    <div class="card-deck"> 
      <div class="col-md-4" v-for="follower in cat.followers"> 
        <div class="card mt-3">
          <h2 class="card-title text-center"> {{follower.first_name}} </h2>
            <p class="card-text">{{ follower.title }}</p>
            <router-link v-bind:to="'/cats/' + follower.id">
              <img class="card-img-top" v-bind:src="follower.profile_url" v-bind:alt="follower.first_name">
            </router-link>
            <p class="card-text">{{ follower.summary }}</p>
        </div>
      </div>
    </div>

    <div class="container"> <h1> {{ cat.first_name }} {{ cat.family_name }} is following these cats: </h1> </div>
    <div class="card-deck"> 
      <div class="col-md-4" v-for="followee in cat.followees"> 
        <div class="card mt-3">
          <h2 class="card-title text-center"> {{followee.first_name}} </h2>
            <p class="card-text">{{ followee.title }}</p>
            <router-link v-bind:to="'/cats/' + followee.id">
              <img class="card-img-top" v-bind:src="followee.profile_url" v-bind:alt="followee.first_name">
            </router-link>
            <p class="card-text">{{ followee.summary }}</p>
        </div>
      </div>
    </div>
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
      user_id: "",
      followers: {
        id: "",
        first_name: "",
        family_name: "",
        profile_url: ""
      },
      followees: {
        id: "",
        first_name: "",
        family_name: "",
        profile_url: ""
      }
    };
  },  created: function() {
    axios.get("/api/cats/" + this.$route.params.id)
    .then(response => {
      this.cat = response.data;
    });
  },

  methods: {
    
  }
};
</script>