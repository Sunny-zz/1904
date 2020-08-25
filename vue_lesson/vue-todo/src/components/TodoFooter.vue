<template>
  <div>
    <span>{{activeNum}} {{activeNum === 1 ? 'item' : 'items'}} left</span>
    <button @click="$emit('change-type','all')" :class="type === 'all' ? 'color' : ''">all</button>
    <button @click="$emit('change-type','active')" :class="type === 'active' ? 'color' : ''">active</button>
    <button
      @click="$emit('change-type','completed')"
      :class="type === 'completed' ? 'color' : ''"
    >completed</button>
  </div>
</template>

<script>
export default {
  name: 'TodoFooter',
  props: ['activeNum', 'type']
}
</script>

<style>
.color {
  color: red;
}
</style>
