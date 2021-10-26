<template>
  <div class="content">
    <heard></heard>
    <section class="main">
      <div class="page-list">
        <keep-alive>
          <router-view
              :articlesData="articlesData"
              :pageIndex="pageIndex"
              :pageSize="pageSize"
              :totalArticles="totalArticles"
              @change="pageChange"
          ></router-view>
        </keep-alive>
      </div>
      <div class="sidebar">
        <div class="tag-header" v-if="sidebarData.length">
          我的标签
        </div>
        <ul @click="toggleTag">
          <li v-for="(item, index) in sidebarData" :key="index" class="sidebar-li">
            {{ item.tag }}（{{ item.nums }}）
          </li>
        </ul>
      </div>
    </section>


    <view-footer></view-footer>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import heard from '../components/heard'
import viewFooter from "../components/footer";

let fetchArticles
export default {

  data() {
    return {
      pageIndex: 1,
      pageSize: 20,
      tags: []
    }
  },
  components: {
    heard,
    viewFooter
  },
  computed: {
    ...mapState([
      'sidebarData',
      'visits',
      'articlesData',
      'totalArticles',
    ]),
  },
  asyncData({store, route}) {
    if (route.path == '/index') {
      return Promise.all([
        store.dispatch('getTagsArtilesData'),
        store.dispatch('getArticles', {
          tags: [],
          pageSize: 20,
          pageIndex: 1,
        })
      ])
    }

    return Promise.resolve()
  },
  mounted() {
    fetchArticles = require('@/api/client').fetchArticles
  },
  methods: {

    toggleTag(e) {
      this.pageIndex = 1
      this.tags = e.target.innerHTML.trim().split('（')[0]
      this.getAppointArticles()
    },

    pageChange(index) {
      this.pageIndex = index
      this.getAppointArticles()
    },

    getAppointArticles() {
      fetchArticles({
        tags: this.tags,
        pageSize: this.pageSize,
        pageIndex: this.pageIndex,
      }).then(res => {
        this.$store.commit('setArticles', res)
      })
    },


  }
}
</script>

<style scoped>
.content {
  background: #FFFFFF;
}

.page-list {
  width: 85%;
}


.main {
  width: 1200px;
  margin: 20px auto;
  min-height: 707px;
  display: flex;
  justify-content: space-between;
}


.sidebar {
  width: 260px;
  margin-left: 20px;
  color: #7d8b8d;
}


.sidebar-li {
  padding: 15px;
  background: #fff;
  border: 1px solid #dedede;
  border-top: 0;
  cursor: pointer;
  font-size: 16px;
}

.sidebar-li:hover {
  background: #dedede;
  color: #fff;
}

.tag-header {
  background: #f2f2f2;
  border: 1px solid #dedede;
  border-bottom: 0;
  padding: 15px;
  font-size: 12px;
}

.introduction {
  margin-bottom: 10px;
  font-size: 16px;
}

.introduction a {
  display: inline-block;
}

.my-link {
  display: flex;
  align-items: center;
  margin: 20px 0;
}

.my-link a {
  width: 34px;
  height: 34px;
  margin-right: 20px;
}

.my-link img {
  width: 100%;
}
</style>
