//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/base/CustomHead.tsx";
//? Create blog content inside Base component
import { Base } from "../../components/base/Base.tsx";
//? Default styled header
import { StyledHeader } from "../../components/UI/StyledHeader.tsx";
//? Navigation Buttons to go back to the previous page or to the next article
import { BlogNavigationButtons } from "../../components/blog/BlogNavigationButtons.tsx";
//? Stylized and functional Form Island
import FormWithValidation from "../../islands/FormWithValidation.tsx";

export default function Home() {
  return (
    <>
      <CustomHead
        title="Form"
        description="A form to pretend to request Stimulus Check built with Preact."
        link="https://www.theyurig.com/work/form"
      >
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <BlogNavigationButtons
          back={{ title: "Return to the works page", link: "/work" }}
        />
        <article class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          {/* Title header */}
          <StyledHeader title="Stimulus Checks Eligibility Form" />
          <FormWithValidation />
        </article>
      </Base>
    </>
  );
}
