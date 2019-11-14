# JS Data Structures

## Description
A collection of basic data structures implemented in Typescript. Intended to be a resource for candidates practicing for job interviews. 

*This is by no means an exhaustive list. Only the most basic/foundational implementations are listed. Many other variations exist of which their Read/Write performance can vary significantly.*

- [Hash Table](#hash-table)
- [Linked List](#linked-list)
- [Breadth First Search](#breadth-first-search)
- [Depth First Search](#depth-first-search)
- [Quick Sort](#quick-sort), 
- [Merge Sort](#merge-sort)
- [Binary Search](#binary-search)
- [2D Array](#2d-array)
- [Dynamic Array](#dynamic-array)
- [Binary Search Tree](#binary-search-tree)

### Hash Table
A [Hash Table](./hash-table/index.ts) is a way of efficiently storing and retrieving key/value pairs. When adding or reading from a hash table, the key is put through a hashing function which outputs a valid index of an array. The value can then be read from or written to that location.

Be aware that a hashing function does not always output a valid index. What if two different keys, when hashed, produce the same index? This is called a collision. Hash tables need to handle such cases. One approach is to create a linked list at each index of the array so that when a collision happens the value is just appended to the end of the list. Other methods include increasing the length of the array, double hashing, and probing.

A good hash function will reduce collisions and distribute key/value pairs evenly across the array. In other words, it should behave like a random number generator. Any change in input, however small, should not affect the chances of outputting any given valid index with any more or less likelihood than another.

##### Performance
In theory, a perfect hash table should always read and write in `O(1)` time. Unfortunately, collisions will always put a dent in efficiency. Expect performance to vary depending on how they are handled.

### Linked List

### Breadth First Search

### Depth First Search

### Quick Sort

### Merge Sort

### Binary Search

### 2D Array

### Dynamic Array

### Binary Search Tree

