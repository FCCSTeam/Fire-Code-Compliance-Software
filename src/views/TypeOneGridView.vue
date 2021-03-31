<!-- Page for Fire Department Access - Record Book -->
<template>
    <div>
        <button @click="$refs.childref1.toggleGrid()">Toggle Grid Visibility</button>
        <br>
        <button @click="$refs.childref1.exportFireDept()">Export Fire Dept Access</button>
        <br>
        <button @click="$refs.childref1.exportAllTypeOne()">Export All</button>

        <TypeOneGrid ref="childref1"></TypeOneGrid>
    </div>
  
</template>

<script>
import TypeOneGrid from '@/components/exporter/TypeOneGrid.vue'

export default {
    name: 'FireDeptAcc',
    components: { TypeOneGrid },
    data() {
        return {

        }
    }
}
</script>


<style>
    @import url(https://cdn.syncfusion.com/ej2/material.css);
</style>