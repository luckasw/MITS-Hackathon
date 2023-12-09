<script setup>
const items = [
  {
    Date: "2018-09-09",
    Sum: "0.5€",
    Status: "returned",
  },
  {
    Date: "2023-09-09",
    Sum: "0.5€",
    Status: "paid",
  },
];
const columns = ["Date", "Sum", "Status"];
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="(column, index) in columns" :key="index">{{ column }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in items" :key="index">
        <td v-for="(column, indexColumn) in columns" :key="indexColumn">
          {{ item[column] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
@import "~/assets/main";

.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  padding: 10px;
  border: 1px solid $primary;
  text-align: left;
}

th {
  background-color: $primary;
  color: $background;
}
</style>
