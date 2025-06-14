chrome.runtime.onMessageExternal.addListener((message, sender, sendResponse) => {
  if (message.type === "STORE_TOKEN") {
    console.log("Received token from external page:", message.token);

    chrome.storage.local.set({ authToken: message.token }, () => {
      sendResponse({ status: "success" });
    });

    // Return true to indicate async response
    return true;
  }
});
