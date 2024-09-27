<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{
  name: string,
  voteCount: BigInt,
  index: number
  toVote: (index: number) => void
  winnerIndex: number
}>()

const backgroundColor = computed(() => {
  return props.index === props.winnerIndex ? 'green' : 'transparent'
})

const textColor = computed(() => {
  return props.index === props.winnerIndex ? 'white' : undefined
})

</script>

<template>
  <div :style="{ backgroundColor: backgroundColor, color: textColor }" id="card" @click="toVote(index)">
    <p>{{ name }}</p>
    <p>{{ voteCount }}</p>
  </div>
</template>

<style scoped>
#card {
  width: 60%;
  border: solid 1px grey;
  margin: 10px;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#card:hover {
  background-color: #282828 !important;
  color: white !important;
  cursor: pointer;
}
p {
  font-size: 2rem;
}
</style>