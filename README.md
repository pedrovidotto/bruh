# WORKOUT.SYS

A minimalist, monochrome PWA for tracking a 6-day workout routine. This app uses the "Futuristic/Technical Monochrome" design style with the `Archivio` font family. It is built with vanilla HTML, CSS, and JavaScript.

All progress is saved locally to your browser's `localStorage` under the key `workoutSysProgress`.

## Core Files
- `index.html` — Application structure and markup.
- `styles.css` — All styling for the monochrome interface.
- `script.js` — All application logic, including data, DOM rendering, and progress tracking.

## How to Use
1.  Open `index.html` in your browser.
2.  The app will automatically select the current day of the week.
3.  Click the day buttons (`DAY 1` - `REST`) to view workouts.
4.  **Click an exercise card** to mark one set as complete.
5.  **Right-click (or long-press on mobile)** an exercise card to remove one completed set.
6.  Click the info icon (circle "i") on a card to view detailed instructions.
7.  Use the `PURGE WEEKLY PROGRESS` button to reset all stored data.
