import TopBar from "../navigation/templates/top-bar.html.twig";
import dropdown, { Basic as BasicDropdown } from "./ToolbarDropdown.stories";

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: "TopBar",
  component: TopBar,
  play: async ({ canvasElement }) => {
    Drupal.attachBehaviors(canvasElement, drupalSettings);
  },
};

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Basic = {
  args: {
    local_tasks: `${dropdown.component({ ...BasicDropdown.args })}`,
  },
};
