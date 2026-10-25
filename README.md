\# Prophets Family Tree

🔗 **Live Demo:** [Click here to view the interactive Web App](https://moezsiddig.github.io/family-tree-project/)

\## Overview

This project is a JavaScript implementation of a Family Tree data structure. It uses the historical lineage of the Prophets as a dataset to demonstrate tree traversal, searching, and relationship mapping. The application is available both as an interactive Web Interface and a Terminal (CLI) application.



\## Features

\- \*\*Add Members:\*\* Add individuals with their name and birthdate.

\- \*\*Define Relationships:\*\* Establish parent-child connections.

\- \*\*Find Descendants:\*\* Traverse the tree using Breadth-First Search (BFS) to find all descendants ordered by generation.

\- \*\*Find Ancestors:\*\* Trace back up the tree to find all ancestors.

\- \*\*Find Siblings:\*\* Find the brothers and sisters of a specific individual.

\- \*\*Smart Highlighting:\*\* Prophets are automatically highlighted in green in the web interface to distinguish them from regular ancestors.

\- \*\*Auto-complete Search:\*\* The web interface suggests names dynamically as you type.



\## Data Structure \& Algorithms

\- \*\*Class `Person`:\*\* Represents a single node with a `name`, `birthdate`, an array of `children`, and a reference to its `parent`.

\- \*\*Class `FamilyTree`:\*\* Uses a JavaScript `Map` to store members. This allows an \*\*O(1) time complexity\*\* for searching by name, making the application highly efficient.

\- \*\*Algorithms Used:\*\* Breadth-First Search (BFS) for descendants, iterative traversal for ancestors, and array filtering for siblings.



\## How to Run \& How to Search



\### 1. Web Interface (Browser)

\*\*How to Run:\*\*

- You can click the **Live Demo** link at the top of this page.
- Alternatively, download the project and simply open the `index.html` file in any web browser (e.g., Google Chrome, Safari). No server is required.



\*\*How to Search:\*\*

1\. Type a name in the search box. As you type, an \*\*autocomplete\*\* dropdown will suggest matching names. You can click on a suggestion or finish typing.

2\. Click the \*\*"Search Family"\*\* button.

3\. The results card will appear showing:

&#x20;  - \*\*Descendants:\*\* All children and grandchildren in chronological order.

&#x20;  - \*\*Ancestors:\*\* The lineage going up to Adam.

&#x20;  - \*\*Siblings:\*\* The brothers and sisters of the searched person.

4\. \*Note:\* Prophets are highlighted in \*\*green\*\*, while regular ancestors appear in normal text.



\### 2. Terminal Interface (Node.js)

\*\*How to Run:\*\*

1\. Make sure you have Node.js installed on your computer.

2\. Open your terminal (or command prompt) and navigate to the project folder.

3\. Run the following command:

&#x20;  ```bash

&#x20;  node app.js



\## Available Names for Testing



To make testing easier, here is the complete list of names currently registered in the family tree, grouped by their lineage. You can search for any of these exact names in both the Web and Terminal versions:



\*\*1. Early Generations:\*\*

Adam, Cain, Abel, Seth, Idris, Noah, Shem, Ham, Japheth, Azar, Abraham, Nahor, Haran, Lot.



\*\*2. Ishmael's Lineage to Muhammad (PBUH):\*\*

Ishmael, Kedar, Adnan, Ma'ad, Nizar, Mudar, Ilyas, Mudrika, Khuzaymah, Kinana, Al-Nadr, Malik, Fihr, Quraysh, Abd Manaf, Hashim, Abdul-Muttalib, Abdullah, Muhammad.



\*\*3. Isaac's Lineage \& Israelite Prophets:\*\*

Isaac, Jacob, Esau, Ayoub, Zul-Kifl, Joseph, Benjamin, Judah, Levi, Qohath, Amram, Moses, Aaron, Mary, Jesus, Perez, Jesse, David, Solomon, Rehoboam, Zakariya, Yahya.



\*\*4. Other Prophets:\*\*

Hud, Saleh, Shu'ayb, Yunus, Yasa, Prophet Ilyas.



\### 💡 Quick Test Examples

\- \*\*Search for "Abraham"\*\*: To see his descendants (Ishmael \& Isaac branches) and ancestors.

\- \*\*Search for "Muhammad"\*\*: To see his full lineage back to Adam.

\- \*\*Search for "Joseph"\*\*: To see how the tree finds his brothers (Siblings feature).

