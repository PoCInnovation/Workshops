import {createPublicClient, createWalletClient, http} from 'viem'
import { localhost } from 'viem/chains'
import { abi } from "./abi"
import {privateKeyToAccount} from "viem/accounts";

let address = null
let account = null

if (import.meta.env.VITE_ADDRESS) {
    address = import.meta.env.VITE_ADDRESS
}

if (import.meta.env.VITE_PRIVATE_KEY_ACCOUNT) {
    account = privateKeyToAccount(import.meta.env.VITE_PRIVATE_KEY_ACCOUNT)
}

const chain = {
    ...localhost,
    id: 31337
}

const publicClient = createPublicClient({
    chain,
    transport: http()
})

const client = createWalletClient({
    chain,
    transport: http()
})

export async function win() {
    try {
        const result = await publicClient.readContract({
            address,
            abi,
            functionName: "winningProposal",
        })
        return Number(result)
    } catch (error) {
        return null
    }
}

async function retrieveProposal(id: number) {
    return await publicClient.readContract({
        address,
        abi,
        functionName: 'proposals',
        args: [id]
    })
}

export async function getProposals() {
    const proposals = [];
    let proposalCount = 0;

    while (true) {
        try {
            const proposal = await retrieveProposal(proposalCount)
            proposals.push(proposal)
            proposalCount++
        } catch (error) {
            break;
        }
    }
    return proposals;
}

export async function vote(id: number) {
    const { request } = await publicClient.simulateContract({
        account,
        address,
        abi,
        functionName: 'vote',
        args: [id]
    }) as { request: any }
    await client.writeContract(request)
}
