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
  name : 'FWS_2_Code',
  data() {
    return {
      items: [
        {
          Fire_Code_Reference_Number: "6.6.3.2",
          Descriptions:
            "Check fire pump room temperature during freezing weather",
          Frequency: "Daily",
        },
        {
          Fire_Code_Reference_Number: "6.6.2.2. to 6.6.2.4.",
          Descriptions:
            "Check tank heating equipment and water temperature of fire protection water tanks during freezing weather",
          Frequency: "Daily",
        },
        {
          Fire_Code_Reference_Number: "6.6.1.2.",
          Descriptions:
            "Inspect valves controlling fire protection water supply;",
          Frequency: "Weekly",
        },
        {
          Fire_Code_Reference_Number: " ",
          Descriptions: "Electrically supervised valves",
          Frequency: "Every 6 Months",
        },
        {
          Fire_Code_Reference_Number: "6.6.3.1.",
          Descriptions: "Check water level in fire pump reservoirs",
          Frequency: "Weekly",
        },
        {
          Fire_Code_Reference_Number: "6.6.3.3. & 6.6.3.4.",
          Descriptions: "Operate and inspect fire pump",
          Frequency: "Weekly - Monthly",
        },
        {
          Fire_Code_Reference_Number: "6.6.2.8.",
          Descriptions: "Inspect water level in gravity tanks",
          Frequency: "Monthly",
        },
        {
          Fire_Code_Reference_Number: "6.6.2.1.",
          Descriptions: "Inspect fire protection water supply tanks",
          Frequency: "Annually",
        },
        {
          Fire_Code_Reference_Number: "6.6.2.7.",
          Descriptions: "Inspect cathodic protection on fire protection water supply tanks",
          Frequency: "Annually",
        },
        {
          Fire_Code_Reference_Number: "6.6.2.9.",
          Descriptions: "Inspect all parts of gravity tanks",
          Frequency: "Annually",
        },
        {
          Fire_Code_Reference_Number: "6.6.3.5.",
          Descriptions: "Test fire pump at full rated capacity",
          Frequency: "Annually",
        },
        {
          Fire_Code_Reference_Number: "6.6.5.1.",
          Descriptions: "Inspect all fire hydrants",
          Frequency: "Annually",
        },
        {
          Fire_Code_Reference_Number: "6.6.5.7.",
          Descriptions: "Inspect all fire hydrant water flow",
          Frequency: "Annually",
        },
        {
          Fire_Code_Reference_Number: "6.6.2.5.",
          Descriptions: "Check for corrosion on fire protection water supply tanks",
          Frequency: "Every 2 years",
        },
        {
          Fire_Code_Reference_Number: "6.6.2.6.",
          Descriptions: "Inspect fire protection water tanks connected to non-potable water supply for sediment",
          Frequency: "Every 2 Years",
        },
        {
          Fire_Code_Reference_Number: "6.6.2.6.",
          Descriptions: "Inspect fire protection water tanks connected to potable water supply for sediment",
          Frequency: "Every 5 years",
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
