import { request } from './datocms';
import { metaTagsFragment, responsiveImageFragment } from './fragments';

export async function getHomePage() {
  console.log("getting home")
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
};

export function testing123(){
  console.log("123");
  return "123"
}

export async function getWorks() {
  console.log("GETTING WORKS")
  const data = await request({
    query: `query {
      allWorks {
        id
        position
        projectname
        slug
        description
      }
    }`
  })
  return data?.allWorks;
}

export async function getWorksCount() {
  console.log("getting count")
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
};

// export function testing123() {
//     console.log("test function")
//     return "testing 123"
// }

// export async function getBlogInfo() {
//   const data = await request( {
//     query: `query{
//         site: _site {
//           favicon: faviconMetaTags {
//             ...metaTagsFragment
//           }
//         }
//         blog {
//           seo: _seoMetaTags {
//             ...metaTagsFragment
//           }
//         }
//         allPosts(orderBy: date_DESC, first: 20) {
//           title
//           slug
//           excerpt
//           date
//           coverImage {
//             responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
//               ...responsiveImageFragment
//             }
//           }
//           author {
//             name
//             picture {
//               url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
//             }
//           }
//         }
//       }

//       ${metaTagsFragment}
//       ${responsiveImageFragment}
//     `,
//   })
//   return data?.allPosts
// }



// photo {
//   responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
//     ...responsiveImageFragment
//   }
//   alt