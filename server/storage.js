let prisma;

try {
    prisma = require("@prisma/client").PrismaClient ? new (require("@prisma/client").PrismaClient)() : null;
} catch (error) {
    prisma = null;
    console.warn("⚠️ website-tracking-analyzer: Prisma is not installed. Data will not be stored in a database.");
}

export async function saveAnalyticsData(data) {
    if (!prisma) {
        console.warn("⚠️ website-tracking-analyzer: Skipping database storage. Prisma is not installed.");
        return;
    }

    try {
        await prisma.analytics.create({
            data,
        });
    } catch (error) {
        console.error("❌ website-tracking-analyzer: Failed to save analytics data:", error);
    }
}
