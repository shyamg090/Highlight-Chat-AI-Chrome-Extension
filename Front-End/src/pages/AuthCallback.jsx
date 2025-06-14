/*global chrome*/

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AuthCallback() {
    const navigate = useNavigate();
    const [extension, setExtension] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");
        const extensionparams = new URLSearchParams(location.search);
        const extensionId = extensionparams.get("extensionId");
        setExtension(extensionId);

        if (token) {
            localStorage.setItem("authToken", token); // or chrome.storage.local.set if Chrome extension

            // // Send it to your extension
            // chrome.runtime.sendMessage(extension, {
            //     type: "STORE_TOKEN",
            //     token: token
            // }, (response) => {
            //     console.log("Extension response:", response);
            // });


            // Make a simple request:
            chrome?.runtime?.sendMessage(extension, {
                type: "STORE_TOKEN",
                token: token
            },
                function (response) {
                    if (!response.success)
                        handleError(url);
                });

            navigate("/"); // or home page
        } else {
            navigate("/login");
        }
    }, []);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
            <p className="text-lg">🔄 Completing login...</p>
        </div>
    );
}
