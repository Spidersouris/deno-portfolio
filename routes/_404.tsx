//? Head component with all Meta tags pre-set
import { CustomHead } from "../components/base/CustomHead.tsx";
//? Lateral text with theme switcher
import { Base } from "../components/base/Base.tsx";
//? Navigation Buttons to go back to the previous page or to the next page (optional)
import BlogNavigationButtons from "../components/blog/BlogNavigationButtons.tsx";
//? Enable fetching the error URL
import { UnknownPageProps } from "$fresh/server.ts";

//? Renders page whenever the attempted route doesn't exist
export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <>
      <CustomHead
        title="Error! Not found!"
        description="404 Page not found"
        link="https://www.theyurig.com/404"
      >
        <link rel="stylesheet" href="/home.css" />
        <link rel="stylesheet" href="/navigation-buttons.css" />
        <link rel="stylesheet" href="/content.css" />
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <BlogNavigationButtons />
        <section class="center">
          <h1 class="navigation-link">Page not found!</h1>
          <p class="my-2">
            Hi there! Seems like you have reached a page that doesn't exist
            (...yet?). 🤔
          </p>
        </section>
      </Base>
    </>
  );
}
