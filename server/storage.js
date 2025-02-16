import prisma from "./prisma"; // Ensure Prisma is set up

export async function saveAnalyticsData(data) {
    await prisma.analytics.create({
        data,
    });
}
