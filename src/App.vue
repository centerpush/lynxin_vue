<template>
  <div id="app">
    <div id="nav">
    <!--   <router-link to="/">Welcome</router-link> |
      <router-link to="/profile">Profile</router-link> -->
      <!-- <button>Newsfeed</button>
      <button>Profile</button>
      <button>Sign Out</button> -->
    </div>
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #2c3e49;" >
      <a class="navbar-brand" href="/">LynxIn</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        </ul>
        <form class="form-inline my-2 my-lg-0">
        </form>
      </div>
    </nav>
    <!-- <div class="container"> -->
    <router-view/>
  <!--   </div> -->
  </div>
</template>

<style>
</style>
