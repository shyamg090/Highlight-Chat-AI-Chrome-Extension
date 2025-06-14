document.addEventListener("DOMContentLoaded", async () => {
    const status = document.getElementById("status");
    const loginBtn = document.getElementById("login-btn");

    chrome.storage.local.get("authToken", (res) => {
        if (res.authToken) {
            status.textContent = "✅ Logged In!";
        } else {
            status.textContent = "🔒 Not Logged In";
            loginBtn.style.display = "block";
        }
    });

    loginBtn.addEventListener("click", () => {
        const extensionId = chrome.runtime.id;
        const redirectUrl = `http://localhost:5173/signin?extensionId=${extensionId}`;
        chrome.tabs.create({ url: redirectUrl });
    });
});
