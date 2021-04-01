<template>
  <div id="Type3View">
    <h1 class="pb-2">{{ recordBook.title }}</h1>

<div>
  <b-tabs content-class="mt-3">
    <b-tab v-for="(tab,index) in recordBook.tabs" :key="index" :title="tab">
        <component v-bind:is="'Type3_' + tab" :recordBook="recordBook"></component>
    </b-tab>
  </b-tabs>
</div>


</div>
</template>

<script>
import Type3_Monthly from "@/components/reporteditor/tabviews/tabs/Type3_Monthly.vue";
import Type3_Locations from "@/components/reporteditor/tabviews/tabs/Type3_Locations.vue";
import Type3_Monthly_Year from "@/components/reporteditor/tabviews/tabs/Type3_Monthly_Year.vue";
import Type3_Devices from "@/components/reporteditor/tabviews/tabs/Type3_Devices.vue";


export default {
  components: {
    Type3_Monthly,
    Type3_Locations,
    Type3_Monthly_Year,
    Type3_Devices
  },
  props: {
    recordBook: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>