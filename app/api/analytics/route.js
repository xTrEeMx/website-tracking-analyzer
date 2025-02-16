import { NextResponse } from "next/server";
import { saveAnalyticsData } from "@/lib/storage";

export async function POST(req) {
    try {
        const { url, referrer, userAgent } = await req.json();
        await saveAnalyticsData({ url, referrer, userAgent });
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
