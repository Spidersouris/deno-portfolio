//? Import handlers to manage HTTP methods for GET/POST to /toys/syntax-highlight
import { Handlers } from "$fresh/server.ts";
//? Import service that handles saving data to KV and then deleting them later
import { manageHighlightTextOnKv } from "../../services/syntax-highlight/manage-highlight-text-on-KV.ts";

//? Export a middleware responsible for handling incoming GET/POST requests to /toys/syntax-highlight
export const syntaxHighlightMiddleware: Handlers = {
  //? If the user is trying to load the page, display it
  GET(req, ctx) {
    const errors = new URL(req.url).searchParams.get("error") || "";
    return ctx.render({ errors });
  },
  //? When the user attempts to submit the highlighted text, save it to
  //? Deno KV, which later gets loaded on the next route
  async POST(req, ctx) {
    const form = await req.formData();
    const text = form.get("text-to-highlight")?.toString();

    const headers = new Headers();

    //? User error, sent empty form
    if (text === "" || text === undefined) {
      headers.set(
        "location",
        "/toys/syntax-highlight?error=Empty%2Finvalid%20form%20provided!",
      );
      return new Response("Error! You attempted to submit an empty form!", {
        status: 303, // See Also HTTP status code
        headers,
      });
    }

    try {
      const now = new Date().getTime();
      await manageHighlightTextOnKv(text, now);

      headers.set("location", "/toys/highlighted-text/" + now.toString());
      return new Response(null, {
        status: 303, // See Other HTTP status code
        headers,
      });
    } catch (error) {
      headers.set("location", "/toys/highlighted-text/error");
      return new Response(null, {
        status: 500, // Internal Server Error HTTP status code
      });
    }
  },
};
