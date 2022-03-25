<template>
<!--
  Reyes, Kisses Shannen O.
  WD 201
-->
  <div id="app" class="app">
  <div class="list">
     <ul>
      <li><a href="#banner">Home</a></li>
      <li><a href="#profile">About</a></li>
      <li><a href="#educbg">Education</a></li>
      <li><a href="#skills">Skills</a></li>
    </ul>
  </div>

    <div class="banner">
      <h1>WELCOME TO MY PAGE</h1>
      <p>To know more details about me, kindly click "Profile Check" to navigate</p>
      <br/>
      <a href="#profile" class="startbtn">Profile Check</a>
    </div>

  <div>
    <prof></prof>
    </div>

  <div>
    <educbg></educbg>
  </div>
  <div>
    <skills></skills>
  </div>
  </div>
  
</template>

<script>

import prof from './components/prof'
import educbg from './components/educbg'
import skills from './components/skills'

export default {
  name: 'app',
  components:{ 
    prof,
    educbg,
    skills
  },
  
  data () {
    return {
      msg: 'The Main Components'
    }
  }
}

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');

.app{
  background-color: #6c756b;
}
.list{
  display: flex;
  padding: 2% 2%;
  justify-content: space-between;
  text-align: right;
  align-items: center;
}

.list ul li{
  list-style: none;
  display: inline-block;
  padding: 2px 4px;
  position: relative;
}

.list ul li a{
  color: #000000;
  text-decoration: none;
  font-size: 20px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
}

.list ul li::after{
  content: '';
  width: 0%;
  height: 2px;
  background-color: #ffffff;
  display: block;
  margin: auto;
  transition: 0.5s;
}

.list ul li:hover::after{
  width: 100%;
}

.banner{
  width: 100%;
  height: 25%;
  color: #ffffff;
  position: absolute;
  top: 30%;
  text-align: center;
  margin-bottom: 50%;
}

.banner h1{
  font-size: 65px;
  font-family: 'Open Sans', sans-serif;
}

.banner p{
  margin: 10px 0 px 40px;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  color: #ffffff;
}

.startbtn{
  display: inline-block;
  text-decoration: none;
  color: #ffffff;
  border: 1px solid #ffffff;
  padding: 12px 34px;
  font-size: 13px;
  background: transparent;
  position: relative;
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
}

.startbtn:hover{
  border: 1px solid #e3f9ff;
  background: #d7d9fa;
  transition: 0.5s;
}

</style>
