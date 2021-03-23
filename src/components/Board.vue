<template>
  <table class="board">
    <thead class="board__header">
      <th class="board__title">Price</th>
      <th class="board__title">Amount</th>
      <th class="board__title total">Total</th>
    </thead>
    <tbody class="board__body">
      <tr class="board__row" v-for="(item, index) in info" :key="index">
        <td class="board__cell">{{ item[0] }}</td>
        <td class="board__cell">{{ item[1] }}</td>
        <td class="board__cell total">{{ item[0] * item[1] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['info'],
};
</script>

<style lang="less" scoped>
th,
td {
  border: 1px solid black;
  padding: 1rem;
  text-align: center;
}

tbody {
  display: block;
  height: 50vh;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    background-color: transparent;
  }
  &:hover::-webkit-scrollbar {
    background-color: rgb(153, 193, 245);
  }
  &:hover::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background-color: hotpink;
  }
}
thead,
tbody tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}
thead {
  width: calc(100% - 1em);
  padding-top: 1rem;
  padding-bottom: 1rem;

}
table {
  width: 100%;
  border: none;
  border-collapse: collapse;
  margin-bottom: 2rem;
  @media screen and (max-width: 48rem) {
    width: 100%;
  }
}

.total {
  @media screen and (max-width: 48rem) {
    display: none;
  }
}
</style>