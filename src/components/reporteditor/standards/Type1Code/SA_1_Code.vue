<template>
  <div>
    <div>
      <b-table fixed striped hover :items="items"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  name : 'SA_1_Code',
  data() {
    return {
      items: [
        {
          Fire_Code_Reference_Number: "6.3.3.3.",
          Descriptions:
            "Smoke alarms shall be maintained in operating condition by the owner",
          Frequency: "Monthly and as required",
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
