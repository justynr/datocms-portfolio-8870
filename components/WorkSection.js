
//import {getWorksCount} from "../lib/queries"
//import { request } from '../lib/datocms';

// export async function getStaticProps({ preview }) {
//     const data = 
//     {
//       query: `
//         {
//             allPosts(orderBy: date_DESC, first: 20) {
//             title
//             slug
//             excerpt
//             date
//             coverImage {
//               responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
//                 ...responsiveImageFragment
//               }
//             }
//             author {
//               name
//               picture {
//                 url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
//               }
//             }
//           }
//         }
  
//         ${metaTagsFragment}
//         ${responsiveImageFragment}
//       `,
//     };
  
//     return {
//       props: { 
//         data
//       },
//     };
//   }

export default function WorkSection() {
    return <p>This is the work section</p>
}
  