# Solidity Essentials for Create an ERC-20 Workshop

## Introduction

**Solidity** is a **programming language** specifically **designed for developing smart contracts on the Ethereum blockchain**. Understanding Solidity is crucial for creating **ERC-20 tokens**. Here's a summary of the key Solidity concepts you'll need to know.

## Contracts

- **Contracts**: The building blocks of Ethereum smart contracts.
  - [Solidity by Example - Hello World](https://solidity-by-example.org/hello-world/)

## Data Types and State Variables

- **Data Types**: Essential types include `uint`, `address`, `string`, and `bool`.
  - [Solidity by Example - Data Types](https://solidity-by-example.org/primitives/)
- **State Variables**: Hold data across function calls, stored on the blockchain.
  - [Solidity by Example - Variables](https://solidity-by-example.org/variables/)

## Visibility Modifiers

- **public**: Can be accessed internally and externally.
- **internal**: Accessible only within the contract and derived contracts.
- **external**: Can be called from outside the contract.
- **private**: Accessible only within the contract.
  - [Solidity by Example - Visibility](https://solidity-by-example.org/visibility/)

## Data Locations

- **Storage**: Persistent data stored on the blockchain.
- **Memory**: Temporary data stored during function execution.
- **Stack**: Local variables stored in function execution context.
  - [Solidity by Example - Data Locations](https://solidity-by-example.org/data-locations/)

## Mappings and Arrays

- **Mappings**: Key-value data structures.
  - [Solidity by Example - Mappings](https://solidity-by-example.org/mapping/)
- **Arrays**: Lists of values.
  - [Solidity by Example - Arrays](https://solidity-by-example.org/array/)

## Functions

- **Functions**: Code blocks within contracts that execute specific tasks.
  - [Solidity by Example - Functions](https://solidity-by-example.org/function/)

## Constructor

- The constructor initializes contract variables when the contract is deployed.
  - [Solidity by Example - Constructor](https://solidity-by-example.org/constructor/)

## Interface

- **Interface**: Abstract contracts that define functions but don't provide implementations.
  - [Solidity by Example - Interface](https://solidity-by-example.org/interface/)

## Inheritance

- **Inheritance**: Contracts can inherit properties and methods from other contracts.
  - [Solidity by Example - Inheritance](https://solidity-by-example.org/inheritance/)

## Error Handling

- Use `require` and `revert` to handle error cases and provide useful feedback.
  - [Solidity by Example - Error Handling](https://solidity-by-example.org/error/)

## Events

- **Events**: Enable logging of important contract actions for external consumption.
  - [Solidity by Example - Events](https://solidity-by-example.org/events/)

## Units

- **Units**: Ether and Wei are the primary units of Ethereum. 1 ether = 10^18 wei.
  - [Solidity by Example - Units](https://solidity-by-example.org/ether-units/)

## Solidity by Example

- To find more examples of practical Solidity implementations, explore [Solidity by Example](https://solidity-by-example.org/).

## Conclusion

Mastering these Solidity essentials will empower you to create your own ERC-20 tokens with confidence and understanding. Dive into the documentation, experiment with code, and explore real-world examples to solidify your knowledge.

## Back to the workshop

[Jump !](./README.md)
