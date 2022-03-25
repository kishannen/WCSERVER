<template>
<!--
  Reyes, Kisses Shannen O.
  WD 201
-->
  <div id="educbg">
    <section class="body2" id="body2">
      <div class="center2">
        <div class="content2">
          <p> Education</p>
            <ul>
              <li><h1 class="tags">Hoy Angel University, Philippines<br><span>Bachelor of Science in Information Technology with area specialization of Web Development | <span>January, 2022</span></span></h1>
              </li>
              <br>
              <hr width="100%">
              <br>
              <li><h1 class="tags"> Chevalier School, Philippines <br><span> Senior High School | <span>2018 - 2020</span></span></h1>
              </li>
              <hr width="100%">
              <br>
              <li><h1 class="tags">Chevalier School, Philippines<br><span>Junior High School | <span>2014-2018</span></span></h1></li>
              <hr width="100%">
              <br>
              <li><h1 class="tags">Chevalier School, Philippines<br><span>Elementary School | <span>2007-2014</span></span></h1></li>
            </ul>
        </div>
      </div>
    </section>
      
  </div>
</template>

<script>
export default {
  name: 'educbg',
  data () {
    return {
      msg3: 'Welcome to My Educational Background'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');

*{
  margin: 0;
  padding: 0;
}
.body2{
  margin-top: 10% ;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.center2{
  margin-top: 10%;
  margin-bottom: 10%;
  width: 100%;
  background-color: #96c5f7;
  height: 110vh;
  text-align: center;
}
.content2{
  padding: 30px;
}
h1{
  color: wheat;
}
.content2 h2,p{
  font-weight: lighter;
  letter-spacing: 1px;
  width: 70%;
  margin: 10px auto;
  font-family: 'Open Sans', sans-serif;
}
.content2 h2{
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
}
.content2 h3{
  margin-top: 20px;
}

.content2 p{
    margin-left: 15%;
    color: #684700;
    font-weight: bolder;
    font-size: 40px;
    font-family: 'Open Sans', sans-serif;
    line-height: 2;
}
h1{
    margin-left: 2%;
    color: #000000;
    font-weight: bolder;
    font-size: 18px;
    font-family: 'Open Sans', sans-serif;
    line-height: 2;
}

#obj{
    color: #000;
    text-align: justify;
    font-size: 65px;
    font-weight: 500;
}
.tags{
    font-size: 25px;
    font-weight: bolder;
}
.tags span{
    font-size: 20px;
    font-weight: normal;
    color: #0e141e;
}
.tags span span{
    color: #577377;
}


</style>

