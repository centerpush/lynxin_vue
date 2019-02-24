<template>
  <div id="app">
    <div id="nav">

    </div>
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #2c3e49;" >
      <router-link class="navbar-brand" to="/cats">LynxIn 🐈 </router-link>
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
    <router-view/>
  </div>
</template>

<style>
.navbar{
  height: 52px;
}
.navbar-brand{
  font-size: 35px;
}
</style>
