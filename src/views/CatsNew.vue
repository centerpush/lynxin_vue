<template>
  <div class="cats-new">
    <h1>New Cat, Meow Meow</h1>

    <ul>
      <li v-for="error in errors"{{ error }}</li>
    </ul>
    
    <form v-on:submit.prevent='submit()'>
      <div>
        <input v-model="newCatFirstName" placeholder="First Name">
      </div>
      <div>
        <input v-model="newCatFamilyName" placeholder="Family Name">
      </div>
      <div>
        <input v-model="newCatTitle" placeholder="Title">
      </div>
      <div>
        <input v-model="newCatEducation" placeholder="Education">
      </div>
      <div>
        <input v-model="newCatExperience" placeholder="Experience">
      </div>
      <div>
        <input v-model="newCatLocation" placeholder="Location">
      </div>
      <div>
        <input v-model="newCatOwner" placeholder="Owner">
      </div>
      <div>
        <input v-model="newCatSummary" placeholder="Summary">
      </div>
      <div>
        <input v-model="newCatProfileUlr" placeholder="Profile Url">
      </div>
      <div>
        <input v-model="newCatAccomplishments" placeholder="Accomplishments">
      </div>
      <div>
        <input v-model="newCatEndorsements" placeholder="Endorsements">
      </div>
      <div>
        <input v-model="newCatSkills" placeholder="Skills">
      </div>
      

      <input type="submit" value="Create" class="btn btn-primary">
    </form>
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
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
      errors: []
    };
  },
  created: function() {},
  methods: {
    submit: function() {
      console.log("Creating Cat...");
      var params = {
                    first_name: this.newCatfirst_name,
                    family_name: this.newCatfamily_name,
                    title: this.newCattitle,
                    education: this.newCateducation,
                    experience: this.newCatexperience,
                    location: this.newCatlocation,
                    owner: this.newCatowner,
                    summary: this.newCatsummary,
                    profile_url: this.newCatprofile_url,
                    accomplishments: this.newCataccomplishments,
                    endorsements: this.newCatendorsements,
                    skills: this.newCatskills
                    };
      axios.post("/api/cats", params)
        .then(response => {
          console.log("Success", response.data);
          this.$router.push("/");
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>