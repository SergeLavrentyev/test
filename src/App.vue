<template>
  <div id="app" class="container">
    <the-header
      :tabs="tabs"
      :current-tab="currentTab"
      @switch-tab="switchTab"
    ></the-header>
    <keep-alive>
      <component :is="activeTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from '@c/TheHeader';

export default {
  name: 'App',
  components: {
    TheHeader,
    Bids: () => import(/* webpackChunkName:"Bids" */ '@c/Bids'),
    Diffs: () => import(/* webpackChunkName:"Diffs" */ '@c/Diffs'),
  },
  data() {
    return {
      tabs: ['Bids', 'Diffs'],
      currentTab: 'Bids',
    };
  },
  methods: {
    switchTab(tab) {
      return (this.currentTab = tab);
    },
  },
  computed: {
    activeTab() {
      return this.currentTab;
    },
  },
};
</script>

<style lang="less">
@mobile: 48rem;
html {
  box-sizing: border-box;
}

body {
  margin: 0;
}

ul {
  margin: 0;
}

li {
  list-style-type: none;
}

.container {
  width: 100%;
  max-width: 76.25rem;
  margin: 0 auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
</style>