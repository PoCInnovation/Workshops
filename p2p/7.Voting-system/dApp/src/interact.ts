import {createPublicClient, createWalletClient, http} from 'viem'
import { localhost } from 'viem/chains'
import { abi } from "./abi"
import {privateKeyToAccount, type PrivateKeyAccount} from "viem/accounts";
import type { Address } from 'viem'

let address: Address | null = null
let account: PrivateKeyAccount | null = null

if (import.meta.env.VITE_ADDRESS) {
    address = import.meta.env.VITE_ADDRESS as Address
}

if (import.meta.env.VITE_PRIVATE_KEY_ACCOUNT) {
    account = privateKeyToAccount(import.meta.env.VITE_PRIVATE_KEY_ACCOUNT as `0x${string}`)
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
    if (!address) return null;
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
    if (!address) throw new Error("Contract address not set");
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
    let hasMoreProposals = true;

    while (hasMoreProposals) {
        try {
            const proposal = await retrieveProposal(proposalCount)
            proposals.push(proposal)
            proposalCount++
        } catch (error) {
            hasMoreProposals = false;
        }
    }
    return proposals;
}

export async function vote(id: number) {
    if (!address || !account) {
        throw new Error("Contract address or account not configured");
    }
    try {
        const { request } = await publicClient.simulateContract({
            account,
            address,
            abi,
            functionName: 'vote',
            args: [id]
        }) as { request: any }
        await client.writeContract(request)
    } catch (error: any) {
        // Extract error message from viem error
        let errorMessage = "An error occurred while voting.";
        
        if (error?.shortMessage) {
            errorMessage = error.shortMessage;
        } else if (error?.message) {
            errorMessage = error.message;
        } else if (error?.cause?.message) {
            errorMessage = error.cause.message;
        }
        
        // Check for specific revert messages
        if (errorMessage.includes("Already Voted") || errorMessage.includes("Already voted")) {
            throw new Error("Already Voted.");
        }
        
        if (errorMessage.includes("Invalid proposal id") || errorMessage.includes("invalid proposal")) {
            throw new Error("Invalid proposal ID.");
        }
        
        // Throw with the extracted message
        throw new Error(errorMessage);
    }
}
