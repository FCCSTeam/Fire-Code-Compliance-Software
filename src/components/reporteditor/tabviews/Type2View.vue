<template>
  <div id="Type2View">
    <h1 class="pb-2">{{ recordBook.title }}</h1>

<div>
  <b-tabs content-class="mt-3">
    <b-tab v-for="(tab,index) in recordBook.tabs" :key="index" :title="tab">
        <component v-bind:is="'Type2_' + tab" :recordBook="recordBook"></component>
    </b-tab>
  </b-tabs>
</div>


</div>
</template>

<script>
import Type2_Weekly from "@/components/reporteditor/tabviews/tabs/Type2_Weekly.vue";
import Type2_Monthly from "@/components/reporteditor/tabviews/tabs/Type2_Monthly.vue";
import Type2_Locations from "@/components/reporteditor/tabviews/tabs/Type2_Locations.vue";
import Type2_Weekly_6_Monthly from "@/components/reporteditor/tabviews/tabs/Type2_Weekly_6_Monthly.vue";
import Type2_2_6_Monthly from "@/components/reporteditor/tabviews/tabs/Type2_2_6_Monthly.vue";

export default {
  components: {
    Type2_Weekly,
    Type2_Monthly,
    Type2_Locations,
    Type2_Weekly_6_Monthly,
    Type2_2_6_Monthly
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