<template>
<!--
  Reyes, Kisses Shannen O.
  WD 201
-->
  <div id="skills">
    <section class="skill_items" id="attriskill">
   <center><h6>Skills and Attributes</h6></center>
		<div class="itemBx">
			<div class="box">
				<div class="infobx">
					<h4>Skills and Attributes </h4>
					<p>Flexible and always willing to learn.
            <br/>Good Interpersonal and Communication skills
            <br/>Attention to Details
            <br/>Proficient in using softwares such as Microsoft, Adobe Photoshop, Wondershare Filmora and Programming
            <br/>Leadership skills</p>
				</div>
			</div>
			<div class="box">
				<div class="infobx">
					<h4>Programming Skills</h4>
					<p id="progskills">
          <br><br>
          <strong>Java
          <span class="percent1"></span><br>
          Python <br>
          <span class="percent2"></span><br>
          HTML <br>
          <span class="percent3"></span><br> 
          CSS <br><span class="percent4"></span><br>
          Java Script <span class="percent5"></span></strong></p> <br>
					
				
				</div>
			</div>
		</div>
	</section>

      
  </div>
</template>

<script>
export default {
  name: 'skills',
  data () {
    return {
      msg3: 'Welcome to My Educational Background'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');
.skill_items
{
	min-height: 100vh;
	width: 100%;
}
.skill_items .itemBx{
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
}
.skill_items .itemBx .box{
  margin-left: 50px;
	margin-top: 50px; 
	border-radius: 10px;
  height: 500px;
	width: 500px;
  display: flex;
}

.skill_items h6{
  font-size: 12ch;
  font-family: 'Open Sans', sans-serif;
  color: whitesmoke;
}

.skill_items .itemBx .box img{
	height: 100px;
	width: 100px;
	object-fit: cover;
	border-radius: 10px;
	margin: 10px;
}
.skill_items .itemBx .box{
	background: #a9d3ff;
	justify-content: center;
	align-items: center;
        
}

.skill_items .itemBx .box .infobx h4{
  margin-left: 15%;
	font-size: 1.5em;
  font-family: 'Open Sans', sans-serif;
}

#progskills .percent1, .percent2, .percent3, .percent4, .percent5{
  position: relative;
  display: block;
  margin: 4px 0px;
  padding: 0.5px;
  height: 5px;
  background-color: #adadad;
}
#progskills .percent1{
  width: 70%;
}
#progskills .percent2{
  width: 68%;
}
#progskills .percent3{
  width: 75%;
}
#progskills .percent4{
  width: 74%;
}
#progskills .percent5{
  width: 9%;
}

</style>

