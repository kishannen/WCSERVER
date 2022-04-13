<template>
  <div class="home">
    <div class="banner">
      <div class="content">
        <h1>{{title}}</h1>
        <p>Explore the adventure of the thoughts and emotions</p>
         <router-link class="nav-link" to="/about">
          <button type="button" class="button">Let's Explore!</button>
         </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
  name: 'home',
  data (){
    return {
      title: 'CARTE PARADISE'
    }
  }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,700;0,900;1,300;1,600&display=swap');

*{
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}

.banner{
  width: 100%;
  height: 90.75vh;
  background-image: linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)), url(../assets/wallpaper.jpg);
  background-size: cover;
  background-position: center;
}

.content{
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  color: #ffff;
}

.content h1{
  font-weight: 900;
  font-size: 80px;
  margin-top: 75px;
}

.content p{
  margin: 20px auto;
  line-height: 25px;
  font-weight: 300;
}

button{
  font-weight: 200;
  font-family: 'Poppins', sans-serif;
  width: 150px;
  padding: 15px 0;
  text-align: center;
  margin: 20px 10px;
  border-radius: 15px;
  border: 1px solid #FAFDD6;
  background: transparent;
  color: #FAFDD6;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: 0.5s;
}

.button:hover{
  transform:scale(0.9)
}
</style>