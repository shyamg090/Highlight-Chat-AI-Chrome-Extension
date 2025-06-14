let floatingBtn = null;
let sidebar = null;
let selectedText = "";

// 1. Inject sidebar on page load (but hidden)
function injectSidebar() {
    sidebar = document.createElement("iframe");
    sidebar.src = chrome.runtime.getURL("sidebar.html");
    sidebar.id = "ai-sidebar";
    Object.assign(sidebar.style, {
        position: "fixed",
        top: "0",
        right: "0",
        width: "400px",
        height: "100vh",
        zIndex: 999998,
        border: "none",
        boxShadow: "-2px 0 8px rgba(0,0,0,0.15)",
        backgroundColor: "#fff",
        display: "none", // Start hidden
    });

    // Wait for sidebar to load before using postMessage
    sidebar.onload = () => {
        console.log("Sidebar loaded and ready.");
    };

    document.body.appendChild(sidebar);

    // Listen for close request from sidebar
    window.addEventListener("message", (event) => {
        if (event.data.type === "closeSidebar") {
            sidebar.style.display = "none";
        }
    });
}

function createFloatingButton() {
    floatingBtn = document.createElement("button");
    floatingBtn.innerText = "Ask AI";
    floatingBtn.id = "floating-ask-btn";

    Object.assign(floatingBtn.style, {
        position: "absolute",
        padding: "6px 10px",
        fontSize: "10px",
        fontWeight: "600",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        cursor: "pointer",
        display: "none",
        zIndex: 999999,
        borderRadius: "6px",
        background: "linear-gradient(135deg, #4caf50, #45a047)",
        color: "white",
        border: "none",
        boxShadow: "0 6px 12px rgba(76, 175, 80, 0.35)",
        userSelect: "none",
        transition: "background 0.3s ease, box-shadow 0.3s ease",
    });

    // Hover effect using JS
    floatingBtn.addEventListener("mouseenter", () => {
        floatingBtn.style.background = "linear-gradient(135deg, #45a047, #388e3c)";
        floatingBtn.style.boxShadow = "0 8px 16px rgba(56, 142, 60, 0.45)";
    });
    floatingBtn.addEventListener("mouseleave", () => {
        floatingBtn.style.background = "linear-gradient(135deg, #4caf50, #45a047)";
        floatingBtn.style.boxShadow = "0 6px 12px rgba(76, 175, 80, 0.35)";
    });

    document.body.appendChild(floatingBtn);

    floatingBtn.addEventListener("click", () => {
        if (sidebar) {
            sidebar.style.display = "block";
            try {
                sidebar.contentWindow.postMessage({ type: "selectedText", text: selectedText }, "*");
            } catch (e) {
                console.error("Could not send message to sidebar:", e);
            }
        }
    });
}



// 3. Show floating button near text selection
function positionButtonNearSelection() {
    const selection = window.getSelection();
    if (selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();

    if (!rect) return;

    const top = window.scrollY + rect.top - 35;
    const left = window.scrollX + rect.left;

    floatingBtn.style.top = `${top}px`;
    floatingBtn.style.left = `${left}px`;
}

/////// new 
document.addEventListener("mouseup", () => {
    setTimeout(() => {
        const selectionText = window.getSelection().toString().trim();
        selectedText = selectionText;

        if (selectedText.length > 0) {
            positionButtonNearSelection();
            floatingBtn.style.display = "inline-block";
        } else {
            floatingBtn.style.display = "none";
        }
    }, 0); // Delay slightly to let selection update
});

document.addEventListener("selectionchange", () => {
    const selectionText = window.getSelection().toString().trim();
    if (selectionText.length === 0 && floatingBtn) {
        floatingBtn.style.display = "none";
    }
});

/// /// // test 
// Utility to safely get the token from chrome.storage
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

// Check for token before injecting anything
async function checkForAccessToken() {
    try {
        const token = await getToken();
        return !!token; // true if token exists
    } catch (error) {
        console.error("Error checking access token:", error);
        return false;
    }
}

// Main execution
checkForAccessToken().then((hasAccess) => {
    if (hasAccess) {
        console.log("✅ Auth token found. Initializing extension features...");
        injectSidebar();          // Your function to load sidebar
        createFloatingButton();   // Your function to add the "Ask AI" button
    } else {
        console.log("⛔ No auth token found. Skipping extension features.");
    }
});
