<template>
    <div>
        <!-- {{console.log(dats.city)}} -->
        <ul v-for='(item,index) in dats' :key="index">
            <li>{{item.title}}</li>
            <block v-for='(v,i) in item.lists' :key="i">
              <li>{{v}}</li>
            </block>
        </ul>

    </div>
</template>

<script>
export default {
  props: {
    dats: {
      type: Object
    }
  }
};
</script>

<style>
.lists{
  display: flex;
}
</style>
