// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.30;

/**
 * @title BasicContract
 * @dev A simple contract demonstrating basic ownership and whitelist functionality
 * @notice This contract allows the owner to manage a whitelist of addresses
 */
contract BasicContract {
    /// @notice The address of the contract owner
    /// @dev Only the owner can modify the whitelist
    address public owner;

    /// @notice Mapping to track whitelisted addresses
    /// @dev Returns true if an address is whitelisted, false otherwise
    mapping(address => bool) public whitelist;

    /**
     * @dev Constructor sets the deployer as the initial owner and whitelists them
     * @notice The contract deployer becomes the owner and is automatically whitelisted
     */
    constructor() {
        owner = msg.sender;
        whitelist[msg.sender] = true;
    }

    /**
     * @dev Modifier to restrict function access to the contract owner only
     * @notice Reverts the transaction if called by any address other than the owner
     */
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    /**
     * @notice Transfers ownership of the contract to a new address
     * @dev This function has no access control - any address can call it
     * @param newOwner The address to transfer ownership to
     * @notice This function lacks access control and should be restricted in production
     */
    function setOwner(address newOwner) public onlyOwner {
        owner = newOwner;
    }

    /**
     * @notice Adds an address to the whitelist
     * @dev Only the contract owner can call this function
     * @param user The address to add to the whitelist
     * @custom:security This function is protected by the onlyOwner modifier
     */
    function addToWhitelist(address user) public onlyOwner {
        whitelist[user] = true;
    }

    /**
     * @notice Removes an address from the whitelist
     * @dev Only the contract owner can call this function
     * @param user The address to remove from the whitelist
     * @custom:security This function is protected by the onlyOwner modifier
     */
    function removeFromWhitelist(address user) public onlyOwner {
        whitelist[user] = false;
    }

    /**
     * @notice Checks if an address is whitelisted
     * @dev This is a view function that doesn't modify state
     * @param user The address to check
     * @return bool True if the address is whitelisted, false otherwise
     */
    function isWhitelisted(address user) public view returns (bool) {
        return whitelist[user];
    }
}
