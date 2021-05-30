import { request } from './datocms';


export async function getHomePage() {
    const data = await request({
      query: `query {
        home {
          id
          name
          tagline
        }
      }
      `,
    });
    return data?.home;
}