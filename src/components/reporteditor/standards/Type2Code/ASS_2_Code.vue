<template>
  <div>
    <div>
      <b-table fixed striped hover :items="items"></b-table>
    </div>
    <div>
        <b-table :items2="items2"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  name : 'ASS_2_Code',
  data() {
    return {
      items: [
        {
          Fire_Code_Reference_Number: "6.5.3.1.",
          Descriptions:
            "Check that unsupervised sprinkler system control valves are open.",
          Frequency: "Weekly",
        },
        {
          Fire_Code_Reference_Number: "",
          Descriptions:
            "Exception: Electrically supervised valves in the open position.",
          Frequency: "",
        },
        {
          Fire_Code_Reference_Number: "6.5.3.3.",
          Descriptions:
            "Check that air pressure on dry pipe systems is being maintained",
          Frequency: "Weekly",
        },
        {
          Fire_Code_Reference_Number: "6.5.5.2.",
          Descriptions:
            "Test sprinkler alarms using alarm test connection",
          Frequency: "Monthly",
        },
        {
          Fire_Code_Reference_Number: "6.5.5.7.",
          Descriptions:
            "Test sprinkler supervisory transmitters and water flow devices",
          Frequency: "Every 2 months",
        },
        {
          Fire_Code_Reference_Number: "6.5.5.7.",
          Descriptions:
            "Test gate valve supervisory switches and other sprinkler and fire protection system supervisory devices",
          Frequency: "Every 6 months",
        },
        {
          Fire_Code_Reference_Number: "6.5.3.2.",
          Descriptions:
            "Check exposed sprinkler system pipe hangers",
          Frequency: "Annually",
        },
        {
          Fire_Code_Reference_Number: "6.5.3.5.",
          Descriptions:
            "Check all sprinkler heads",
          Frequency: "Annually",
        },
        {
          Fire_Code_Reference_Number: "6.5.4.1.",
          Descriptions:
            "Inspect auxiliary drains (drum drips) and dry pipe sprinkler system (each Fall)",
          Frequency: "Annually",
        },
        {
          Fire_Code_Reference_Number: "6.5.4.3.",
          Descriptions:
            "Inspect dry pipe priming level",
          Frequency: "Annually",
        },
        {
          Fire_Code_Reference_Number: "6.5.4.4.",
          Descriptions:
            "Remove plugs and caps on fire department connections and inspect for wear, rust or obstructions",
          Frequency: "Annually",
        },
        {
          Fire_Code_Reference_Number: "6.5.5.3",
          Descriptions:
            "Test water flow on wet sprinkler systems using the most remote test connection",
          Frequency: "Annually",
        },
        {
          Fire_Code_Reference_Number: "6.5.5.4.",
          Descriptions:
            "Trip test dry pipe system",
          Frequency: "Annually",
        },
        {
          Fire_Code_Reference_Number: "6.5.5.5.",
          Descriptions:
            "Test flow of water supply using main drain valve",
          Frequency: "Annually",
        },
        {
          Fire_Code_Reference_Number: "6.5.5.4. (4)",
          Descriptions:
            "Trip test dry pipe system with the control valve  open",
          Frequency: "Every 3 years",
        },
        {
          Fire_Code_Reference_Number: "6.5.4.2.",
          Descriptions:
            "Inspect dry pipe system for obstructions and flush where necessary",
          Frequency: "Every 15 years",
        },
        {
          Fire_Code_Reference_Number: "6.5.3.4.",
          Descriptions:
            "Check dry pipe valve rooms or enclosures during freezing weather",
          Frequency: "As required",
        },
        {
          Fire_Code_Reference_Number: "6.5.4.1.",
          Descriptions:
            "Inspect auxiliary drains to prevent freezing",
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
