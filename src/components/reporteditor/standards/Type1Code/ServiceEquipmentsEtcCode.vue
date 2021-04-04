<template>
  <div>
    <!-- <div>
      <b-table striped hover :items="items"></b-table>
    </div> -->
    <div>
      <b-table fixed striped hover :items="items">
        <template #thead-top="data">
          <b-tr>
            <!-- <b-th > </b-th> -->
            <b-th colspan="3">Service Equipment, Ducts and Chimneys</b-th>
          </b-tr>
        </template>
      </b-table>
    </div>
    <div>
      <b-table fixed striped hover :items="items2" >
        <template #thead-top="data">
          <b-tr>
            <!-- <b-th > </b-th> -->
            <b-th colspan="3">Smoke Venting</b-th>
          </b-tr>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          Fire_Code_Reference_Number: "2.6.1.4.",
          Descriptions:
            "Check hoods, filters and ducts subject to accumulation of combustible deposits and clean as necessary",
          Frequency: "Weekly",
        },
        {
          Fire_Code_Reference_Number: "2.2.3.5.",
          Descriptions:
            "Inspect all fire dampers and fire stop flaps",
          Frequency: "Annually or approved schedule",
        },
        {
          Fire_Code_Reference_Number: "2.6.1.5.",
          Descriptions:
            "Inspect chimneys, flues and flue pipes and clean as necessary",
          Frequency: "Annually",
        },
        {
          Fire_Code_Reference_Number: "2.6.1.8.",
          Descriptions:
            "Inspect disconnect switch for mechanical air conditioning and ventilation",
          Frequency: "Annually",
        },
        {
          Fire_Code_Reference_Number: "7.2.3.1.",
          Descriptions:
            "Inspect controls for air-handling systems used for venting",
          Frequency: "Annually",
        },
      ],
      items2: [
        {
          Fire_Code_Reference_Number: "2.8.2.1. (1)(g)",
          Descriptions:
            "Maintenance of building facilities provided for the safety of occupants",
          Frequency: "Every 3 months",
        },
        {
          Fire_Code_Reference_Number: "7.3.1.2. & 7.3.1.3.",
          Descriptions:
            "1. Verify the smoke venting system ",
          Frequency: "",
        },
        {
          Fire_Code_Reference_Number: "",
          Descriptions:
            "2.  Verify all damper positions in accordance with the intended operation either closed or open as shown in the schematic diagram.",
          Frequency: "",
        },
        {
          Fire_Code_Reference_Number: "",
          Descriptions:
            "3.  Maintain dampers in the smoke venting system and those on the outdoor air intakes to the air handling units.",
          Frequency: "",
        },
        {
          Fire_Code_Reference_Number: "",
          Descriptions:
            "4.  Verify the preset fan speed for smoke venting upon activation. ",
          Frequency: "",
        },
        {
          Fire_Code_Reference_Number: "",
          Descriptions:
            "5.  Verify all air handling units shutdown during the fire alarm test as per design specifications.",
          Frequency: "",
        },
        {
          Fire_Code_Reference_Number: "",
          Descriptions:
            "6.  Verify that all dampers returns to the normal position upon completion of the test.",
          Frequency: "",
        },
      ]
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
