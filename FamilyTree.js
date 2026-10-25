class Person {
    constructor(name, birthdate) {
        this.name = name;
        this.birthdate = birthdate;
        this.children = [];
        this.parent = null;
    }

    addChild(child) {
        child.parent = this;
        this.children.push(child);
    }
}

class FamilyTree {
    constructor() {
        this.members = new Map();
    }

    addMember(name, birthdate) {
        if (this.members.has(name)) {
            throw new Error(`Member with name ${name} already exists.`);
        }
        const newMember = new Person(name, birthdate);
        this.members.set(name, newMember);
    }

    defineRelationship(parentName, childName) {
        const parent = this.members.get(parentName);
        const child = this.members.get(childName);

        if (!parent || !child) {
            throw new Error("Both parent and child must be members of the family tree.");
        }

        parent.addChild(child);
    }

    findDescendants(name) {
        const member = this.members.get(name);
        if (!member) {
            throw new Error(`Member with name ${name} does not exist.`);
        }

        const descendants = [];
        const queue = [member];

        while (queue.length > 0) {
            const current = queue.shift();
            for (const child of current.children) {
                descendants.push(child.name);
                queue.push(child);
            }
        }
        return descendants;
    }

    findAncestors(name) {
        const member = this.members.get(name);
        if (!member) {
            throw new Error(`Member with name ${name} does not exist.`);
        }

        const ancestors = [];
        let current = member.parent;

        while (current !== null) {
            ancestors.push(current.name);
            current = current.parent;
        }
        return ancestors;
    }

    findSiblings(name) {
        const member = this.members.get(name);
        if (!member) {
            throw new Error(`Member with name ${name} does not exist.`);
        }

        if (member.parent === null) {
            return [];
        }

        const siblings = [];
        for (const child of member.parent.children) {
            if (child.name !== name) {
                siblings.push(child.name);
            }
        }
        return siblings;
    }
}

module.exports = { FamilyTree };