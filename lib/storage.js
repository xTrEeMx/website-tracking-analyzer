import prisma from "./prisma";  // Prisma instance

export async function saveAnalyticsData(data) {
    await prisma.analytics.create({
        data,
    });
}
