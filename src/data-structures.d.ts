declare namespace DS {
    export type HashTableIndex = number;
    export type Key = string | number;
    export type IHashFunction = (key: Key) => HashTableIndex;
}