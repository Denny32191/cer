<template>
  <div class="container">
    <div class="Login">
      <div>
        <div class="login__image">
        <img src="./../assets/image 555.png" alt="" />
      </div>
    </div>
      <div class="login__title">
        <h1>Авторизация</h1>
      </div>
      <div>
        <input class="login__input" type="text" />
      </div>
      <div>
        <input class="password__input" type="text" />
      </div>
      <div>
        <router-link to="/list-form">
          <button class="button__green">Вход</button>
        </router-link>
      </div>
    </div>
    <div class="cubeImage">
      <img class="icon1" src="./../assets/image 407.png" alt="" />
      <img class="icon2" src="./../assets/image 408.png" alt="" />
      <img class="icon3" src="./../assets/image 410.png" alt=""/>
      <img class="icon4" src="./../assets/image 411.png" alt=""/>
      <img class="icon5" src="./../assets/image 406.png" alt="">
      <img class="icon6" src="./../assets/image 409.png" alt="">
    </div>
  </div>
</template>

<script>


export default {
  name: "LoginPage",
  props: {
    msg: String,
  },
  components: {
    
  },
  methods: {
 
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}
.Login {
  display: flex;
  float: left;
  width: 624px;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  border-radius: 10px;
}
.login__image {
  margin-right: 200px;
}
.login__title {
  margin-right: 100px;
  font-weight: 700;
  font-size: larger;
}
.cubeImage {
  float: right;
  background-color: #3EA748;
  width: 100%;
  height: 902px;
  position: relative; /* Добавляем позиционирование */
  overflow: hidden; 
}
.login__input {
  width: 350px;
  height: 70px;
  margin-bottom: 10px;
  border-radius: 14px;
  background-color: whitesmoke;
  border: none;
  outline-width: 0;
}
.password__input {
  width: 350px;
  height: 70px;
  background-color: whitesmoke;
  border-radius: 14px;
  border: none;
  margin-bottom: 40px;
  outline-width: 0;
}
.button__green {
  width: 160px;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #3EA748;
  color: white;
  margin-right: 20px;
}
.button__green:hover {
  transform: scale(1.1) translateY(-5px);
  background-color: #3EA748;
  transition: 1.4s;
}

.icon2 {
  position: relative;
  top: 20px;
  left:400px;
}
.icon3 {
  position: relative;
  left: 100px;
}
.icon4 {
  position: relative;
  bottom: 50px;
  left: 40px;
}
.icon5 {
  position: relative;
  bottom: 8px;
  right: 150px;
}
.icon6 {
  position: relative;
  bottom: 220px;
}
</style>
