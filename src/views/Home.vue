<template>
  <div class="row">
    <div class="col-sm-6 col-md-4">
      <div class="card ">
        <header class="card-header">
          Referential metadata
        </header>
        <div class="card-body">
          This section contains the list of processes documented according to
          GSBPM standard
          <router-link tag="a" :to="{ name: 'Referential' }" class=""
            >Go to referential metadata section</router-link
          >
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-md-4">
      <div class="card">
        <header class="card-header">
          Structural metadata
          <span class="badge float-right badge-success">New</span>
        </header>
        <div class="card-body">
          This section contains the structural metadata of each survey
          documented in the system.
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-md-4">
      <div class="card">
        <header class="card-header">
          Process metadata
          <span class="badge float-right badge-danger badge-pill">42</span>
        </header>
        <div class="card-body">
          This section contains the process metadata of each survey documented
          in the system.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
