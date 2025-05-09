// TODO: replace with backend URL once deployed
const API_URL = "https://reading-logger-backend.onrender.com";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    const doneBtn = document.getElementById("doneBtn");
    const quiz = document.getElementById("quiz");
    const submitBtn = document.getElementById("submitBtn");
    let startTime = Date.now();

    // Enable "Done Reading" when scrolled to bottom
    container.addEventListener("scroll", () => {
        const scrolledToBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 5;
        if (scrolledToBottom) doneBtn.disabled = false;
    });

    // Show quiz and log reading time
    doneBtn.addEventListener("click", () => {
        const totalTime = Math.round((Date.now() - startTime) / 1000);
        container.style.display = "none";
        doneBtn.style.display = "none";
        quiz.style.display = "block";
        document.getElementById("instructions").style.display = "none";
        document.getElementById("warning").style.display = "none";

        fetch(`${API_URL}/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                event: "doneReading",
                timeSpent: totalTime,
                page: window.location.pathname,
                timestamp: new Date().toISOString()
            })
        }).catch(console.error);
    });

    // Submit quiz answer and log it
    submitBtn.addEventListener("click", () => {
        const selected = document.querySelector('input[name="answer"]:checked');
        if (!selected) { alert("Please select an answer."); return; }
        const answer = selected.value;
        alert(`You selected: ${answer}`);

        fetch(`${API_URL}/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                event: "submitAnswer",
                answer,
                page: window.location.pathname,
                timestamp: new Date().toISOString()
            })
        }).catch(console.error);
    });
});