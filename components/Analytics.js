"use client";
import { useEffect } from "react";

export default function Analytics() {
    useEffect(() => {
        const trackPageView = async () => {
            await fetch("/api/analytics", {
                method: "POST",
                body: JSON.stringify({
                    url: window.location.pathname,
                    referrer: document.referrer,
                    userAgent: navigator.userAgent,
                }),
                headers: { "Content-Type": "application/json" },
            });
        };

        trackPageView();
    }, []);

    return null;
}
