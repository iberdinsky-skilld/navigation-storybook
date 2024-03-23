import Button from "../navigation/templates/toolbar-button.html.twig";
import DrupalAttribute from "drupal-attribute";

export default {
  title: "ToolbarButton",
  component: Button,
  argTypes: {
    icon: {
      control: { type: "select" },
      options: ["shortcuts", "help", "content"],
    },
    text: { control: "text" },
    is_dropdown: { control: "boolean" },
  },
  play: async ({ canvasElement }) => {
    Drupal.attachBehaviors(canvasElement, drupalSettings);
  },
};

export const Basic = {
  args: {
    text: "Button",
  },
};

export const WithControls = {
  args: {
    text: "Button with controls",
    is_dropdown: true,
    attributes: new DrupalAttribute().setAttribute("aria-controls").addClass('toolbar-button--expand--side'),
  },
};

export const WithIcon = {
  args: {
    text: "Button with icon",
    icon: "content",
  },
};

export const primary = {
  args: {
    text: "Primary Button",
    extra_classes: "toolbar-button--primary",
  },
};

export const weight400 = {
  args: {
    text: "Font weight 400",
    extra_classes: "toolbar-button--weight--400",
  },
};
