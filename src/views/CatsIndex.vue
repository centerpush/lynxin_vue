<template>
  <div class="cats-index">
    <div class="card-deck">
      <div class="col-md-4" v-for="cat in cats">
        <div class="card mt-3">
          <img class="card-img" src="https://www.toptal.com/designers/subtlepatterns/patterns/leaves.png">
            <div class="card-img-overlay"> 
              <h2 class="card-title text-center" > {{ cat.first_name }}</h2>
              <p class="card-text ">{{ cat.title }}</p>
              <router-link v-bind:to="'/cats/' + cat.id">
                <img class="card-img-top rounded mx-auto d-block img-thumbnail" v-bind:src="cat.profile_url" v-bind:alt="cat.first_name">
              </router-link>
              <p class="card-text mt-1">{{ cat.summary }}</p>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card-img-top {
  height: 225px;
  width: 250px;
}

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
