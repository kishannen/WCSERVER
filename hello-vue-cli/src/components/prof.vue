<template>
<!--
  Reyes, Kisses Shannen O.
  WD 201
-->
  <div id="profile">
    <section class="body" id="body">
      <div class="center">
        <div class="imageprof">
          <img src="src\assets\idpic.jpg" alt="profile">

        </div>
        <div class="content">
          <h1>Kisses Shannen O. Reyes</h1>
          <h2>Web Developer</h2>
          <p>Aspires to learn and grow in a challenging environment where I can enhance my skills, work enthusiastically, and have an opportunity to expand my knoweldge in the field of Information Technology, Programming and Web Development</p>
          <h3>Phone No: 09169751279</h3>
          <div class="social">
            <p>Gmail: <a href="mailto: kisses.reyes010@gmail.com" target="_blank">kisses.reyes010@gmail.com</a></p>
            <p>Facebook: <a href="https://www.facebook.com/kissesshannen.reyes">KissesShannen Reyes</a></p>
            <p>LinkedIn: <a href="www.linkedin.com/in/kishareyes">Kisses Shannen Reyes</a></p>

          </div>

        </div>
      </div>
    </section>
      
  </div>
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
      msg2: 'Welcome to My Profile'
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.body{
  margin-top: 50% ;
  margin-bottom: 10%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.center .imageprof img{
  width: 170px;
  height: 170px;
  margin-top: 5%;
  object-fit: cover;
  object-position: 0 -8px;
  border: black;
}
.center{
  margin-top: 10%;
  margin-bottom: 10%;
  width: 55%;
  background-color: #93acb5;
  height: 95vh;
  text-align: center;
  border-radius: 50px;
  font-family: Arial, Helvetica, sans-serif;
}
.content{
  padding: 30px;
}
h1{
  color: wheat;
}
.content h2,p{
  font-weight: lighter;
  letter-spacing: 1px;
  width: 70%;
  margin: 10px auto;
}
.content h2{
  font-weight: 400;
}
.content h3{
  margin-top: 20px;
}
div.social i{
  padding: 0 10px;
  font-size: 30px;
  color: rgb(51, 51, 51);
  transition: 0.4s;
}
div.social i:hover{
  color: rgb(124, 193, 253);
}
</style>