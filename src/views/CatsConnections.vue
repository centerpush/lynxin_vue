<template>
  <div class="cats-connections">
    <div class="container"> <h4> {{ cat.first_name }} {{ cat.family_name }}'s Followers </h4> </div>
    <div class="card-deck"> 
      <div class="col-md-4" v-for="follower in cat.followers"> 
        <div class="card mt-3 bg-light">
          <h2 class="card-title mt-2 text-center"> {{follower.first_name}} </h2>
            <p class="card-text">{{ follower.title }}</p>
            <router-link v-bind:to="'/cats/' + follower.id">
              <img class="card-img-top rounded mx-auto d-block img-thumbnail mb-3" v-bind:src="follower.profile_url" v-bind:alt="follower.first_name">
            </router-link>
        </div>
      </div>
    </div>

    <div class="container"> <h4> {{ cat.first_name }} {{ cat.family_name }} follows: </h4> </div>
    <div class="card-deck"> 
      <div class="col-md-4" v-for="followee in cat.followees"> 
        <div class="card mt-3 bg-light">
          <h2 class="card-title mt-2 text-center"> {{followee.first_name}} </h2>
            <p class="card-text">{{ followee.title }}</p>
            <router-link v-bind:to="'/cats/' + followee.id">
              <img class="card-img-top rounded mx-auto d-block img-thumbnail mb-3" v-bind:src="followee.profile_url" v-bind:alt="followee.first_name">
            </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.cats-index .card-img-top{
  height: 225px;
  width: 250px;
}

.cats-index .card {
  opacity: 0.95;
  width: ;
}

.cats-index .card:hover {
  box-shadow: 8px 8px 35px 3px whitesmoke;
  opacity: 1;
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