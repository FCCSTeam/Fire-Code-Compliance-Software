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
          Fire_Code_Reference_Number: "7.1.1.6.(1)",
          Descriptions:
            "Maintain the automatic door openers in the high-rise stairwells where installed as per design specifications.",
          Frequency: "As Required",
        },
        {
          Fire_Code_Reference_Number: "7.1.1.6.(2)",
          Descriptions:
            "Check the keys required to recall elevators and to permit independent operation of each elevator in the approved box.",
          Frequency: "Monthly and As Required",
        },
        {
          Fire_Code_Reference_Number: "7.2.2.1.(1)",
          Descriptions:
            "Test the elevator door-opening devices operated by means of photo-electric cells to ensure that the devices become inoperative after the door has been held open for more than 20 s with the photo-electric cell covered.",
          Frequency: "Every 3 months",
        },
        {
          Fire_Code_Reference_Number: "7.2.2.1.(2)",
          Descriptions:
            "Test the key-operated switches located outside an elevator shaft to ensure that actuation of the switch will render the emergency stop switch in each car inoperative and bring all cars to the street floor or transfer lobby by cancelling all other calls after the car has stopped at the next floor at which it can make a normal stop.",
          Frequency: "Every 3 months",
        },
        {
          Fire_Code_Reference_Number: "7.2.2.1.(3)",
          Descriptions:
            "Test the key-operated switches in each elevator car to ensure that actuation of the switch will",
          Frequency: "Every 3 months",
        },
        {
          Fire_Code_Reference_Number: " ",
          Descriptions:
            "(a) enable the elevator to operate independently of other elevators,",
          Frequency: " ",
        },
        {
          Fire_Code_Reference_Number: " ",
          Descriptions:
            "(b) allow operation of the elevator without interference from floor call buttons,",
          Frequency: " ",
        },
        {
          Fire_Code_Reference_Number: " ",
          Descriptions:
            "(c) render door protective devices inoperative, and",
          Frequency: " ",
        },
        {
          Fire_Code_Reference_Number: " ",
          Descriptions:
            "(d) control the opening of power-operated doors only by continuous pressure on the door opening buttons or switches, to ensure that if the “OPEN” button or switch is released while the door is opening, the doors will automatically close.",
          Frequency: " ",
        },
        {
          Fire_Code_Reference_Number: "7.2.3.1.(1)",
          Descriptions:
            "Inspect the closures in vent openings into smoke shafts from each floor area sequentially.",
          Frequency: "Within Every 5 years",
        },
        {
          Fire_Code_Reference_Number: "7.2.3.1.(2)",
          Descriptions:
            "Inspect every closure in an opening to the outdoors at the top of a smoke shaft annually to ensure that it will open",
          Frequency: "Annually",
        },
        {
          Fire_Code_Reference_Number: "",
          Descriptions:
            "(a) manually from outside the building,",
          Frequency: " ",
        },
        {
          Fire_Code_Reference_Number: "",
          Descriptions:
            "(b) on a signal from the smoke or heat actuated device in the smoke shaft, and",
          Frequency: "",
        },
        {
          Fire_Code_Reference_Number: "",
          Descriptions:
            "(c) when a closure in an opening between a floor area and the smoke shaft opens.",
          Frequency: "",
        },
        {
          Fire_Code_Reference_Number: "7.2.3.1.(3)",
          Descriptions:
            "Inspect the elevators in an elevator shaft that is intended for use as a smoke shaft to ensure that on activation of the fire alarm system they will return to the street floor and remain inoperative.",
          Frequency: "Every 6 months",
        },
        {
          Fire_Code_Reference_Number: "7.2.3.1.(4)",
          Descriptions:
            "(c) when a closure in an opening between a floor area and the smoke shaft opens.",
          Frequency: "Annually",
        },
        {
          Fire_Code_Reference_Number: "7.2.4.1",
          Descriptions:
            "Inspect the controls for air-handling systems used for venting in the event of a fire to ensure that air is exhausted from each floor area to the outdoors as required.",
          Frequency: "Monthly",
        },
        {
          Fire_Code_Reference_Number: "7.3",
          Descriptions:
            "Maintain, inspect and test the smoke control equipment.",
          Frequency: "Monthly",
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
