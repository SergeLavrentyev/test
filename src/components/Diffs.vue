<template>
  <div class="container">
    <p>{{ currentSymbol }}</p>
    <select v-model="currentSymbol" @click="addToList(currentSymbol)">
      <option v-for="(item, index) in options" :key="index">
        {{ item }}
      </option>
    </select>
    <ul class="diff-list"></ul>
  </div>
</template>

<script>
export default {
  name: 'diffs',
  data() {
    return {
      options: ['BTCUSDT', 'BNBBTC', 'ETHBTC'],
      currentSymbol: 'BTCUSDT',
      changedSymbol: [],
    };
  },
  methods: {
    addToList(symbol) {
      this.$bus.$on('symbol', (symbol) => {
        this.changedSymbol.push(symbol)
      });
    },
  },
  watch: {
    currentSymbol(symbol) {
      this.$bus.$emit('symbol', symbol);
    },
  },
};
</script>