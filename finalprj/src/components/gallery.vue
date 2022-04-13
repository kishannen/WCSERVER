<template>

 <div class="gallery">  
   <div class="title">
     <h1>GALLERY</h1>
   </div>
    <div class="row">
      <div class="column">
        <img src="../assets/book1.jpg" alt="book1" style="width:100%">
       </div>
      <div class="column">
        <img src="../assets/book2.jpg" alt="book2" style="width: 100%">
      </div>
      <div class="column">
        <img src="../assets/book3.jpg" alt="book3" style="width: 100%">
      </div>
      <div class="column">
        <img src="../assets/book4.jpg" alt="book4" style="width: 100%">
      </div>
      <div class="column">
        <img src="../assets/book5.jpg" alt="book5" style="width: 100%">
      </div>
      <div class="column">
        <img src="../assets/book6.jpg" alt="book6" style="width: 100%">
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: 'gallery', 
  data () {
    return {
      title: 'Gallery'
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,700;0,900;1,300;1,600&display=swap');

.gallery{
  background-color: #E6BA95;
  width: auto;
  height: auto;
  align-items: center;
}

.title{
  text-align: center;
  display: block;
  padding: 20px;
}

.title h1{
  font-family: 'Poppins', sans-serif;
  font-weight: 900;
}
.row{
    display: flex;
    padding: 10%;
  }
  
.column {
    flex: 33%;
    padding: 9px;
    cursor: pointer;
    transition: 0.5px;
    box-shadow: 5px 5px 5px gray;
}

.column:hover{
  transform: translateY(-15px);
}
</style>