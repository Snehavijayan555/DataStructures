class Node {
    constructor(key, value, next = null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        const newNode = new Node(key, value);

        if (!this.table[index]) {
            this.table[index] = newNode;
        } else {
            let current = this.table[index];
            while (current) {
                if (current.key === key) {
                    current.value = value; 
                    return;
                }
                if (!current.next) break;
                current = current.next;
            }
            current.next = newNode;
        }
    }

    get(key) {
        const index = this.hash(key);
        let current = this.table[index];

        while (current) {
            if (current.key === key) {
                return current.value;
            }
            current = current.next;
        }
        return undefined;
    }

    remove(key) {
        const index = this.hash(key);
        let current = this.table[index];
        let prev = null;

        while (current) {
            if (current.key === key) {
                if (prev) {
                    prev.next = current.next; 
                } else {
                    this.table[index] = current.next; 
                }
                return;
            }
            prev = current;
            current = current.next;
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                let current = this.table[i];
                const items = [];
                while (current) {
                    items.push(`[${current.key}: ${current.value}]`);
                    current = current.next;
                }
                console.log(i, items.join(' -> '));
            }
        }
    }
}


const table = new HashTable(50);
table.set("name", "sneha");
table.set("age", 25);
table.display();

console.log(table.get("name"));

table.set("mane", "appu");
table.set("name", "ammu");
table.remove("name");
table.display();
