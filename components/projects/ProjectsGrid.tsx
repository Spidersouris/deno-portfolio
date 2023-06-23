//? Component that renders a single project on the grid
import { ProjectDisplay } from "./ProjectDisplay.tsx";
//? Properties requires to create a ProjectDisplay
import type { ProjectDisplayProperties } from "../../types/ProjectDisplayProperties.ts";

//? Array of projects to be rendered and displayed
const projects: ProjectDisplayProperties[] = [
  //* Expenses tracker
  {
    projectLink: "/projects/expenses-tracker",
    projectTitle:
      "Expenses tracker that allow filtering by year and provides simple bar charts for each month's totals",
    projectImageLink:
      "https://cdn.discordapp.com/attachments/576538316296421399/1120271217954406420/image.png",
    projectName: "Expenses tracker",
  },
  //* Food order
  {
    projectLink: "/projects/food-order",
    projectTitle:
      "Mock of a food order app. Comes with a built-in cart system that allows the user to manage their items",
    projectImageLink:
      "https://media.discordapp.net/attachments/576538316296421399/1120279085952794634/image.png",
    projectName: "Food order",
  },
  //* Retirement calculator
  {
    projectLink: "/projects/retirement-calculator",
    projectTitle:
      "Calculate how much more time/money you need to invest until you are able to FIRE retire and live from your returns forever",
    projectImageLink:
      "https://media.discordapp.net/attachments/576538316296421399/1121945060561387542/image.png",
    projectName: "Retirement calculator",
  },
];

//
//? Creates a column grid of projects created
export function ProjectsGrid() {
  return (
    <div class="flex flex-wrap w-full mb-4">
      {projects.map((project) => <ProjectDisplay {...project} />)}
    </div>
  );
}
