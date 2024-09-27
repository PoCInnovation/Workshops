<script setup lang="ts">
import { win, getProposals, vote } from "./interact"
import { ref, onMounted } from 'vue'
import Card from "@/components/Card.vue";

const winner = ref<number>(-1 )
const proposals = ref()
const loading = ref(true)
const isVoting = ref(false)
const selectedIndex = ref<number>(-1)
const voteStatus = ref<string>('')

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const refreshData = async () => {
  proposals.value = await getProposals()
  winner.value = await win()
  loading.value = false
  console.log(proposals.value)
}

onMounted(async () => {
  if (import.meta.env.VITE_ADDRESS) {
    await refreshData()
  }
})

const toVote = (index: number) => {
  isVoting.value = true;
  selectedIndex.value = index;
}

const voting = async () => {
  try {
    await vote(selectedIndex.value)
    voteStatus.value = "You have successfully voted !"
    await delay(2000)
    voteStatus.value = ""
    isVoting.value = false
    loading.value = true
    await refreshData()
  } catch (error) {
    if (error.message.includes('Already voted.')) {
      voteStatus.value = "You have already voted."
    } else {
      voteStatus.value = "Internal network error."
    }
  }
}
</script>

<template>
  <header>
    <h1>Voting system</h1>
  </header>
  <div id="container">
    <h2 v-if="isVoting">Do you want to vote ?</h2>
    <div id="cards" v-if="!loading" v-for="(proposal, index) in proposals">
      <Card
          v-if="!isVoting || (isVoting && selectedIndex === index)"
          :name="proposal[0]"
          :voteCount="proposal[1]"
          :index="<number>index"
          :toVote="toVote"
          :winnerIndex="winner"
      />
    </div>
    <p v-else>No proposals yet.</p>
    <div id="choice" v-if="isVoting">
      <button @click="voting">yes</button>
      <button @click="isVoting = false">no</button>
      <p>{{ voteStatus }}</p>
    </div>
  </div>
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
}
h1 {
  font-size: 3rem;
  font-weight: bold;
}
h2 {
  font-size: 1.8rem;
}
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
}
#cards {
  display: flex;
  width: 100vw;
  justify-content: center;
}
button {
  padding: 10px;
  padding-inline: 20px;
  margin: 10px;
  font-size: 1rem;
}
#choice {
  text-align: center;
}
</style>
