import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      animation: {
        // Toys card pulsing animation
        "card-pulse": "card-pulse 1.2s ease-out infinite",
        // Insanity grow and shrink
        grow: "grow 1.2s ease-out infinite",
        // Waving animation for hello emoji in the home page
        waving: "waving 0.3s linear infinite alternate;",
        // blinking animation
        blinking: "blinking 1.5s step-end infinite",
        // Loading spinner animation
        loading: "loading-spinner 1.8s infinite ease-in-out",
        // Slide from bottom to top
        "slide-top": "slide-top 0.6s ease-in-out both", // little hack to attach animation delay to animation
        // Slide from left to right
        "slide-right": "slide-right 0.6s ease-in-out both", // little hack to attach animation delay to animation
        // Rotates on X axis
        "x-spin": "x-rotation 4s linear infinite;",
        // Rotates on Y axis
        "y-spin": "y-rotation 5s linear infinite;",
        // Rotates on Z axis
        "z-spin": "z-rotation 6s linear infinite;",
        // Fade in animation from opacity
        "fade-in": "fade-in 0.5s",
      },
      keyframes: {
        // Toys card pulsing animation
        "card-pulse": {
          "50%": {
            "box-shadow":
              " 0 0 0.2em 0.1em var(--neutral-color) inset, 0 0 0.2em 0.1em var(--neutral-color)",
          },

          "100%": {
            "box-shadow":
              "0 0 0 0 var(--neutral-color) inset, 0 0 0 0 var(--neutral-color)",
          },
        },
        // Insanity grow and shrink
        grow: {
          "50%": {
            "transform": "scale(1.1)",
          },

          "100%": {
            "transform": "scale(1)",
          },
        },
        // Waving emoji for TheYuriG on home page
        waving: {
          "0%": {
            "transform": "translate(10%, 0%) rotate(60deg)",
          },

          "100%": {
            "transform": "translate(-10%, 10%) rotate(0deg)",
          },
        },
        // Blinking animation
        blinking: {
          "0%, 100%": {
            opacity: 0,
          },
          "50%": {
            opacity: 1,
          },
        },
        // Loading spinner animation
        "loading-spinner": {
          "0%": {
            "stroke-dasharray": "1, 98",
            "stroke-dashoffset": "-105",
          },

          "50%": {
            "stroke-dasharray": "80, 15",
            "stroke-dashoffset": "-160",
          },

          "100%": {
            "stroke-dasharray": "1, 98",
            "stroke-dashoffset": "-300",
          },
        },
        // Slide content from bottom to top
        "slide-top": {
          "0%": {
            opacity: 0,
            transform: "translateY(5em)",
          },

          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        // Slide content from left to right
        "slide-right": {
          "0%": {
            opacity: 0,
            transform: "translateX(-3em)",
          },

          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        // Rotates on X axis
        "x-rotation": {
          "0%": {
            transform: "rotateX(0turn)",
          },

          "100%": {
            transform: "rotateX(1turn)",
          },
        },
        // Rotates on Y axis
        "y-rotation": {
          "0%": {
            transform: "rotateY(0turn)",
          },

          "100%": {
            transform: "rotateY(1turn)",
          },
        },
        // Rotates on Z axis
        "z-rotation": {
          "0%": {
            transform: "rotateZ(0turn)",
          },

          "100%": {
            transform: "rotateZ(1turn)",
          },
        },
        // Fade in animation from opacity
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
    },
  },
  // Custom classes
  plugins: {
    // Animation delay for items sliding to right
    "delay-slide-right": { "animation-delay": "calc(var(--dur)*0.2s)" },
    // Animation delay for items sliding to top
    "delay-slide-top": { "animation-delay": "calc(var(--dur)*0.3s)" },
    // Animation pause
    pause: {
      "animation-play-state": "paused",
    },
    // Style scrollbar width and colors
    "styled-scrollbar": {
      "&::-webkit-scrollbar-thumb": {
        "background-color": "transparent",
        outline: "2px solid var(--accent-color)",
        "outline-offset": "-0.1rem",
        "border-radius": "0.3rem",
      },
      "&::-webkit-scrollbar": {
        width: "0.8em",
      },
    },
    // Change font to custom Alfa Slab One
    "f-as": {
      "font-family": "'Alfa Slab One', cursive",
    },
    // Borders
    "custom-bo": ([borderType]: Array<string>) => {
      switch (borderType) {
        // Accent border
        case "ac":
          return {
            border: "2px solid var(--accent-color)",
          };
        // Base border
        case "bc":
          return {
            border: "2px solid var(--base-color)",
          };
        // Neutral border
        case "nc":
          return {
            border: "2px solid var(--neutral-color)",
          };
      }
    },
    // Box Shadows
    "custom-sh": ([boxShadowType]: Array<string>) => {
      switch (boxShadowType) {
        // Accent box shadow
        case "ac":
          return {
            "box-shadow": "0.1em 0.1em 0.3em var(--accent-color)",
          };
        // Base box shadow
        case "bc":
          return {
            "box-shadow": "0.1em 0.1em 0.3em var(--base-color)",
          };
        // Neutral box shadow
        case "nc":
          return {
            "box-shadow": "0.1em 0.1em 0.3em var(--neutral-color)",
          };
      }
    },
    // Text colors
    "custom-tx": ([textType]: Array<string>) => {
      switch (textType) {
        // Accent text
        case "ac":
          return {
            color: "var(--accent-color)",
          };
        // Base text
        case "bc":
          return {
            color: "var(--base-color)",
          };
        // Neutral text
        case "nc":
          return {
            color: "var(--neutral-color)",
          };
      }
    },
    // Background colors
    "custom-bg": ([backgroundColorType]: Array<string>) => {
      switch (backgroundColorType) {
        // Accent background
        case "ac":
          return {
            "background-color": "var(--accent-color)",
          };
        // Base background
        case "bc":
          return { "background-color": "var(--base-color)" };
        // Neutral background
        case "nc":
          return {
            "background-color": "var(--neutral-color)",
          };
      }
    },
    // Transitions
    "custom-tr": (transition: Array<string>) => {
      const transitions: Array<string> = [];
      for (const tr of transition) {
        switch (tr) {
          // Define text color transition
          case "tx":
            transitions.push("color 0.9s ease-in-out");
            break;
          // Define background color transition
          case "bg":
            transitions.push("background-color 0.8s ease-in-out");
            break;
          // Define border color transition
          case "bo":
            transitions.push("border 0.6s ease-in-out");
            break;
          // Define fill color transition
          case "fi":
            transitions.push("fill 0.9s ease-in-out");
            break;
          // Define text color and background color transition
          case "txbgbo":
            transitions.push(
              "color 0.9s ease-in-out, background-color 0.8s ease-in-out,border 0.6s ease-in-out",
            );
            break;
        }
      }
      return { transition: transitions.join(",") };
    },
    // Button types
    "custom-button": ([buttonType]: Array<string>) => {
      switch (buttonType) {
        // Accent button
        case "ac":
          return {
            "&": {
              transition:
                "box-shadow 0.4s ease-in-out,transform 0.4s ease-in-out,color 0.9s ease-in-out,background-color 0.8s ease-in-out,border 0.6s ease-in-out",
            },
            "&:focus,&:hover": {
              /* X-axis, Y-axis (needs to match translateY!), blur, color */
              "box-shadow": "0em 0.15em 0.1em var(--neutral-color)",
              /* Elevate button, must match Y-axis shadow above! */
              transform: "translateY(-0.15em)",
            },
          };
        // Styled button
        case "st":
          return {
            "&": {
              "box-shadow": "0.1em 0.2em var(--accent-color)",
              "text-shadow": "0.05em 0.05em 0 var(--accent-color)",
              "transition":
                "background-color 0.8s ease-in-out, color 0.9s, box-shadow 0.4s, border 0.8s, text-shadow 0.4s",
            },
            "&:focus,&:hover": {
              "box-shadow": "0.1em 0.2em var(--neutral-color)",
              "text-shadow": "0.05em 0.05em 0 var(--neutral-color)",
            },
          };
      }
    },
    "custom-underline": ([underlineType]: Array<string>) => {
      switch (underlineType) {
        // Create a gradient underline below a link
        case "gradient":
          return {
            "&": {
              display: "inline-block",
              position: "relative",
              "text-decoration": "none",
              transition: "color ease-in-out 0.5s",
            },
            "&:before": {
              content: "''",
              position: "absolute",
              bottom: "-0.05em",
              width: "100%",
              height: "3px",
              background:
                "linear-gradient(111.3deg, #9c27b0 9.6%, #00bcd4 93.6%)",
            },
          };
        // Create a dotted underline that becomes solid on hover
        case "dotted":
          return {
            "&": {
              "text-underline-offset": "0.2em",
              "text-decoration": "underline dotted var(--neutral-color) 0.1em",
              transition:
                "text-underline-offset 600ms, text-decoration 600ms, color 600ms",
            },
            "&:hover": {
              "text-decoration": "underline solid var(--accent-color) 0.1em",
              "text-underline-offset": "0.3em",
            },
          };
        // Fat neutral underline behind text, good for titles
        case "thick":
          return {
            "&": {
              transition: "color 0.5s ease-in-out",
              "text-decoration-color": "var(--neutral-color)",
              "margin-bottom": "0.2em",
              "font-size": "3rem",
              "line-height": "1",
            },
            "&:hover": {
              "text-decoration-line": "underline",
              "text-decoration-skip-ink": "none",
              "text-underline-offset": "-0.2em",
              "text-decoration-thickness": "0.3em",
            },
          };
      }
    },
  },
} as Options;
