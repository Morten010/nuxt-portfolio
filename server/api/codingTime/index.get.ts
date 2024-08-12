import { WakaTimeResponse } from "~/types";

export default defineCachedEventHandler(async (event) => {
  try {
    const res = await $fetch(
      "https://wakatime.com/api/v1/users/current/all_time_since_today",
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            process.env.WAKATIME_API_KEY || ""
          ).toString("base64")}`,
        },
      }
    );
    
    return {
      data: res as WakaTimeResponse,
    };
  } catch (error) {
    console.error('Error fetching data from WakaTime API:', error);
    return {
      error: 'Failed to fetch data from WakaTime API.',
      // @ts-ignore
      details: error.message,
    };
  }
},
{
  maxAge: 60 * 60 * 24 /* 24 hour */ 
});
