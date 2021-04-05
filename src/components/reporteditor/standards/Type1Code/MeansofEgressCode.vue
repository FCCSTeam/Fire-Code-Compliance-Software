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
          Fire_Code_Reference_Number: "2.2.3.4.",
          Descriptions:
            "Inspect all doors in fire separations",
          Frequency: "Monthly",
        },
        {
          Fire_Code_Reference_Number: "2.2.3.5.",
          Descriptions:
            "Check all doors in fire separations to ensure they are closed",
          Frequency: "As required",
        },
        {
          Fire_Code_Reference_Number: "2.7.3.1.",
          Descriptions:
            "Maintain exit signs to ensure they are clear and legible",
          Frequency: "As required",
        },
        {
          Fire_Code_Reference_Number: "2.7.3.2.",
          Descriptions:
            "Maintain exit signs to ensure they are illuminated and in good repair",
          Frequency: "As required",
        },
        {
          Fire_Code_Reference_Number: "2.7.1.7.",
          Descriptions:
            "Maintain corridors free of obstructions",
          Frequency: "As required",
        },
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
