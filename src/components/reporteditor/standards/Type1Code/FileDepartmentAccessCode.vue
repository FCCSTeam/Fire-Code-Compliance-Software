<template>
  <div>
    <div>
      <b-table striped hover :items="items"></b-table>
    </div>
  </div>
</template>

<script>
// import { mdbTbl, mdbTblHead, mdbTblBody } from "mdbvue";
export default {
  data() {
    return {
      items: [
        {
          Fire_Code_Reference_Number: "2.5.1.2.(1)",
          Descriptions:
            "Ensure streets, yards and private roadways provided for fire department access are kept clear",
          Frequency: "Monthly",
        },
        {
          Fire_Code_Reference_Number: "2.5.1.2.(2)",
          Descriptions:
            "Maintain the Fire department sprinkler and standpipe connections free of obstructions for use at all times",
          Frequency: "Monthly",
        },
        {
          Fire_Code_Reference_Number: "2.5.1.3.",
          Descriptions:
            "Maintain the Fire access routes so as to be immediately ready for use at all times by fire department vehicles",
          Frequency: "Monthly",
        }
      ],
    };
  },
};
</script>

<style>
table,
th,
td {
  border: 1px solid black;
}
</style>
