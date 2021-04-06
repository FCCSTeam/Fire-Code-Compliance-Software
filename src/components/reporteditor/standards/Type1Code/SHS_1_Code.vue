<template>
  <div>
    <div>
      <b-table fixed striped hover :items="items"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          Fire_Code_Reference_Number: "6.4.2.1.",
          Descriptions:
            "Inspect hose cabinets to ensure hose position and that equipment is in place and operable",
          Frequency: "Monthly",
        },
        {
          Fire_Code_Reference_Number: "6.4.2.4.",
          Descriptions:
            "Inspect hose valves to ensure tightness and no water leakage",
          Frequency: "Annually",
        },
        {
          Fire_Code_Reference_Number: "6.4.2.5.",
          Descriptions:
            "Remove and re-rack hose and replace worn gaskets",
          Frequency: "Annually",
        },
        {
          Fire_Code_Reference_Number: "6.4.1.2.",
          Descriptions:
            "Remove plugs and caps on fire department connections and inspect for wear, rust or obstructions",
          Frequency: "Annually",
        },
        {
          Fire_Code_Reference_Number: "6.4.3.6.",
          Descriptions:
            "Hydrostatically test standpipe system piping that normally remains dry",
          Frequency: "Every 5 years",
        },
        {
          Fire_Code_Reference_Number: "6.4.3.1.",
          Descriptions:
            "Hydrostatically test standpipe systems that have been modified, extended, or are being restored to use after a period of disuse exceeding one year",
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
