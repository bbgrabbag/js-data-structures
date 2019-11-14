import { v4 } from 'uuid';
import { HashTable } from './index';

describe('Test hash table constructor', () => {
    test('Hash Table is instantiated properly', () => {
        const hashTable = new HashTable(256);
        expect(hashTable.max).toBe(256);
    });
    test('New Hash Table has zero size', () => {
        const hashTable = new HashTable(256);
        expect(hashTable.size).toBe(0);
    });
    test('Setter adds value and returns it', () => {
        const hashTable = new HashTable(256);
        expect(hashTable.set<string>('foo', 'bar')).toBe('bar');
        expect(hashTable.get<string>('foo')).toBe('bar');
        expect(hashTable.set<string>('foo', 'gnar')).toBe('gnar');
        expect(hashTable.get<string>('foo')).toBe('gnar');
        expect(hashTable.get('N/A')).toBe(undefined);
    });
    test('Size adjusts dynamically', () => {
        const hashTable = new HashTable(256);
        expect(hashTable.size).toBe(0);
        hashTable.set(v4(), 'test');
        expect(hashTable.size).toBeGreaterThanOrEqual(1);
    });
    test('Hash Table handles overloads', () => {
        const hashTable = new HashTable(10);
        for (let i = 0; i < 1000; i++) {
            hashTable.set(`${i}`, i);
        }
        expect(hashTable.size).toBe(hashTable.max);
    });
    xtest('Hash Table distributes values evenly on average', () => {
        // for a table of size S, after N Writes, an ideal distribution would have a mean, median and mode of ~ S / N
        const S = 100;
        const N = 100;
        const IDEAL_MAX_BUCKET_LENGTH = N / S;

        // calculate standard deviation of a large quantity of hashTables with a write/size ratio of 1
    });
});
