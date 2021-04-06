<template>
  <div>
    <div>
      <h3>
        Abstracts from CAN/ULC-S-536-97, Standard for the Inspection and Testing of Fire Alarm Systems.
      </h3>
      <h3>
        Section 5 - Periodic Inspections and Tests - Daily and Monthly
      </h3>
    </div>
    <div>
      <b-table fixed striped hover :items="items">
        <template>
          <b-tr>
            <!-- <b-th > </b-th> -->
            <b-th colspan="3">Service Equipment, Ducts and Chimneys</b-th>
          </b-tr>
        </template>
      </b-table>
    </div>
    <div>
      <b-table fixed striped hover :items="items2">
        <template>
          <b-tr>
            <!-- <b-th > </b-th> -->
            <b-th colspan="3">Fire Alarm System</b-th>
          </b-tr>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AFAS_3_Code_Tests',
  data() {
    return {
      items: [
        {
          Duration: "Daily",
          Inspections:
            "1. Status of the primary and remote trouble signal indicators.",
          Testing: "",
        },
        {
          Duration: "",
          Inspections:
            "2. Status of the primary 'power-on' or equivalent indicator.",
          Testing: "",
        },
        {
          Duration: "Monthly",
          Inspections:
            "While on emergency power supply and on a rotational basis",
          Testing: "While on emergency power supply and on a rotational basis",
        },
        {
          Duration: "",
          Inspections:
            "1. Confirm an alert signal or an alarm signal to minimum of one zone.",
          Testing: "1. Operate one initiating field device or manual pull station",
        },
        {
          Duration: "",
          Inspections:
            "2. Determine the tested device annunciated correctly at the primary annunciator.",
          Testing: "2. Operation of the common audible and visual trouble signals",
        },
        {
          Duration: "",
          Inspections:
            "3. Battery terminals are clean and lubricated.",
          Testing: "3. Correct indication of one emergency telephone for two-way communication at the control unit.",
        },
        {
          Duration: "",
          Inspections:
            "4. Battery clamps are secure.",
          Testing: "4. Confirm the voice paging capability to one zone.",
        },
        {
          Duration: "",
          Inspections:
            "5. Electrolyte level and specific gravity are as specified by the manufacturer.",
          Testing: "",
        },
        
      ],
      items2: [
        {
          Fire_Code_Reference_Number: "6.3.2.1.",
          Descriptions: "Check fire alarm AC power lamp and trouble light",
          Frequency: "Daily",
        },
        {
          Fire_Code_Reference_Number: "6.3.2.1.",
          Descriptions: "Check trouble conditions",
          Frequency: "Daily",
        },
        {
          Fire_Code_Reference_Number: "6.3.2.1.",
          Descriptions:
            "Check all fire alarm components including standby power batteries",
          Frequency: "Monthly",
        },
        {
          Fire_Code_Reference_Number: "6.3.2.1.",
          Descriptions: "Test the whole fire alarm system",
          Frequency: "Annually",
        },
        {
          Fire_Code_Reference_Number: "6.3.2.1.",
          Descriptions:
            "Test fire alarm system by persons acceptable to the authority having jurisdiction for service",
          Frequency: "Annually",
        },
        {
          Fire_Code_Reference_Number: "6.3.2.2.",
          Descriptions: "Check central alarm and control facility",
          Frequency: "Daily",
        },
        {
          Fire_Code_Reference_Number: "6.3.2.2.",
          Descriptions:
            "Inspect and test one fire alarm initiating zone on a rotating basis while on the back-up power supply.",
          Frequency: "Monthly",
        },
        {
          Fire_Code_Reference_Number: "6.3.2.4.",
          Descriptions: "Inspect and test the voice communication",
          Frequency: "Monthly",
        },
        {
          Fire_Code_Reference_Number: "6.3.2.5.",
          Descriptions:
            "Test the voice communication (public address) on a rotational zone",
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
