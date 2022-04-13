<template>
    <div class="about">
        <div class="holder">
            <div class="section">
                <div class="container">
                    <h1>ABOUT US</h1>
                    <p class="detail">Carte Paradise is a non-profit bookstore established in 2000.<br/>
                    As a bookstore, we aim to deliver and share knowledge for those people especially the youth,<br/>
                    to explore and widen their knowledge in different subjects and genres. Furthermore, we share <br/>
                    a wide variety of books that is almost the same size of a huge library.</p>
                </div>
            </div>

        <div class="holder2">
             <div class="contain2">
                 <div class="title">
                    <h1>ABOUT ME</h1>
                 </div>
        </div>
        <div class="article">
            <div class="intro">
            <p>Hello, I am Kisses Shannen Reyes, the current owner of Carte Paradise. <br/>
            I am truly proud to be the guardian of this book haven who has been existing for 22 years. <br/>
            Furthermore, I love being with the books and write hundreds of thoughts and emotions. <br/>
            By the way, I am also a student like you who wants to achieve milestones and I aspire to <br/>
            become a professional programmer. I think I talk a lot today, it is because I like <br/>
            having good conversations with people. Anyway, shall we have a cup of coffee and read books?</p>
            </div>
        </div>

        <div class="profile">
            <img src="../assets/me.jpg" alt="Kisses">
        </div>

        </div>
       
        </div>

    </div>

    
</template>

<script>
export default {
    name: 'about', 
    data (){
        return{
            title: 'ABOUT',
        }
    }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Oxygen', sans-serif;
}

.about{
    background-color: #E6BA95;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
}

.section{
    background: url(../assets/about.jpg) no-repeat left;
    background-size: 65%;
    background-color: #FAFDD6;
    overflow: hidden;
    padding: 100px;
    margin: 10%;
}

.container{
    width: 60%;
    height: 45%;
    float: right;
    background-color: #E4E9BE;
    padding: 90px;
}

.container h1{
    margin-bottom: 15%;
    font-weight: 700;
    font-size: 40px;
}

.detail{
    font-size: 20px;
    text-align: justify;
    line-height: 35px;
    margin-bottom: 40px;
}

.holder2 .contain2{
    width: 100%;
    display: block;
    margin: 0px;
    padding: 50px 0px;
}

.contain2 .title{
    width: 100%;
    text-align: center;
    margin-top: 100px;
    margin-bottom: 50px;

}

.contain2 .title h1{
    font-weight: 700;
    color: #3d4432;
}

.contain2 .title h1::after{
    content: "";
    height: 5px;
    width: 10%;
    background-color: #A2B38B;
    border-radius: 30px;
    display: block;
    margin: auto;
}

.article{
    float: left;
    width: 55%;
}

.profile{
    float: right;
    width: 40%;
    margin: auto;
}

.profile img{
    width: 40%;
    height: 40%;
    padding-left: 25px;
    margin: auto;
}

.article{
    padding: 20px;
    text-align: justify;
}
</style>