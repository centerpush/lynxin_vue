<template>
  <div class="cats-show">
    <div class="profile-card">
      <div>
        <img id="banner-image" src="https://www.eandl.co.uk/2015/images/pet-banner-cat.jpg" alt="doesn't work">
      </div>
      <div class="card">
        <p class="card-title">{{ cat.first_name  }} {{  cat.family_name}}</p>
        <p class="card-text" id="title">{{ cat.title }}</p>
        <p class="card-text" id="location">{{ cat.location }}</p>
        <p class="card-text">Owner: {{ cat.owner }}</p>
        <div id="connect-btn" class="text-right">
          <button v-on:click="connect()" class="btn btn-primary">Connect</button>
        </div>
        <div id="accordion">
          <div>
            <div class="card-header" id="headingOne">
              <h5 class="mb-0">
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
.cats-show p{
  margin-bottom: 12px;
  text-align: left;
}

.cats-show .card{
  width: 791px;
  margin-left: 119px;
  margin-bottom: 19px;
}
.cats-show #banner-image{
  height: 269px;
  width: 791px;
  margin-left: 119px;
}
.cats-show .card-title{
  text-align: left;
  margin-left: 25px;
  margin-top: 10px;
  font-size: 30px;
}
.cats-show .card-text{
  text-align: left;
  margin-left: 25px;
}
.cats-show #title{
  font-size: 24px;
}
.cats-show #location{
  font-size: 16px;
  color: #676767;
}
.cats-show #connect-btn{
  margin-right: 25px;
  margin-bottom: 20px;
}
.cats-show #sub-header{
  font-size: 24px;
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
  methods: {
    connect: function() {
      var params = { followee_id: this.cat.id };
      axios.post("/api/followings/", params);
    }
  }
};
</script>
