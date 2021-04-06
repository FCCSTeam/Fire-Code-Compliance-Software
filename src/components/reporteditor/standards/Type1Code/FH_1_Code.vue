<template>
  <div>
    <div>
      <b-table fixed striped hover :items="items"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  name : "FH_1_Code",
  data() {
    return {
      items: [
        {
          Fire_Code_Reference_Number: "2.4.1.1.(1) ",
          Descriptions:
            "Control the combustible materials in quantities or locations that may constitute a fire hazard.",
          Frequency: "As required",
        },
        {
          Fire_Code_Reference_Number: "2.4.1.2.(1)  ",
          Descriptions:
            "Prohibit the combustible materials (other than those for which the location, room or space is designed) in any part of an elevator shaft, ventilation shaft or means of egress.",
          Frequency: "As required",
        },
        {
          Fire_Code_Reference_Number: "2.4.1.6. & 2.4.1.9.",
          Descriptions:
            "Deposit greasy or oily rags or materials subject to spontaneous heating in a metal receptacle fitted with a self-closing lid or removed from the premises.",
          Frequency: "As required",
        },
        {
          Fire_Code_Reference_Number: "2.4.1.7.",
          Descriptions:
            "Clean the lint traps in laundry equipment to prevent the accumulation of lint that creates an undue fire hazard.",
          Frequency: "As required",
        },
        {
          Fire_Code_Reference_Number: "2.4.6.1",
          Descriptions:
            "Remove the temporary electrical wiring where it presents a fire hazard.",
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
