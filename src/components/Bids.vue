<template>
  <div class="content">
    <span class="symbol"
      >Symbol: <strong>{{ symbol }}</strong></span
    >
    <div class="content__wrapper">
      <span class="content__title">Bids</span>
      <board class="bids" :info="info.bids"></board>
    </div>
    <div class="content__wrapper">
      <span class="content__title">Asks</span>
      <board class="asks" :info="info.asks"></board>
    </div>
  </div>
</template>

<script>
import Board from '@c/Board';
export default {
  name: 'bids',
  components: {
    Board,
  },
  data() {
    return {
      info: {
        bids: null,
        asks: null,
      },
      symbol: 'BTCUSDT',
      socket: null,
    };
  },
  async created() {
    await this.getInfo();
    this.subscribe();
    this.$bus.$on('symbol', (symbol) => {
      this.symbol = symbol;
      this.socket.close();
      this.subscribe();
    });
  },
  methods: {
    async getInfo() {
      const info = await this.$sdk.get(this.symbol);
      this.info = info;
    },
    subscribe() {
      this.socket = this.$sdk.watcher(this.symbol);
      this.socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        const wsBids = data.b.filter((item) => item[1] != 0);
        const wsAsks = data.a.filter((item) => item[1] != 0);
        wsBids.reverse();
        wsAsks.reverse();
        this.info.asks.splice(1, this.info.asks.length, ...wsAsks);
        this.info.bids.splice(1, this.info.bids.length, ...wsBids);
        this.info.asks = [...wsAsks, ...this.info.asks];
        this.info.bids = [...wsBids, ...this.info.bids];
      };
    },
  },
};
</script>

<style lang="less">
.content {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  @media screen and (max-width: 48rem) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__wrapper {
    margin-top: inherit;
    margin-bottom: inherit;
    width: 45%;
  }

  &__title {
    display: inline-block;
    font-size: 1.2em;
    font-weight: 500;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    background-color: tomato;
    color: white;
  }
}

.symbol {
  flex-basis: 100%;
  font-size: 2em;
  flex-basis: 100%;
  text-align: center;
  margin-bottom: 4rem;
}
</style>