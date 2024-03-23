import ToolbarDropdown from "./toolbar-dropdown.twig";

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: "ToolbarDropdown",
  component: ToolbarDropdown,
  play: async ({ canvasElement }) => {
    Drupal.attachBehaviors(canvasElement, drupalSettings);
  },
};

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Basic = {};
