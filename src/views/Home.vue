<template>
  <div class="home">
    <h2>更新时间: {{ time }}</h2>
    <a-popover
      class="item"
      trigger="hover"
      placement="topLeft"
      v-for="(item, i) in sotspot_list"
      :key="i"
    >
      <template slot="content">
        <p class="popover-card">{{ item.description | description }}</p>
      </template>
      <div class="line">
        <img :src="item.logo" alt="" />
        <a :href="item.url"> {{ i + 1 }}. {{ item.title }}</a>
      </div>
    </a-popover>
    <div>
      <a-back-top />
      Scroll down to see the bottom-right
      <strong style="color: rgba(64, 64, 64, 0.6)"> gray </strong>
      button.
    </div>
  </div>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      sotspot_list: this.$store.state.sotspot.items,
      time: this.$store.state.sotspot.day,
    };
  },
  filters: {
    description(txt) {
      return !txt ? "无" : txt;
    },
  },
  components: {
    // HelloWorld,
  },
  mounted() {
    console.log(this.$store.state.sotspot);
  },
};
</script>
<style scoped>
h2 {
  font-size: 18px;
  margin-bottom: 20px;
}
.line{
  
}
.home {
  max-width: 1000px;
  margin: 40px auto;
  text-align: left;
}
img {
  width: 18px;
}
.item {
  transition: all 0.3s;
  padding: 10px;
}
.item:hover {
  background: #ccc;
}
.home >>> .ant-popover-placement-top,
.home >>> .ant-popover-placement-topLeft,
.home >>> .ant-popover-placement-topRight {
  width: 500px;
}
.popover-card {
  max-width: 500px;
}
</style>
