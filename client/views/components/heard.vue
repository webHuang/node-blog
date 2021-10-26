<template>
  <div class="header">
    <div class="header-top">
      <ul class="tags">
        <li @click="gotoPage('index')">博客首页</li>
        <li @click="gotoPage('about')">关于</li>
        <li @click="gotoPage('me')">me</li>
      </ul>
    </div>
    <div class="header-box">
      <div class="header-center">
        <div class="logo">
          <img src="../../assets/person.jpg" alt="我的照片">
        </div>
        <div class="user-profile-head-info">
          <ul>
            <li>
              <div class="user-profile-statistics-num">{{ visits }}</div>
              <div class="user-profile-statistics-name">被访问量</div>
            </li>
            <li>
              <div class="user-profile-statistics-num">{{ totalArticles }}</div>
              <div class="user-profile-statistics-name">文章数量</div>
            </li>
            <li>
              <div class="user-profile-statistics-num">222</div>
              <div class="user-profile-statistics-name">点赞数量</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
  name: 'heard',

  computed: {
    ...mapState([
      'sidebarData',
      'visits',
      'articlesData',
      'totalArticles',
    ]),
  },
  methods: {
    gotoPage(name) {
      this.$router.push(name)
      if (name == 'index') {
        this.pageIndex = 1
        this.tags = []
        this.getAppointArticles()
      }
    },

  }
}
</script>
<style lang="less" scoped>

.header {
  text-align: center;
  background-image: url('../../assets/heard.jpg');
  background-position: top center;
  background-size: cover;

  .header-top {
    height: 80px;
  }

  .header-box {
    position: relative;
    height: 80px;
    border-top: #f2dede solid 1px;
    background: #FFFFFF;

    .header-center {
      width: 1200px;
      margin: auto;
    }
  }

}


.tags {
  display: flex;
  width: 1200px;
  margin: auto;
  height: 80px;
  align-items: flex-end;
  align-content: flex-end;

  ul {

    margin: 30px;
  }

  li {
    width: 100px;
    font-size: 14px;
  }
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

.user-profile-head-info {
  display: flex;
  justify-content: right;
  padding-top: 24px;
  background: #FFFFFF;
}

.user-profile-head-info > ul {
  display: flex;

}

.user-profile-head-info > ul > li {
  width: 144px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.user-profile-head-info > ul > li:after {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  content: "";
  height: 24px;
  width: 1px;
  background: #e8e8ed;
}

.user-profile-statistics-num {
  color: #222226;
  font-family: DINCond-Black;
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 16px;
}

.user-profile-statistics-name {
  color: #999aaa;
  font-size: 14px;
  line-height: 16px;
}

</style>