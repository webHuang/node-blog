<template>
  <div class="header">
    <div class="header-box">
      <ul class="tags">
        <li @click="gotoPage('index')">博客首页</li>
        <li @click="gotoPage('about')">关于</li>
        <li @click="gotoPage('me')">me</li>
      </ul>
      <div class="logo">
        <img src="../../assets/person.jpg" alt="我的照片">
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'heard',
}
</script>
<style scoped>

.header {
  text-align: center;
  background-image: url('../../assets/heard.jpg');
  background-position: top center;
  background-size: cover;
  padding-top: 80px;
}

.header-box {
  position: relative;
  margin-top: 80px;
  height: 80px;
  border-top: #f2dede solid 1px;
  background: #FFFFFF;
}

.logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -36px;
  width: 104px;
  height: 104px;
  -webkit-box-shadow: 0 0 10px 2px rgb(0 0 0 / 6%);
  box-shadow: 0 0 10px 2px rgb(0 0 0 / 6%);
  border: 4px solid #fff;
  border-radius: 50%;
  background: #fff;
}

.logo > img {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
}


.tags {
  display: flex;
  margin: auto;
  width: 1200px;
}

.tags li {
  width: 100px;
  cursor: pointer;
}

li {
  font-size: 20px;
}
</style>