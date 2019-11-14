/**
 * @file Hash Table Module
 * @summary This implementation is 'statically' sized, which means the size of the table cannot be changed once instantiated. Collisions are dealt with using an Array instead of a linked list for simplicity.
 * @author Ben Turner
 */

/**
 *  Convert a key to an index of the Hash Table
 * @param key
 * @summary Creates an index number using a series of bitwise operations on the key string.
 */
const defaultHashFunction: DS.IHashFunction = function (this: HashTable, key) {
    let hash = 0;
    const keyStr = key.toString();
    for (let i = 0; i < keyStr.length; i++) {
        const char = keyStr.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash % this.max);
};

/**
 * Hash Table class/constructor
 * @constructor
 */
export class HashTable {
    get size(): number {
        return this.table.length;
    }
    public max: number;
    public readonly table: any[];
    private hash: DS.IHashFunction;
    /**
     * Creates a new HashTable instance
     * @param max - maximum size of array
     * @param hashFunction - hashing algorithm to apply for getting/setting indices
     */
    constructor(max: number, hashFunction: DS.IHashFunction = defaultHashFunction) {
        if (max <= 0) { throw Error('Maximum must be an integer greater than 0'); }
        this.table = [];
        this.hash = hashFunction;
        this.max = max;
    }

    /**
     * Assign a new value to hash table
     * @param key
     * @param value
     */
    public set<V>(key: DS.Key, value: V): V {
        const index = this.hash(key);
        if (this.table[index] === undefined) {
            this.table[index] = [[key, value]];
        } else {
            // check that key doesnt already exist in tuple, if so, replace the old value
            for (const tuple of this.table[index]) {
                if (tuple[0] === key) {
                    return tuple[1] = value;
                }
            }
            this.table[index].push([key, value]);
        }
        return value;
    }
    /**
     * Find value by key
     * @param key
     */
    public get<V>(key: DS.Key): V {
        const index = this.hash(key);
        if (this.table[index] !== undefined) {
            for (const tuple of this.table[index]) {
                if (tuple[0] === key) {
                    return tuple[1];
                }
            }
        }
    }
}
