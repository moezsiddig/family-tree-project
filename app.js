const readline = require('readline');
const { FamilyTree } = require('./FamilyTree');

const tree = new FamilyTree();

// Add Members
tree.addMember("Adam", "Unknown");
tree.addMember("Cain", "Unknown");
tree.addMember("Abel", "Unknown");
tree.addMember("Seth", "Unknown");
tree.addMember("Idris", "Unknown");
tree.addMember("Noah", "Unknown");
tree.addMember("Shem", "Unknown");
tree.addMember("Ham", "Unknown");
tree.addMember("Japheth", "Unknown");
tree.addMember("Azar", "Unknown");
tree.addMember("Abraham", "Unknown");
tree.addMember("Nahor", "Unknown");
tree.addMember("Haran", "Unknown");
tree.addMember("Lot", "Unknown");

tree.addMember("Ishmael", "Unknown");
tree.addMember("Kedar", "Unknown");
tree.addMember("Adnan", "Unknown");
tree.addMember("Ma'ad", "Unknown");
tree.addMember("Nizar", "Unknown");
tree.addMember("Mudar", "Unknown");
tree.addMember("Ilyas", "Unknown");
tree.addMember("Mudrika", "Unknown");
tree.addMember("Khuzaymah", "Unknown");
tree.addMember("Kinana", "Unknown");
tree.addMember("Al-Nadr", "Unknown");
tree.addMember("Malik", "Unknown");
tree.addMember("Fihr", "Unknown");
tree.addMember("Quraysh", "Unknown");
tree.addMember("Abd Manaf", "Unknown");
tree.addMember("Hashim", "Unknown");
tree.addMember("Abdul-Muttalib", "Unknown");
tree.addMember("Abdullah", "Unknown");
tree.addMember("Muhammad", "570-01-01");

tree.addMember("Isaac", "Unknown");
tree.addMember("Jacob", "Unknown");
tree.addMember("Esau", "Unknown");
tree.addMember("Ayoub", "Unknown");
tree.addMember("Zul-Kifl", "Unknown");
tree.addMember("Joseph", "Unknown");
tree.addMember("Benjamin", "Unknown");
tree.addMember("Matta", "Unknown");
tree.addMember("Yunus", "Unknown");
tree.addMember("Judah", "Unknown");
tree.addMember("Levi", "Unknown");
tree.addMember("Qohath", "Unknown");
tree.addMember("Amram", "Unknown");
tree.addMember("Moses", "Unknown");
tree.addMember("Aaron", "Unknown");
tree.addMember("Prophet Ilyas", "Unknown");
tree.addMember("Yasa", "Unknown");
tree.addMember("Mary", "Unknown");
tree.addMember("Jesus", "Unknown");

tree.addMember("Perez", "Unknown");
tree.addMember("Jesse", "Unknown");
tree.addMember("David", "Unknown");
tree.addMember("Solomon", "Unknown");
tree.addMember("Rehoboam", "Unknown");
tree.addMember("Zakariya", "Unknown");
tree.addMember("Yahya", "Unknown");

tree.addMember("Hud", "Unknown");
tree.addMember("Saleh", "Unknown");
tree.addMember("Shu'ayb", "Unknown");

// Define Relationships
tree.defineRelationship("Adam", "Cain");
tree.defineRelationship("Adam", "Abel");
tree.defineRelationship("Adam", "Seth");
tree.defineRelationship("Seth", "Idris");
tree.defineRelationship("Idris", "Noah");

tree.defineRelationship("Noah", "Shem");
tree.defineRelationship("Noah", "Ham");
tree.defineRelationship("Noah", "Japheth");
tree.defineRelationship("Shem", "Azar");
tree.defineRelationship("Azar", "Abraham");
tree.defineRelationship("Azar", "Nahor");
tree.defineRelationship("Azar", "Haran");
tree.defineRelationship("Haran", "Lot");
tree.defineRelationship("Abraham", "Ishmael");
tree.defineRelationship("Abraham", "Isaac");

