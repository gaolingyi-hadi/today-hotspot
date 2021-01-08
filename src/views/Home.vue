<template>
  <div class="home">
    <h2>更新时间: {{ time }}</h2>
    <a-popover
      class="item"
      trigger="hover"
      v-for="(item, i) in sotspot_list"
      :key="i"
    >
      <template slot="content">
        <p>{{ item.description | description }}</p>
      </template>
      <h2>
        <img :src="item.logo" alt="" />
        {{ i + 1 }}.
        <a :href="item.url"> {{ item.title }}</a>
      </h2>
    </a-popover>
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
}
.home {
  max-width: 1000px;
  margin: 80px auto;
  text-align: left;
}
img {
  width: 18px;
}
.item {
  transition: all 0.3;
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
</style>
