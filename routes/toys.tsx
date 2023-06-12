//? Create blog content inside Base component
import { Base } from "../components/base/Base.tsx";
//? Import a Card component that automatically creates
//? redirection link, card title and centers card child
import { CarouselCard } from "../components/toys/CarouselCard.tsx";
//? Import CustomHead with appropriate metadata
import { CustomHead } from "../components/base/CustomHead.tsx";
//? Navigation Buttons to go back to the previous page or to the next page (optional)
import BlogNavigationButtons from "../components/blog/BlogNavigationButtons.tsx";

export default function Home() {
  return (
    <>
      <CustomHead
        title="Playground"
        description="Various experimentations over things I've seen online."
        link="https://www.theyurig.com/toys"
      >
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <BlogNavigationButtons />
        <article class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          <h1 class="custom-underline-thick hover:custom-tx-ac f-as my-4 text-2xl lg:text-4xl text-center">
            Toys
          </h1>
          <details class="w-full">
            <p class="mb-4">
              This is where I save various curiosity projects I've done from
              resources online. Some toys might have links to a blog post I've
              made with information about my learning experience, in case you
              are also curious to know more and want to try your hand.
            </p>
          </details>
          <div class="flex overflow-auto">
            <CarouselCard link="/toys/spinners" title="Spinners">
              <div class="relative text-4xl select-none space-y-4">
                <div
                  class="animate-x-spin hover:pause"
                  title="Spinning on the X axis"
                >
                  🌀
                </div>
                <div
                  class="animate-y-spin hover:pause"
                  title="Spinning on the Y axis"
                >
                  🌀
                </div>
                <div
                  class="animate-z-spin hover:pause"
                  title="Spinning on the Z axis"
                >
                  🌀
                </div>
              </div>
            </CarouselCard>
            <CarouselCard link="/toys/insanity" title="Insanity">
              <div class="text-[10rem] hover:animate-grow">
                🤪
              </div>
            </CarouselCard>
          </div>
        </article>
      </Base>
    </>
  );
}