tree.defineRelationship("Ishmael", "Kedar");
tree.defineRelationship("Kedar", "Adnan");
tree.defineRelationship("Adnan", "Ma'ad");
tree.defineRelationship("Ma'ad", "Nizar");
tree.defineRelationship("Nizar", "Mudar");
tree.defineRelationship("Mudar", "Ilyas");
tree.defineRelationship("Ilyas", "Mudrika");
tree.defineRelationship("Mudrika", "Khuzaymah");
tree.defineRelationship("Khuzaymah", "Kinana");
tree.defineRelationship("Kinana", "Al-Nadr");
tree.defineRelationship("Al-Nadr", "Malik");
tree.defineRelationship("Malik", "Fihr");
tree.defineRelationship("Fihr", "Quraysh");
tree.defineRelationship("Quraysh", "Abd Manaf");
tree.defineRelationship("Abd Manaf", "Hashim");
tree.defineRelationship("Hashim", "Abdul-Muttalib");
tree.defineRelationship("Abdul-Muttalib", "Abdullah");
tree.defineRelationship("Abdullah", "Muhammad");

tree.defineRelationship("Isaac", "Jacob");
tree.defineRelationship("Isaac", "Esau");
tree.defineRelationship("Esau", "Ayoub");
tree.defineRelationship("Ayoub", "Zul-Kifl");

tree.defineRelationship("Jacob", "Joseph");
tree.defineRelationship("Jacob", "Benjamin");
tree.defineRelationship("Jacob", "Judah");
tree.defineRelationship("Jacob", "Levi");

tree.defineRelationship("Benjamin", "Matta");
tree.defineRelationship("Matta", "Yunus");
tree.defineRelationship("Joseph", "Yasa");

tree.defineRelationship("Judah", "Perez");
tree.defineRelationship("Perez", "Jesse");
tree.defineRelationship("Jesse", "David");
tree.defineRelationship("David", "Solomon");
tree.defineRelationship("Solomon", "Rehoboam");

tree.defineRelationship("Levi", "Qohath");
tree.defineRelationship("Qohath", "Amram");
tree.defineRelationship("Amram", "Moses");
tree.defineRelationship("Amram", "Aaron");
tree.defineRelationship("Amram", "Mary");
tree.defineRelationship("Mary", "Jesus");

tree.defineRelationship("Aaron", "Prophet Ilyas");

tree.defineRelationship("Solomon", "Zakariya");
tree.defineRelationship("Zakariya", "Yahya");

tree.defineRelationship("Shem", "Hud");
tree.defineRelationship("Shem", "Saleh");
tree.defineRelationship("Abraham", "Shu'ayb");

// Honorifics (Prophets of Determination)
const honorifics = {
    "Noah": " (PBUH)",
    "Abraham": " (PBUH)",
    "Moses": " (PBUH)",
    "Jesus": " (PBUH)",
    "Muhammad": " (PBUH)"
};

// Function to format names in terminal
function formatTerminalNames(namesArray) {
    let result = "";

    for (let i = 0; i < namesArray.length; i++) {
        let name = namesArray[i];

        // Check if the name has an honorific
        if (honorifics[name]) {
            result += name + honorifics[name];
        } else {
            result += name;
        }

        // Add comma separator if not the last element
        if (i < namesArray.length - 1) {
            result += ", ";
        }
    }

    return result;
}

// Terminal Interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("--- Prophets Family Tree Terminal App ---");

function askQuestion() {
    rl.question('\nEnter a name to search (or type "exit" to quit): ', function(name) {

        if (name.toLowerCase() === 'exit') {
            console.log("Goodbye!");
            rl.close();
            return;
        }

        try {
            const descendants = tree.findDescendants(name);
            const ancestors = tree.findAncestors(name);
            const siblings = tree.findSiblings(name);

            let displayName = name;
            if (honorifics[name]) {
                displayName += honorifics[name];
            }

            console.log(`\nResults for ${displayName}:`);

            if (descendants.length > 0) {
                console.log(`- Descendants: ${formatTerminalNames(descendants)}`);
            } else {
                console.log(`- Descendants: None`);
            }

            if (ancestors.length > 0) {
                console.log(`- Ancestors: ${formatTerminalNames(ancestors)}`);
            } else {
                console.log(`- Ancestors: None`);
            }

            if (siblings.length > 0) {
                console.log(`- Siblings: ${formatTerminalNames(siblings)}`);
            } else {
                console.log(`- Siblings: None`);
            }

        } catch (error) {
            console.log(`\nError: ${error.message}`);
        }

        // Ask the question again to keep the app running
        askQuestion();
    });
}

// Start the application
askQuestion();
