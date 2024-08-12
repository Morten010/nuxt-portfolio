import { GithubResponse, WakaTimeResponse } from "~/types";

export default defineCachedEventHandler(async (event) => {
  try {
    const res = await $fetch<GithubResponse>(
      "https://api.github.com/users/morten010/repos",
    );

    // Set Cache-Control to cache the response for 24 hours
    setResponseHeader(event, 'Cache-Control', 'public, max-age=86400, stale-while-revalidate=3600');

    let totalStars = 0;
    

    for(const repo of res){
        totalStars += repo.stargazers_count
    }
    
    return {
      data: totalStars,
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
