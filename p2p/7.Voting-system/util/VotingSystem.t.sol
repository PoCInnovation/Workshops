pragma solidity 0.8.26;

import "forge-std/Test.sol";
import "../src/VotingSystem.sol";

contract VotingSystemTest is Test {
    VotingSystem public votingSystem;
    string[] public proposalNames;

    function setUp() public {
        proposalNames = new string[](3);
        proposalNames[0] = "Proposal 1";
        proposalNames[1] = "Proposal 2";
        proposalNames[2] = "Proposal 3";

        votingSystem = new VotingSystem(proposalNames);
    }

    function testProposalCreation() public view {
        for (uint i = 0; i < proposalNames.length; i++) {
            (string memory name, uint voteCount) = votingSystem.proposals(i);
            assertEq(name, proposalNames[i]);
            assertEq(voteCount, 0);
        }
    }

    function testProposalCount() public view {
        uint proposalCount = 0;
        while (true) {
            try votingSystem.proposals(proposalCount) returns (string memory, uint) {
                proposalCount++;
            } catch {
                break;
            }
        }
        assertEq(proposalCount, proposalNames.length);
    }
}