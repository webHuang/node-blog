<template>
  <div>
    <ul @click="gotoContent">
      <li v-for="(item, index) in articlesData" :key="index" class="content-li">
        <p class="p-title" :data-index="index">{{ item.title }}</p>
        <p class="date">{{ item.date }}</p>
      </li>
    </ul>
    <Page v-if="totalArticles" show-total class="page" :page-size="pageSize" :total="totalArticles"
          @on-change="pageChange"/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {timestampToDate} from '@/utils'

export default {
  props: {
    articlesData: {
      type: Array,
      default: () => []
    },
    pageIndex: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    totalArticles: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    gotoContent(e) {
      const target = e.target
      if (target.className == 'p-title') {
        this.$router.push('content?id=' + this.articlesData[target.dataset.index]._id)
      }
    },

    pageChange(index) {
      this.$emit('change', index)
    },
  }
}
</script>

<style scoped>
.content-li {
  background: #fff;
  padding: 20px;
  border: 1px solid #e5e5e5;
  border-left: 2px solid #999999;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  border-radius: 6px;
  box-shadow: 0 0 5px 2px rgb(0 0 0 / 1%);
  align-items: center;
}

.content-li:hover {
  border-left: #19be6b solid 1px;
  background: #fff;
  box-shadow: 0 0 10px 2px rgb(0 0 0 / 6%);
}

.p-title {
  font-size: 14px;
  color: #666;
  cursor: pointer;
}

.date {
  color: #bcbcbc;
  font-size: 12px;
  align-items: center;
}

.page {
  margin-top: 20px;
}
</style>
