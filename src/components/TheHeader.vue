<template>
  <header class="header">
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item" v-for="tab in tabs" :key="tab">
          <button
            class="nav__link"
            :class="{ 'nav__link--active': currentTab === tab }"
            @click="switchTab(tab)"
          >
            {{ tab }}
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'the-header',
  props: ['tabs', 'currentTab'],
  methods: {
    switchTab(tab) {
      this.$emit('switch-tab', tab);
    },
  },
};
</script>

<style lang="less">
.header {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.nav {
  &__list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  &__link {
    @pv: 0.3rem;
    @ph: 1.5rem;
    @fs: 1em;
    
    padding-top: @pv;
    padding-bottom: @pv;
    padding-left: @ph;
    padding-right: @ph;
    font-size: @fs;
    border: 0.0625rem solid palevioletred;
    background-color: transparent;
    transition: background-color 0.3s ease-in-out, 
                color 0.3s ease-in-out;
    outline: none;

    &--active {
      background-color: plum;
      color: white;
    }
  }
}
</style>