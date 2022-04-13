<template>
  <div class="contact">
    <form id="contact" name="contact">
      <fieldset id="information">
        <div class="leg">
          <legend> CONTACT US</legend>
        </div>
        <br/><br/><br/>
        <fieldset id="info">
          <div class="content">
            <label for="detail">FULL NAME</label> <br><br>
            <input name="Name" id="Name" placeholder="First Name, Middle Initial, Surname"> 
          </div>
        </fieldset>

        <fieldset id="info">
          <div class="content">
            <label for="Name">Email</label> <br><br>
            <input name="Name" id="Name" placeholder="abcde@xxxx.com"> 
          </div>
        </fieldset>

        <fieldset id="info">
          <div class="content">
            <label for="Name">PHONE</label> <br><br>
            <input name="Name" id="Name" placeholder="abcde@xxxx.com"> 
          </div>
        </fieldset>

        <fieldset id="commentBox">
          <div class="content2">
            <label for="comments"> Enter your feedback here! </label>
              <br><br>
              <textarea name="comments" id="comments" placeholder="Input here"></textarea>
          </div>
        </fieldset>

        <br><br>

        <div class="button">
          <input type="submit" value="Click here to submit">
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
  export default{
  name: 'contact',
  data (){
    return {
      title: 'contact'
    }
  }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,700;0,900;1,300;1,600&display=swap');
.contact{
    background: url(../assets/contact.jpg);
    background-size: cover;
    background-attachment: fixed;
    color: white;
    width: 100%;
    height: 200vh;
}

.heading{
    text-align: center;
    width: 100%;
    margin: auto;
    margin-top: 100px;
}

.content{
    width: 90%;
    margin: auto;
}

.content label{
    font-size: 20px;
}

.content2{
    width: 90%;
    margin: auto;
}

.content2 label{
    font-size: 20px;
}

fieldset{
    border-color: transparent;
    align-items: center;
    justify-content: center;
}

form{
    background-color: rgba(0,0,0,0.7);
    padding-top: 34px;
    display: flex;
    width: 54%;
    border-radius: 5px;
    margin: auto;
    margin-top: 10px;
    padding-bottom: 60px;
}

fieldset input#Name{
    width: 650px;
    height: 2.8em;
    position: relative;
    bottom: 10px;
    border: 0;
    border-radius: 5px;

 }

 legend{
     font-size: 20px;
 }
 textarea{
    display: block;
    float: center;
    font-size: 0.9em;
    height: 150px;
    width: 70%;
    margin: auto;
 }
 
.button input{
    font-size: 15px;
    display: flex;
    width: 150;
    margin: auto;
 }

 .leg legend{
     font-size: 2em;
     font-family: 'Poppins', sans-serif;
     font-weight: 700;
     padding-left: 20px;
     text-align: center;
 }
</style>