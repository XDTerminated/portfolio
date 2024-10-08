import wretch from "wretch";

import { env } from "../utils";

// Instantiate and configure wretch
const api = wretch("https://wakatime.com", { cache: "no-store" })
    .errorType("json")
    .resolve((r) => r.json());

// Fetch stats from wakatime
export const getCodingStats = async () => {
    try {
        return await api
            .headers({
                Authorization: `Basic ${Buffer.from(env.WAKATIME_API_KEY).toString("base64")}`,
            })
            .get("/api/v1/users/current/stats");
    } catch (error) {
        console.error("Error fetching data:", error);
        return { error: "Failed fetching data" };
    }
};
