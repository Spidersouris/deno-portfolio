// Unused because Deno Deploy doesn't support dynamically
// importing this file from /services/fetchPosts.ts

// //? Head component with all Meta tags pre-set
// import { CustomHead } from "../../components/base/CustomHead.tsx";
// //? Lateral text with theme switcher
// import { Base } from "../../components/base/Base.tsx";
// //? Navigation Buttons to go back to the previous page or to the next page (optional)
// import {BlogNavigationButtons} from "../../components/blog/BlogNavigationButtons.tsx";
// //? To know what is the current route
// import { Handlers } from "$fresh/server.ts";
// //? Parse content from a file into JSX
// import contentParser from "../../services/contentParser.tsx";
// //? Fetch a post from source and return it as a CompletePost type
// import fetchPost from "../../services/fetchPost.ts";
// //? Import CompletePost type
// import type {
//   CompletePost, // Post interface
// } from "../../types/Post.ts";
// import FetchPostError from "../../types/FetchPostError.ts";

// //? Runs before the render function to fetch the post from the files, then
// //? pushes
// export const handler: Handlers = {
//   async GET(req, ctx) {
//     const blogpost = await fetchPost(ctx.params.post);
//     if (blogpost instanceof FetchPostError) {
//       return ctx.renderNotFound();
//     }
//     return ctx.render(blogpost);
//   },
// };

// //? Exports a single Blog Post Summary
// export default function CompleteBlogPost(
//   { data: savedPost }: { data: CompletePost },
// ) {
//   return (
//     <>
//       <CustomHead
//         title={savedPost.title}
//         description={savedPost.description}
//         link={"https://www.theyurig.com/blog" + savedPost.link}
//       >
//         <link rel="stylesheet" href="/syntax-highlighting.css" />
//         {
//           /* Syntax highlight for code. How can we do this better
//             so we don't cause Cumulative Layout Shift?
//             There must be a better way... */

//           // Checked March 23rd, 2023 and there is currently no better
//           // option for Deno. As for NPM packages, options to consider are
//           // rc-highlight: https://www.npmjs.com/package/rc-highlight
//           // and lowlight: https://github.com/wooorm/lowlight
//         }
//         <script
//           type="module"
//           dangerouslySetInnerHTML={{
//             __html:
//               `import { highlightAll } from 'https://unpkg.com/@speed-highlight/core/dist/index.js';
//             highlightAll();`,
//           }}
//         />
//       </CustomHead>
//       {/* Base page layout with theme switching and footer outside of accent box */}
//       <Base>
//         {/* Back button */}
//         <BlogNavigationButtons />
//         {/* Complete Post */}
//         <article class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
//           {/* Centered heading */}
//           <h2 class="custom-underline-thick hover:custom-tx-ac f-as my-4 text-4xl text-center>{savedPost.title}</h2>
//           {/* Post creation date */}
//           <p class="text-sm mb-2 text-center">
//             {new Date(savedPost.date).toLocaleString()}
//           </p>
//           {/* Post content, parsed and spread */}
//           <div class="text-justify">
//             {...contentParser(savedPost.content)}
//           </div>
//           {/* Post author */}
//           <footer class="mt-auto w-full text-right text-sm mt-auto">
//             {savedPost.author}
//           </footer>
//         </article>
//       </Base>
//     </>
//   );
// }
