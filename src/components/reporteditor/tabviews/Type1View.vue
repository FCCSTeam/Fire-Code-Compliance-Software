<template>
  <div id="Type1View">
    <h1 class="pb-2">{{ recordBook.title }}</h1>
    <!-- <p>{{recordBook.data}}</p> -->

<div>
  <b-tabs content-class="mt-3">
    <b-tab v-for="(tab,index) in recordBook.tabs" :key="index" :title="tab">
        <component v-bind:is="'Type1_' + tab" :recordBookData="recordBook.data"></component>
    </b-tab>
  </b-tabs>
</div>

  </div>
</template>

<script>
import Type1_Monthly from "@/components/reporteditor/tabviews/tabs/Type1_Monthly.vue";
import Type1_Locations from "@/components/reporteditor/tabviews/tabs/Type1_Locations.vue";

export default {
  components: {
    Type1_Monthly,
    Type1_Locations,
  },
  props: {
    recordBook: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getVariableName(variable) {
      return Object.keys({variable})[0]
    }
  }
};
</script>

<style>
</style>