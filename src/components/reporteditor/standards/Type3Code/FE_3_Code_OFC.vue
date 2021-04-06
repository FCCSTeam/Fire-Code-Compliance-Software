<template>
  <div>
    <div>
      <h2>OFC SECTION 6.2 PORTABLE EXTINGUISHERS</h2>
      <h3>Subsection 6.2.7. Inspection, Testing and Maintenance</h3>
      <p>
        6.2.7.1. Maintenance and <b>testing</b> of portable extinguishers shall
        be in conformance with NFPA 10, “Portable Fire Extinguishers”.
      </p>
      <h3>Examination</h3>
      <p>6.2.7.2. Portable extinguishers shall be <b>inspected</b> monthly.</p>
      <h3>Defective Extinguishers</h3>
      <p>
        6.2.7.3. Portable extinguishers having defects shall be repaired or
        recharged where necessary.
      </p>
      <h3>Tags</h3>
      <p>
        6.2.7.4. (1) Each portable extinguisher shall have a tag securely
        attached to it showing the maintenance or recharge date, the servicing
        agency and the signature of the person who performed the service.
      </p>
      <p>
        (2)  Sentence (1) does not apply where other <b>approved</b> records are
        maintained that show the maintenance or recharge date, the servicing
        agency and the signature of the person who performed the service.
      </p>
      <h3>Maintenance Records</h3>
      <p>
        6.2.7.5. A permanent record containing the maintenance date, the
        examiner’s name and a description of any maintenance work or hydrostatic
        <b>testing</b>
      </p>
      <h3>Maintenance after use</h3>
      <p>
        6.2.7.6. Portable extinguishers shall be replaced and recharged after
        use in conformance with instructions given on the extinguisher
        nameplate.
        <br />
        6.2.7.7. Extinguisher shells, cartridges or cylinders that show leakage
        or permanent distortion in excess of specified limits or that rupture
        shall be removed from service
        <br />
        6.2.7.8. Hydrostatic pressure <b>tests</b> shall be conducted at the
        original test pressure as stated on the nameplate.
      </p>
      <h3>Test labels</h3>
      <p>
        6.2.7.9. (1) Where a portable extinguisher is <b>tested</b>, a label
        shall be fixed to the extinguisher after <b>testing</b> that indicates
        the month and year the hydrostatic pressure test was performed, the test
        pressure used and the name of the person or agency performing the test.
        <br />
        (2) Sentence (1) does not apply where a permanent record of the
        <b>test</b> is kept and is available to the <b>fire department</b>.
      </p>
    </div>
    <div>
      <b-table fixed striped hover :items="items"></b-table>
    </div>
    <div>
        <p>Prepared by Ken Wong, P.Eng. SFPE.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FE_3_Code_OFC',
  data() {
    return {
      items: [
        {
          Fire_Code_Reference_Number: "6.2.7.2.",
          Descriptions: "Inspect and initial ",
          Frequency: "Monthly",
        },
        {
          Fire_Code_Reference_Number: "6.2.7.1.",
          Descriptions: "Subject to maintenance",
          Frequency: "Annually",
        },
        {
          Fire_Code_Reference_Number: "6.2.7.1.",
          Descriptions:
            "Hydrostatically test carbon dioxide and water type extinguishers",
          Frequency: "Every 5 years",
        },
        {
          Fire_Code_Reference_Number: "6.2.7.1.",
          Descriptions:
            "Purge, refill and pressurize all dry chemical type extinguishers",
          Frequency: "Every 6 years",
        },
        {
          Fire_Code_Reference_Number: "6.2.7.1.",
          Descriptions: "Hydrostatically test dry chemical",
          Frequency: "Every 12 years",
        },
        {
          Fire_Code_Reference_Number: "6.2.7.6. & 6.2.7.1.",
          Descriptions:
            "Recharge fire extinguishers after use or as indicated by an inspection or when performing maintenance",
          Frequency: "As Required",
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
