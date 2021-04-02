<!-- Page for Fire Department Access - Record Book -->
<template>
    <div>
        <button @click="$refs.childref1.toggleGrid()">Toggle Grid Visibility</button>
        <br>
        <button @click="$refs.childref1.exportFireDept()">Export Fire Dept Access</button>
        <br>
        <button @click="$refs.childref1.exportAllTypeOne()">Export All</button>
        <br>
        <button @click="openPicker()"> Upload Your File to Google Drive </button>

        <TypeOneGrid ref="childref1"></TypeOneGrid>
    </div>
  
</template>

<script>
import TypeOneGrid from '@/components/exporter/TypeOneGrid.vue'
import { uploadFile, callPicker } from '@/js/filestructure/UpdateFile.js'

export default {
    name: 'FireDeptAcc',
    components: { TypeOneGrid },
    data() {
        return {

        }
    },
    methods: {
        openPicker() 
        {
            callPicker()
        }

    },
}
</script>


<style>
    @import url(https://cdn.syncfusion.com/ej2/material.css);
</style>