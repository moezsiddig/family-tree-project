# Reflection: Prophets Family Tree Project

## Overview

This project was a great opportunity to apply the algorithms and data structures we learned in class. I built a Family Tree application using JavaScript, HTML, and CSS, and I populated it with the historical lineage of the Prophets. The most important lesson I learned is how a well-chosen data structure (like a Map) can completely change the efficiency of an application.

## What I Learned

**1. The Power of BFS vs. DFS**
At first, I followed the instructor's example and used a recursive function to find descendants. However, I noticed that the output was not in a logical order (it went from Adam to the deepest branch). To fix this, I reviewed the class transcripts and implemented a Breadth-First Search (BFS) using a queue. This taught me that choosing the right algorithm (BFS for generations) is just as important as the code itself.

**2. Bridging Data Structures with the DOM**
Creating a beautiful UI was a challenge. I learned how to use DOM Manipulation to take the data from my `FamilyTree` class and display it in the browser. I also learned how to use `innerHTML` to dynamically highlight the names of the Prophets in green, making the UI more user-friendly.

**3. The importance of `Map` for efficiency**
The instructor emphasized using a `Map` for O(1) search. Using it in this project showed me how fast it is. Instead of looping through the whole tree to find a person, the Map gave me the result instantly.

**4. Autocomplete requires careful event handling**
I added an extra feature (Auto-complete search). I learned how to use the `input` event listener and the `startsWith()` method to suggest names as the user types.

## Challenges

**Challenge 1: Getting the Chronological Order Right**
As mentioned, my first version used DFS, which outputted names like "Jesus" before "Isaac". Refactoring the code to use BFS was a bit tricky, but it made the application much more accurate.

**Challenge 2: Making the Code Work in Two Environments**
I wanted the app to work in the Terminal (using Node.js) and in the Browser (using HTML). I had to create two slightly different versions of the class file (`FamilyTree.js` for Node and `FamilyTreeWeb.js` for the browser) because the browser doesn't understand `module.exports`. This taught me a lot about JavaScript environments.

**Challenge 3: Styling and UX**
Making the UI look good and match my personal theme (yellow/black) took time. I learned to use Flexbox and custom CSS to make the search bar and the results card look professional.

## What I Would Do Differently

If I started over, I would:

1. **Plan the Tree Structure First** — I spent a lot of time adding members and defining relationships. If I had mapped out the full lineage on paper first, it would have been faster.
2. **Test on Both Browsers and Terminal earlier** — I focused on the browser first, and then had to spend extra time making sure the Terminal version worked correctly.

## Tools I Used

- **Class recordings and transcripts** — to review the BFS algorithm and DOM manipulation techniques.
- **Browser Developer Tools** — for debugging CSS and checking console errors.
- **Artificial Intelligence Tools** — I used artificial intelligence as a learning aid to illustrate the theory behind the Breadth-First Search (BFS) algorithm and to help me find and correct syntax errors when my program crashed. I made sure to write and test all the code myself, following the guidance of our instructor, Carlos Zegarra.
- **VS Code** — for writing and organizing the code.

## Conclusion

This project taught me that building software is not just about writing code; it's about solving problems. I feel much more confident now in my ability to use data structures to solve real-world problems, and I am proud of the final result.