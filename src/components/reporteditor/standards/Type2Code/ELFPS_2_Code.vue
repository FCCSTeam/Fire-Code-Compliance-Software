<template>
  <div>
    <!-- <div>
      <b-table striped hover :items="items"></b-table>
    </div> -->
    <div>
      <b-table fixed striped hover :items="items" >
        <template>
          <b-tr>
            <!-- <b-th > </b-th> -->
            <b-th colspan="3">Emergency Lighting Equipment</b-th>
          </b-tr>
        </template>
      </b-table>
    </div>
    <div>
      <b-table fixed striped hover :items="items2" >
        <template >
          <b-tr>
            <!-- <b-th > </b-th> -->
            <b-th colspan="3">Emergency Power System</b-th>
          </b-tr>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  name : 'ELFPS_2_Code',
  data() {
    return {
      items: [
        {
          Fire_Code_Reference_Number: "2.7.3.3. (1) & (2)",
          Descriptions:
            "Emergency lighting unit equipment shall be checked and inspected to ensure proper operation and maintenance. ",
          Frequency: "Monthly",
        },
        {
          Fire_Code_Reference_Number: "2.7.3.3. (3)(a)",
          Descriptions:
            "Emergency lighting unit equipment shall be tested to ensure that the emergency lights will function upon failure of the primary power supply.",
          Frequency: "Annually",
        },
        {
          Fire_Code_Reference_Number: "2.7.3.3. (3)(b)",
          Descriptions:
            "Emergency lighting unit equipment shall be tested to ensure that the unit will provide emergency lighting for the duration equal to the designed criteria under simulated power failure conditions.",
          Frequency: "Annually",
        },
        {
          Fire_Code_Reference_Number: "2.7.3.3. (4)",
          Descriptions:
            "After completion of the test required in Clause (3)(b), the charging conditions for voltage and current and the recovery period shall be tested to ensure that the charging system is in accordance with the manufacturer’s specifications",
          Frequency: "Annually",
        },
      ],
      items2: [
        {
          Fire_Code_Reference_Number: "6.7.1.1.",
          Descriptions:
            "Check all components of the system and operate the generator set under at least 50% of rated load for 30 min. ",
          Frequency: "Weekly",
        },
        {
          Fire_Code_Reference_Number: "6.7.1.1.",
          Descriptions:
            "Check and clean crankcase breathers, governors and linkages on emergency generators",
          Frequency: "Every 6 months",
        },
        {
          Fire_Code_Reference_Number: "6.7.1.1.",
          Descriptions:
            "Inspect and service generator set",
          Frequency: "Annually",
        },
        {
          Fire_Code_Reference_Number: "6.7.1.1.",
          Descriptions:
            "Check torque heads and valve adjustments for engines",
          Frequency: "Every 2 years",
        },
        {
          Fire_Code_Reference_Number: "6.7.1.1.",
          Descriptions:
            "Inspect and service injector nozzles and check valve adjustments on diesel engines",
          Frequency: "Every 3 years",
        },
        {
          Fire_Code_Reference_Number: "6.7.1.1.",
          Descriptions:
            "Check insulation of generator windings",
          Frequency: "Every 5 years",
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
