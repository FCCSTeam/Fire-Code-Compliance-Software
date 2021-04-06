<template>
  <div>
    <div>
      <h3>
        Building Name:
      </h3>
      <h3>
        Fire Alarm Monthly Testing Record
      </h3>
      <h3>
        DEVICE TESTING - LEGEND AND NOTES
      </h3>
      <h3>
        (Reference : Clauses 6.6.4.1.3, 6.6.4.3.1, 6.6.4.5.1, 6.6.8.1.1,
        6.6.8.2.2, 6.6.8.2.4,
      </h3>
      <h3>
        CAN/ULC - S536 - 97, Standard for the Inspection and Testing of Fire
        Alarm Systems)
      </h3>
    </div>
    <div>
      <b-card>
      <b-table fixed striped hover :items="items">
        <template>
          <b-tr>
            <!-- <b-th > </b-th> -->
            <b-th colspan="4">Service Equipment, Ducts and Chimneys</b-th>
          </b-tr>
        </template>
      </b-table>
      </b-card>
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
    <div >
      <p class="notes">
        <b>Notes</b>
        <br />
        <b>1</b> Smoke detector sensitivity measurement and cleaning date should
        be recorded in the remark column.
        <br />
        <b>2</b> Status Change, including time delay, should be recorded in the
        remark column.
        <br />
        <b>3</b> Duct smoke detector pressure differential should be confirmed
        and recorded in the remark column.
        <br />
        <b>4</b> Time delay setting of water flow switch should be recorded in
        the remark column.
        <br />
        <b>5</b> Sprinkler supervisory switches cause trouble condition to be
        annunciated but not an alarm condition.
        <br />
        <b>6</b> Upper and lower pressure setting of supervisory devices should
        be recorded in the remark column.
        <br />
        <b>7</b> Low temperature setting should be recorded in the remark
        column.
        <br />
        <b>8</b> Identify the specific ancillary devices in the remark column.
        <br />
        <b>9</b> Identify date fire detector changed.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name : 'AFAS_3_Code_Legends',
      items: [
        {
          Device: "FACP",
          Description: "Fire Alarm Control Panel",
          Type: "",
          Model_NO: "",
        },
        {
          Device: "M",
          Description: "Manual Pull Station",
          Type: "",
          Model_NO: "",
        },
        {
          Device: "RHT",
          Description: "Heat Detector, Restorable (Note 9)",
          Type: "",
          Model_NO: "",
        },
        {
          Device: "HT",
          Description: "Heat Detector, Non-Restorable (Note 9)",
          Type: "",
          Model_NO: "",
        },
        {
          Device: "S",
          Description: "Smoke Detector (Notes 1, 2, 9)",
          Type: "",
          Model_NO: "",
        },
        {
          Device: "RI",
          Description: "Remote Indicator Unit",
          Type: "",
          Model_NO: "",
        },
        {
          Device: "DS",
          Description: "Duct Smoke Detector (Notes 1, 3, 9)",
          Type: "",
          Model_NO: "",
        },
        {
          Device: "OTD",
          Description: "Other Type of Detector",
          Type: "",
          Model_NO: "",
        },
        {
          Device: "SFD",
          Description: "Supporting Field Device (Monitor)",
          Type: "",
          Model_NO: "",
        },
        {
          Device: "FS",
          Description: "Sprinkler Flow Switch (Note 4)",
          Type: "",
          Model_NO: "",
        },
        {
          Device: "SS",
          Description: "Sprinkler Supervisory Device (Note 5)",
          Type: "",
          Model_NO: "",
        },
        {
          Device: "OSD",
          Description: "Other Supervisory Devices (Low Pressure, Low Water, ",
          Type: "",
          Model_NO: "",
        },
        {
          Device: "",
          Description: "Low Temperature, Power Loss, etc.)  (Notes 6, 7)",
          Type: "",
          Model_NO: "",
        },
        {
          Device: "EM",
          Description: "Fault Isolation Module",
          Type: "",
          Model_NO: "",
        },
        {
          Device: "B",
          Description: "Bell",
          Type: "",
          Model_NO: "",
        },
        {
          Device: "H",
          Description: "Horn",
          Type: "",
          Model_NO: "",
        },
        {
          Device: "V",
          Description: "Visual Signal Appliance",
          Type: "",
          Model_NO: "",
        },
        {
          Device: "SP",
          Description: "Cone Type Speaker",
          Type: "",
          Model_NO: "",
        },
        {
          Device: "HSP",
          Description: "Horn Type Speaker",
          Type: "",
          Model_NO: "",
        },
        {
          Device: "AD",
          Description: "Ancillary Device (Note 8)",
          Type: "",
          Model_NO: "",
        },
        {
          Device: "ET",
          Description: "Emergency Telephone",
          Type: "",
          Model_NO: "",
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
p.notes{
  padding-left: 50px;
}
h3 {
  padding-left: 50px;
}

</style>
