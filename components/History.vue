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
  {
    Date: "2023-09-10",
    Sum: "0.5€",
    Status: "paid",
  },
  {
    Date: "2023-04-25",
    Sum: "0.5€",
    Status: "paid",
  },
  {
    Date: "2023-12-09",
    Sum: "0.5€",
    Status: "paid",
  },
];
const columns = ["Date", "Sum", "Status"];
</script>

<template>
  <div class="history-main">
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
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/main";

.history-main {
  width: 50vw;
  color: $textBright;

  @media only screen and (max-width: 600px) {
    width: 100vw;
  }

  .table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;

    tr:nth-child(even) {
      background: $background3;
    }

    tr:nth-child(odd) {
      background: $background2;
    }

    th,
    td {
      padding: 1rem;
      border: 1px solid $primary;
      text-align: left;
    }

    th {
      background-color: $primary;
      color: $textBright;
    }
  }
}
</style>
