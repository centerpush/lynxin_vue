<template>
  <div class="cats-show">
    <div class="profile-card">
      <div>
        <img id="banner-image" src="http://www.wishbonespetcare.com/LRGpawprintbanner.png" alt="doesn't work">
      </div>
      <div class="card">
        <div class="row">
          <div class="col">
            <p class="card-title" id="first-family-name">{{ cat.first_name  }} {{  cat.family_name}}</p>
            <p class="card-text" id="title">{{ cat.title }}</p>
            <p class="card-text" id="location">{{ cat.location }}</p>
            <p class="card-text">Owner: {{ cat.owner }}</p>
          </div>
          <div class="col">
            <div id="action-buttons">
              <button v-on:click="connect()" class="btn btn-primary main-button">Connect</button>
              <button v-on:click="edit()" class="btn btn-primary main-button">Edit Profile</button>
              <router-link v-bind:to="'/cats/' + cat.id + '/catnections'">
                <button class="btn btn-primary main-button">Catnections</button>
              </router-link>
            </div>
          </div>
        </div>
        <div id="accordion">
          <div>
            <div class="card-header" id="headingOne">
              <h5 class="mb-0 text-center">
                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Summary: 
                </button>
              </h5>
            </div>
            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
              <div class="card-body">
                {{ cat.summary }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="profile-img-location">
      <div class="profile-img"></div>
        <img class="shadow-lg" v-if="cat.profile_url" :src="cat.profile_url">
    </div>
    <div class="card">
      <p class="card-title" id="sub-header">Experience:</p>
      <p class="card-text" id="experience">{{ cat.experience }}</p>
      <hr />
      <p class="card-title" id="sub-header">Education:</p>
      <p class="card-text">{{ cat.education }}</p>
    </div>
    <div class="card">
      <p class="card-title" id="sub-header">Skills:</p>
      <p class="card-text">{{ cat.skills }}</p>
      <hr />
      <p class="card-title" id="sub-header">Endorsements:</p>
      <p class="card-text">{{ cat.endorsements }}</p>
      <hr />
      <p class="card-title" id="sub-header">Accomplishments:</p>
      <p class="card-text">{{ cat.accomplishments }}</p>
    </div>
  </div>
</template>

<style>
.cats-show p {
  margin-bottom: 12px;
  text-align: left;
}

.cats-show .card {
  width: 791px;
  margin-left: 119px;
  margin-bottom: 19px;
}
.cats-show #banner-image {
  height: 269px;
  width: 791px;
  margin-left: 119px;
}
.cats-show .card-title {
  text-align: left;
  margin-left: 25px;
  margin-top: 10px;
  font-size: 30px;
}
.cats-show #first-family-name{
  margin-top: 75px;
}
.cats-show .card-text {
  text-align: left;
  margin-left: 25px;
}
.cats-show #title {
  font-size: 24px;
}
.cats-show #location {
  font-size: 16px;
  color: #676767;
}
.cats-show #action-buttons {
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right:35px;
  margin-bottom: 5px;
}
.cats-show #sub-header {
  font-size: 24px;
}

.cats-show #profile-img-location {
  position:absolute;
  width:0px;
  height:0px;
  background:red;
  left:169px;
  top:240px;
}
.cats-show #profile-img-location img {
  height:160px;
  width:160px;
  border-radius: 100px;
}
.cats-show .main-button {
  margin-right: 8px;
}
</style>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      cat: {
        id: "",
        first_name: "",
        family_name: "",
        title: "",
        education: "",
        experience: "",
        location: "",
        owner: "",
        summary: "",
        profile_url: null,
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
  methods: {
    connect: function() {
      var params = { followee_id: this.cat.id };
      axios.post("/api/followings/", params);
    },
    edit: function() {
      this.$router.push("/cats/" + this.cat.id + "/edit");
    }
  }
};
</script>
