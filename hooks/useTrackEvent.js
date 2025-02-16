"use client";

export const useTrackEvent = () => {
    const trackEvent = async (eventName, data = {}) => {
        await fetch("/api/analytics", {
            method: "POST",
            body: JSON.stringify({ event: eventName, ...data }),
            headers: { "Content-Type": "application/json" },
        });
    };

    return { trackEvent };
};
