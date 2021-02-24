<template>
  <div class="flogo bg-primary">
    <img class="logo-image" :src="require('@/assets/img/city.jpg')" />
    <div class="flogo-right bg-white"></div>
    <div class="flogo-top bg-white"></div>
    <div class="flogo-middle bg-white"></div>
    <div class="flogo-bottom bg-white"></div>

  </div>
</template>

<script>
export default {};
</script>

<style>
.flogo {
  position: relative;
  width: 100%;
  height: 100%;
}
.logo-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: opacity(80%);
}

.flogo-right{
  position: absolute;
  top: 0%;
  right: 0%;
  height: 100%;
  width: 20%;
}

.flogo-top{
  position: absolute;
  top: 25%;
  left: 30%;
  height: 20%;
  width: 70%;
}

.flogo-middle{
  position: absolute;
  top: 45%;
  left: 60%;
  height: 30%;
  width: 40%;
}

.flogo-bottom{
  position: absolute;
  bottom: 0%;
  left: 30%;
  height: 30%;
  width: 70%;
}

</style>