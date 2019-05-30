<template>
    <Mylists :dats='dats'></Mylists>
</template>

<script>
import Mylists from '../../components/lists/lists';
import data from '../../data/data.json'
export default {
  components: {
      Mylists
  },
  created() {},
  methods: {},
  data() {
    return {
        dats:data.city
    };
  }
};
</script>

<style>
</style>
