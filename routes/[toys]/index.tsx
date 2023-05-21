//? Create blog content inside Base component
import { Base } from "../../components/Base.tsx";
//? Import a Card component that automatically creates
//? redirection link, card title and centers card child
import { CarouselCard } from "../../components/CarouselCard.tsx";
//? Import CustomHead with appropriate metadata
import { CustomHead } from "../../components/CustomHead.tsx";
//? Navigation Buttons to go back to the previous page or to the next page (optional)
import BlogNavigationButtons from "../../islands/BlogNavigationButtons.tsx";

export default function Home() {
  return (
    <>
      <CustomHead
        title="Playground"
        description="Various experimentations over things I've seen online."
        link="https://www.theyurig.com/toys"
      >
        <link rel="stylesheet" href="/content.css" />
        <link rel="stylesheet" href="/navigation-buttons.css" />
        <link rel="stylesheet" href="/toys.css" />
        <link rel="stylesheet" href="/carousel-card.css" />
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <BlogNavigationButtons />
        <article>
          <h1>Toys</h1>
          <details style="width: 100%;">
            <p style="margin-bottom: 1em;">
              This is where I save various curiosity projects I've done from
              resources online. Some toys might have links to a blog post I've
              made with information about my learning experience, in case you
              are also curious to know more and want to try your hand.
            </p>
          </details>
          <div class="carousel">
            <CarouselCard link="/toys/spinners" title="Spinners">
              <div class="translate">
                <div
                  id="x-spin"
                  title="Spinning on the X axis"
                  style="transform: translate3d(0em, 0em, 0em)"
                >
                  🌀
                </div>
                <div
                  id="y-spin"
                  title="Spinning on the Y axis"
                  style="transform: translate3d(0em, 0em, 0em)"
                >
                  🌀
                </div>
                <div
                  id="z-spin"
                  title="Spinning on the Z axis"
                  style="transform: translate3d(0em, 0em, 0em)"
                >
                  🌀
                </div>
              </div>
            </CarouselCard>
            <CarouselCard link="/toys/insanity" title="Insanity">
              <div class="insanity">
                🤪
              </div>
            </CarouselCard>
          </div>
        </article>
      </Base>
    </>
  );
}
