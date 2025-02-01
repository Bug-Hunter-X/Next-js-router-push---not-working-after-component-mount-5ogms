# Next.js router.push() Issue

This repository demonstrates a problem with `router.push()` in Next.js where it fails to trigger a page change when called within a function executed after the component has mounted.  The issue is related to timing and how state updates are handled within the Next.js framework.

## Bug Description
The provided `bug.js` file contains a component with a button that, when clicked, attempts to navigate using `router.push()`. However, if the navigation logic is within a function that is called asynchronously after the component mounts, the navigation might not work as expected.

## Solution
The `bugSolution.js` file provides a solution to this problem by incorporating proper handling of asynchronous operations and using Next.js's built-in mechanisms for managing navigation effectively.

## How to Reproduce
Clone this repo and run `npm install`.  Run the development server using `npm run dev`. Click the button and observe the behavior.  Compare the behavior between `bug.js` and `bugSolution.js`.
