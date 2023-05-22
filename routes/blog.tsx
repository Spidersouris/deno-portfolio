//? Head component with all Meta tags pre-set
import { CustomHead } from "../components/CustomHead.tsx";
//? Lateral text with theme switcher
import { Base } from "../components/Base.tsx";
//? Navigation Buttons to go back to the previous page or to the next page (optional)
import BlogNavigationButtons from "../islands/BlogNavigationButtons.tsx";
//? Import the template for Blog Post summaries
import { BlogPostSummary } from "../components/BlogPostSummary.tsx";
//? All posts so far
import createdPosts from "../blog_posts/all-blog-posts.ts";

export default function Home() {
  return (
    <>
      <CustomHead
        title="Blog"
        description="Blog posts and articles about my experience with certain tech stacks or situations I had to untangle myself out of."
        link="https://www.theyurig.com/blog"
      >
        <link rel="stylesheet" href="home.css" />
        <link rel="stylesheet" href="navigation-buttons.css" />
        <link rel="stylesheet" href="content.css" />
        <link rel="stylesheet" href="blog.css" />
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        {/* Back button */}
        <BlogNavigationButtons />
        <section class="center">
          {...createdPosts.map((post) => (
            <BlogPostSummary {...post}></BlogPostSummary>
          ))}
          <footer class="blog-footer">
            Disclaimer: I haven't created any of these posts myself, just using
            them as mock data to test the layout.
          </footer>
        </section>
      </Base>
    </>
  );
}
