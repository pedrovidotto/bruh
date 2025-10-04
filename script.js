
// Example workout tips logic
const day = { tips: ["Warm up properly", "Focus on form", "Stretch afterwards"] };
function showTips() {
    alert("Tips:\n" + day.tips.map((tip, i) => `${i + 1}. ${tip}`).join("\n"));
}
