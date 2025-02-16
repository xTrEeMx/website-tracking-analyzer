"use client";
import { useEffect } from "react";

export default function Analytics() {
    useEffect(() => {
        const trackPageView = async () => {
            try {
                const res = await fetch("/api/analytics", {
                    method: "POST",
                    body: JSON.stringify({
                        url: window.location.pathname,
                        referrer: document.referrer,
                        userAgent: navigator.userAgent,
                    }),
                    headers: { "Content-Type": "application/json" },
                });

                if (res.status === 404) {
                    console.warn(
                        "⚠️ website-tracking-analyzer: Missing API route `/app/api/analytics/route.js`. Add it: `export { POST } from 'website-tracking-analyzer/server/route';`"
                    );
                }
            } catch (error) {
                console.error("Analytics tracking failed:", error);
            }
        };

        trackPageView();
    }, []);

    return null;
}
