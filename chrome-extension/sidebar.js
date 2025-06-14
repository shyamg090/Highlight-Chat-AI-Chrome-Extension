async function getToken() {
    return new Promise((resolve, reject) => {
        if (chrome?.storage?.local) {
            chrome.storage.local.get("authToken", (res) => {
                resolve(res.authToken);
            });
        } else {
            reject("chrome.storage.local not available");
        }
    });
}

const selectedTextDiv = document.getElementById("selected-text");
const contentDiv = document.getElementById("content");
const saveBtn = document.getElementById("save-btn");
const closeBtn = document.getElementById("close-btn");

let currentSelectedText = "";

// Listen for messages from content script
window.addEventListener("message", async (event) => {
    if (event.data.type === "selectedText") {
        currentSelectedText = event.data.text;
        selectedTextDiv.innerText = `Selected Text:\n${currentSelectedText}`;
        contentDiv.innerText = `Selected Text:\n${currentSelectedText}`;
        await fetchAIResponse(currentSelectedText);
    }
});

closeBtn.addEventListener("click", () => {
    window.parent.postMessage({ type: "closeSidebar" }, "*");
});

async function fetchAIResponse(text) {
    const token = await getToken();

    try {
        // // // Fetch previous chats if text is empty
        // if (!text || text.trim() === "") {
        //     const res = await fetch("http://localhost:3000/chats", {
        //         headers: {
        //             Authorization: `Bearer ${token}`,
        //         },
        //     });
        //     if (res.status != 200) throw new Error("Failed to load previous chats");
        //     const { chats } = await res.json();
        //     contentDiv.innerText = chats.map((c) => `Q: ${c.message}\nA: ${c.user}`).join("\n\n") || "No previous chats";
        //     saveBtn.style.display = "none";
        //     return;
        // }

        contentDiv.innerHTML = `<div class="spinner"></div>`;

        // Simulate slight delay (e.g., 2 seconds)
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Now fetch the data
        const res = await fetch("http://localhost:3000/post/chats", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ text })
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch AI response: ${res.statusText}`);
        }

        const data = await res.json();
        contentDiv.innerText = data.response;
        saveBtn.style.display = "inline-block";


    } catch (err) {
        contentDiv.innerText = `Error: ${err.message}`;
        saveBtn.style.display = "none";
    }
}

saveBtn.addEventListener("click", async () => {
    const token = await getToken();

    try {
        const res = await fetch("http://localhost:3000/save", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: { text: currentSelectedText, summary: contentDiv.innerText },
        });

        if (!res.ok) throw new Error("Failed to save insight");

        alert("Insight saved!");
    } catch (err) {
        alert("Error saving insight: " + err.message);
    }
});

// // When the sidebar loads, immediately fetch previous chats to show (in case no text selected)
// window.onload = () => {
//     fetchAIResponse(""); // no text means load previous chats
// };
