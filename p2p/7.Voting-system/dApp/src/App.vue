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
const showWinner = ref(false)

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
    voteStatus.value = "Processing vote..."
    await vote(selectedIndex.value)
    voteStatus.value = "You have successfully voted !"
    await delay(2000)
    voteStatus.value = ""
    isVoting.value = false
    loading.value = true
    await refreshData()
  } catch (error: any) {
    // Better error message extraction
    const errorMsg = error?.message || error?.toString() || "An unknown error occurred"
    
    if (errorMsg.includes('Already Voted') || errorMsg.includes('Already voted')) {
      voteStatus.value = "You have already voted."
    } else if (errorMsg.includes('Invalid proposal')) {
      voteStatus.value = "Invalid proposal ID."
    } else if (errorMsg.includes('revert') || errorMsg.includes('execution reverted')) {
      // Extract the revert reason if available
      const revertMatch = errorMsg.match(/revert (.+)/i) || errorMsg.match(/reason: (.+)/i)
      if (revertMatch && revertMatch[1]) {
        voteStatus.value = revertMatch[1]
      } else {
        voteStatus.value = "Transaction reverted. Please check your input."
      }
    } else {
      voteStatus.value = `Error: ${errorMsg}`
    }
    
    // Clear error message after 5 seconds
    setTimeout(() => {
      voteStatus.value = ""
    }, 5000)
  }
}

const displayWinner = () => {
  if (winner.value >= 0 && proposals.value && proposals.value[winner.value]) {
    showWinner.value = true
  }
}

const getWinnerName = () => {
  if (winner.value >= 0 && proposals.value && proposals.value[winner.value]) {
    return proposals.value[winner.value][0]
  }
  return ""
}

const getWinnerVotes = () => {
  if (winner.value >= 0 && proposals.value && proposals.value[winner.value]) {
    return proposals.value[winner.value][1]
  }
  return 0
}
</script>

<template>
  <header>
    <h1>Voting system</h1>
  </header>
  <div id="container">
    <h2 v-if="isVoting">Do you want to vote ?</h2>
    <template v-if="!loading">
      <div id="cards" v-for="(proposal, index) in proposals" :key="index">
        <Card
            v-if="!isVoting || (isVoting && selectedIndex === index)"
            :name="proposal[0]"
            :voteCount="proposal[1]"
            :index="index"
            :toVote="toVote"
            :winnerIndex="winner"
        />
      </div>
    </template>
    <p v-else>No proposals yet.</p>
    <div id="choice" v-if="isVoting">
      <button @click="voting">yes</button>
      <button @click="isVoting = false">no</button>
      <p :class="{ 'error': voteStatus.includes('error') || voteStatus.includes('Error') || voteStatus.includes('already') || voteStatus.includes('Invalid') || voteStatus.includes('revert'), 'success': voteStatus.includes('successfully') }">{{ voteStatus }}</p>
    </div>
    <div id="winner-section" v-if="!loading && !isVoting && proposals && proposals.length > 0">
      <button id="winner-btn" @click="displayWinner">Show Winning Proposal</button>
      <div v-if="showWinner" id="winner-display">
        <h3>🏆 Winning Proposal</h3>
        <p><strong>{{ getWinnerName() }}</strong></p>
        <p>with {{ getWinnerVotes() }} vote{{ getWinnerVotes() !== 1 ? 's' : '' }}</p>
        <button @click="showWinner = false">Close</button>
      </div>
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
#choice p.error {
  color: #e74c3c;
  font-weight: bold;
  margin-top: 10px;
}
#choice p.success {
  color: #27ae60;
  font-weight: bold;
  margin-top: 10px;
}
#winner-section {
  margin-top: 30px;
  text-align: center;
}
#winner-btn {
  padding: 12px 24px;
  font-size: 1.1rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
#winner-btn:hover {
  background-color: #2980b9;
}
#winner-display {
  margin-top: 20px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  border: 2px solid #27ae60;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}
#winner-display h3 {
  color: #27ae60;
  margin-bottom: 15px;
  font-size: 1.5rem;
}
#winner-display p {
  margin: 10px 0;
  font-size: 1.1rem;
}
#winner-display button {
  margin-top: 15px;
  padding: 8px 16px;
  background-color: #95a5a6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
#winner-display button:hover {
  background-color: #7f8c8d;
}
</style>
