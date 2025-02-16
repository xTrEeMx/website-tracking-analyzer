import { NextResponse } from "next/server";
import { saveAnalyticsData } from "./storage"; // Handles optional database storage

export async function POST(req) {
    try {
        const { url, referrer, userAgent, event } = await req.json();

        if (process.env.ANALYTICS_USE_DB === "true") {
            await saveAnalyticsData({ url, referrer, userAgent, event });
        } else {
            console.log("Analytics Event:", { url, referrer, userAgent, event });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export default { POST };
