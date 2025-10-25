# WORKOUT.SYS

A minimalist, monochrome PWA for tracking a 6-day workout routine, adapted from a Bro Split structure. Uses the Inter font and a clean, list-based UI.

Progress is saved locally using `localStorage`.

## Features
-   Minimalist black and white design.
-   Tracks sets completed using an `X/Y` counter.
-   Moves completed exercises to a separate section.
-   Moves the currently active exercise to the top of its section.
-   Includes a rest timer with visual indicator.
-   Modal popups for exercise instructions and reset confirmation.
-   Day completion celebration overlay.

## Core Files
-   `index.html` — Application structure.
-   `styles.css` — All styling.
-   `script.js` — All application logic and embedded workout data.

## How to Use
1.  Open `index.html`.
2.  Click day buttons (`Day 1` - `Rest`).
3.  **Click an active exercise** to mark one set complete (moves to top, starts timer).
4.  **Right-click (or long-press)** an exercise to decrement one set (moves back to active if needed, stops timer).
5.  Click the `(i)` icon for instructions.
6.  Use `PURGE WEEKLY PROGRESS` to reset.
