//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/base/CustomHead.tsx";
//? Lateral text with theme switcher
import { Base } from "../../components/base/Base.tsx";
//? Navigation Buttons to go back to the previous page or to the next page (optional)
import BlogNavigationButtons from "../../components/blog/BlogNavigationButtons.tsx";
//? A HTML Link component to pre-format links and reduce boiletplate
import { GradientLink } from "../../components/base/GradientLink.tsx";

export default function Home() {
  return (
    <>
      <CustomHead
        title="How to stop Theme flickering in Fresh"
        description="A guide on how to make your Theme Switcher to no longer flicker when the page loads."
        link="https://www.theyurig.com/blog/stopping-theme-flickering-deno-fresh"
      >
        <link rel="stylesheet" href="/syntax-highlighting.css" />
        {
          /* Syntax highlight for code. How can we do this better
            so we don't cause Cumulative Layout Shift?
            There must be a better way... */

          // Checked March 23rd, 2023 and there is currently no better
          // option for Deno. As for NPM packages, options to consider are
          // rc-highlight: https://www.npmjs.com/package/rc-highlight
          // and lowlight: https://github.com/wooorm/lowlight
        }
        <script
          type="module"
          dangerouslySetInnerHTML={{
            __html:
              `import { highlightAll } from 'https://unpkg.com/@speed-highlight/core/dist/index.js';
            highlightAll();`,
          }}
        />
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        {/* Back button */}
        <BlogNavigationButtons
          back={{
            title: "Read again: Part 1 - Creating a Theme Switcher",
            link: "/blog/how-create-theme-switcher-deno-fresh",
          }}
        />
        <article class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          <h1 class="custom-underline-thick hover:custom-tx-ac f-as my-4 text-2xl lg:text-4xl text-center">
            How to stop Theme flickering in Fresh
          </h1>
          {/* Post creation date */}
          <p class="text-sm mb-2 w-full text-center">
            {new Date(1684951466007).toLocaleString()}
          </p>
          {/* Blog post opening image */}
          <img
            src="https://media.giphy.com/media/l0HlKQQ8STZUREvE4/giphy.gif"
            alt="Lights flickering in a Stranger Things scene"
            title="Wouldn't it be better if the lights would just stay on?"
            class="my-4 object-cover"
          />
          {/* Introduction */}
          <p class="my-2 text-justify">
            In the{" "}
            <GradientLink
              link="/blog/how-create-theme-switcher-deno-fresh"
              title="Part 1 of this blog post. You read that before, right...?"
              content="previous post"
              customRel="prev"
            />
            , we built a simple Theme Switcher using Preact and Fresh on top of
            Deno. Two things were missing in that implementation we are going to
            fix both of them now:
          </p>
          {/* Presenting the problem */}
          <p class="my-2 text-justify">
            To understand how to fix both of those problems, we first need to
            understand why they happened in the first place.
          </p>
          {/* Heading and image introducing to next topic */}
          <h2 class="custom-underline-thick hover:custom-tx-ac text-3xl my-2 f-as">
            The Island Architecture
          </h2>
          <img
            src="https://images.unsplash.com/photo-1602400546471-b8efe700c80a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=958&q=80"
            alt="Picture of Seychelles, by Kamil Rogalinski"
            title="Small bits where the interesting things happens, surrounded by nothingness"
            class="my-4 object-cover h-[25em]"
          />
          {/* Explaining topic */}
          <p class="my-2 text-justify">
            The{" "}
            <GradientLink
              link="https://www.patterns.dev/posts/islands-architecture"
              title="It's called like that because it's a lot of one thing with sprinkles of something else"
              content="Islands Architecture"
              customRel="noopener noreferrer"
            />{" "}
            is a very interesting design pattern. You serve static HTML content
            (the "ocean") to the client's browser and only hydrate a little of
            Javascript (the "island") in specific portions of the User
            Interface, upon user request. By default, this approach will never
            ship any Javascript to the client, essentially creating zero
            overhead on served pages, which leads to more performant pages with
            higher Lighthouse scores.
          </p>
          <img
            src="https://remix.run/remix-v1.jpg"
            alt="Remix's logo"
            title="The precursor"
          />
          <p class="my-2 text-justify">
            Fresh wasn't the first to come up with this idea, mind you.{" "}
            <GradientLink
              link="https://remix.run/"
              title="You should watch the 'Everything is a Remix' documentary on YouTube, it was a cornerstone of my Marketing graduation"
              content="Remix"
              customRel="noopener noreferrer"
            />{" "}
            (from the same creators of{" "}
            <GradientLink
              link="https://reactrouter.com/en/main/start/overview"
              title="What if you could load a bunch of pages without leaving the first page? With React Router, you can!"
              content="React Router"
              customRel="noopener noreferrer"
            />{" "}
            (!))had already started working on this in early 2022, they even
            tried to sell a license to use the framework, which{" "}
            <GradientLink
              link="https://twitter.com/remix_run/status/1460652199269179393"
              title="That was a certified 'ouchie!' moment"
              content="didn't work well"
              customRel="noopener noreferrer"
            />{" "}
            for them.
          </p>
          {/* Further insight into the problem */}
          <p class="my-2 text-justify">
            So by now, you might have realized that not shipping Javascript by
            default has its drawbacks. If the page first needs to load before it
            can download the Javascript to change the theme colors, then we
            can't have our theme applied from the get-go, with no choice but to
            have our clients have to put up with the flickering, right? Well,
            not exactly...
          </p>
          {/* Main content start */}
          <h2 class="custom-underline-thick hover:custom-tx-ac text-3xl my-2 f-as">
            Opting out of the Islands Architecture
          </h2>
          <p class="my-2 text-justify">
            It's possible that we can ship the required Javascript on every
            page, but in doing so, you need to understand the tradeoffs:
          </p>
          <ol
            start={1}
            class="self-start list-[lower-greek]"
          >
            <li class="ml-10 lg:ml-0 transition-[margin-left] ease-in-out duration-500">
              You introduce consistent overhead to every page load, which will
              progressively worsen your Lighthouse page performance score, the
              more you do it.
            </li>
            <li class="ml-10 lg:ml-0 transition-[margin-left] ease-in-out duration-500">
              You are deviating from the main design choice for the framework,
              which means that you will not find a lot of resources to do things
              this way from this point onwards. If you have questions, you will
              have to mostly figure something out by yourself.
            </li>
          </ol>
          <p class="my-2 text-justify">
            At this point, I have to ask you: Is this feature essential for your
            project? Is the design of your website impossible to be done in a
            happy medium between Light and Dark modes? If the answer to both of
            these questions is "yes", we can now start looking into how to break
            the rules.
          </p>
          {/* Script tag warning */}
          {/*  */}
          <h2 class="custom-underline-thick hover:custom-tx-ac text-3xl my-2 f-as">
            Adding a script file to every response
          </h2>
          <p class="my-2 text-justify">
            Be very careful about the <code class="shj-lang-js">script</code>
            {" "}
            tags that you import on your project. Not knowing what you are doing
            can leave you (and your users) vulnerable to{" "}
            <GradientLink
              link="https://en.wikipedia.org/wiki/Cross-site_scripting"
              title="XSS is really, really bad"
              content="Cross Site Scripting"
              customRel="noopener noreferrer"
            />{" "}
            attacks (XSS, for short). Make sure that you properly review any
            code that suggests using these and, if in doubt, don't use them in
            your project!
          </p>
          <p class="my-2 text-justify">
            In our case, our implementation is incredibly simple. We just add a
            small script to the response's{" "}
            <code class="shj-lang-js">&lt;head&gt;</code>{" "}
            that checks if the user has a theme saved in{" "}
            <code class="shj-lang-js">localStorage</code>{" "}
            and if they don't, we try to apply their OS-preferred color scheme.
            Let's have a look:
          </p>
          {/* Code block with initial implementation */}
          <div class="shj-lang-js">
            {`// /routes/index.tsx (but can be any page)
export default function Home() {
    return (
        <>
            <Head>
                // must not be deferred/module to stop flickering!
                <script src="/themeSwitcher.js"></script>
            </Head>
            // your page response body goes here
        </>
    );
}`}
          </div>
          <p class="my-2 text-justify">And inside the script file:</p>
          <div class="shj-lang-js">
            {`// /static/themeSwitcher.js
const selectedTheme = localStorage.getItem("theme");
if (selectedTheme === null) {
    window.showDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    localStorage.setItem("theme", window.showDarkMode ? "Dark" : "Light");
} else {
    window.showDarkMode = selectedTheme === "Dark";
}
const cssRoot = document.querySelector(":root");
if (window.showDarkMode === true) {
    cssRoot.style.setProperty("--base-color", "rgb(15 23 42)");
    cssRoot.style.setProperty("--neutral-color", "rgb(203 213 225)");
    cssRoot.style.setProperty("--accent-color", "rgb(126 34 206)");
} else {
    cssRoot.style.setProperty("--base-color", "rgb(203 213 225)");
    cssRoot.style.setProperty("--neutral-color", "rgb(15 23 42)");
    cssRoot.style.setProperty("--accent-color", "rgb(220 38 38)");
}`}
          </div>
          <p class="my-2 text-justify">In order:</p>
          <ol
            start={1}
            class="self-start list-[lower-greek]"
          >
            <li class="ml-10 lg:ml-0 transition-[margin-left] ease-in-out duration-500">
              Check if there is a theme already saved on{" "}
              <code class="shj-lang-js">localStorage</code>. If there isn't one,
              check what's the user preferred color scheme, save it, and set
              {" "}
              <code class="shj-lang-js">
                window.showDarkMode
              </code>
              . If there is, you just set{" "}
              <code class="shj-lang-js">window.showDarkMode</code>{" "}
              on/off based on the saved theme.
            </li>
            <li class="ml-10 lg:ml-0 transition-[margin-left] ease-in-out duration-500">
              Check window.showDarkMode and apply the colors to the{" "}
              <code class="shj-lang-js">root</code>{"  "}
              element for either mode based on that being{" "}
              <code class="shj-lang-js">
                true
              </code>{" "}
              or{" "}
              <code class="shj-lang-js">
                false
              </code>
              .
            </li>
          </ol>
          <p class="my-2 text-justify">
            Now all we gotta do is update our component and we are done!
          </p>
          <div class="shj-lang-js">
            {`// /islands/themeSwitcher.tsx (updated)
...
const [theme, setTheme] = useState(
    // @ts-ignore This property gets set by themeSwitcher.js in <Head>
    window.showDarkMode === true ? "Dark" : "Light",
);

useEffect(() => {
    if (isInitialMount.current) {
        isInitialMount.current = false;
        return;
    }
    ...
}
...`}
          </div>
          <p class="my-2 text-justify">
            Because{" "}
            <code class="shj-lang-js">
              window.showDarkMode
            </code>{" "}
            is set within the response's{" "}
            <code class="shj-lang-js">&lt;head&gt;</code>
            , Typescript doesn't know that it exists and will give you a
            warning, hence the suppression above. Since your{" "}
            <code class="shj-lang-js">useEffect()</code>{" "}
            no longer needs to set the theme based on what is saved on{" "}
            <code class="shj-lang-js">localStorage</code>, we can remove that
            bit too, leaving the initial check to only validate if it's the
            first run and skip when it is.
          </p>
          <p class="my-2 text-justify">
            So there you have it, a Theme Switcher that sets the correct theme,
            acknowledges the user's preferences, and doesn't flicker on the
            initial load.
          </p>
          {/* Alternative options to this */}
          <h2 class="custom-underline-thick hover:custom-tx-ac text-3xl my-2 f-as">
            Alternatives to using script tags
          </h2>
          <p class="my-2 text-justify">
            What other ways could you possibly implement a Theme Switcher
            without needing to script files on every request?
          </p>
          {/* Route based */}
          <p class="my-2 text-justify">
            One of the options would be to use route-based theming. You could
            create your entire website nested in either a{" "}
            <code class="shj-lang-js">
              /light
            </code>{" "}
            or{" "}
            <code class="shj-lang-js">
              /dark
            </code>{" "}
            route (or better yet, a single{" "}
            <code class="shj-lang-js">
              /[theme]
            </code>{" "}
            route!), and have your index redirect to either of those based on
            their OS color-scheme preference. The drawback to this approach is
            that you can't give the users a pretty theme transition when they
            switch themes, since that will force an entire page reload when they
            get redirected, but regardless, it's still a possibility that you
            could implement.
          </p>
          {/* App router, but maybe just use NextJS instead? */}
          <p class="my-2 text-justify">
            Another option would be to not save the theme to{" "}
            <code class="shj-lang-js">
              localStorage
            </code>{" "}
            and also never redirect, essentially turning your application into a
            SPA, making your users navigate through pages using{" "}
            <GradientLink
              link="https://reactrouter.com/en/main/start/overview"
              title="You are here, but then suddenly you are there"
              content="React Router"
              customRel="noopener noreferrer"
            />{" "}
            instead. The drawback to this approach would be to have the theme
            reset on every visit, which would be annoying if people had to come
            back to your website regularly. If you are just creating a portfolio
            website that is meant for recruiters to check once and dip, that is
            not a big deal, but for a blogging website (like this one!), it's
            pretty much unacceptable. This option also isn't really what Fresh
            is going for either, so at this point you might as well just use
            another framework entirely instead, maybe even going full{" "}
            <GradientLink
              link="https://vercel.com/templates/next.js/nextjs-boilerplate"
              title="Quickly start a new NextJS project in seconds"
              content="NextJS + React"
              customRel="noopener noreferrer"
            />{" "}
            instead.
          </p>
          {/* Post author */}
          <footer class="mt-auto w-full text-right text-sm">
            Written with 💞 by TheYuriG
          </footer>
        </article>
      </Base>
    </>
  );
}
