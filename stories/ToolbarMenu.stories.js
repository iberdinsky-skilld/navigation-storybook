import Menu from "./navigation-menu.html.twig";
import DrupalAttribute from "drupal-attribute";
import topMenu from '../fixtures/top-menu.json';
import middleMenu from '../fixtures/middle-menu.json';
import middleMenu2 from '../fixtures/middle-menu2.json';

export default {
  title: "ToolbarMenu",
  component: Menu,
  play: async ({ canvasElement }) => {
    Drupal.attachBehaviors(canvasElement, drupalSettings);
  },
};

export const Basic = {
  args: {
    attributes: new DrupalAttribute().addClass("toolbar-menu"),
    label: "menu label",
    menu_name: "menu-content",
    title: "Menu title",
    items: [
      {
        url: "#",
        title: "Link",
      },
      {
        title: "With child",
        below: [
          {
            url: "#",
            title: "Link",
          },
        ],
      },
      {
        title: "With grand child",
        below: [
          {
            url: "#",
            title: "Link",
            below: [
              {
                url: "#",
                title: "Grandchild Link",
              },
            ],
          },
        ],
      },
    ],
  },
};

export const Top = {
  args: {
    attributes: new DrupalAttribute().addClass("toolbar-menu"),
    label: "menu label",
    menu_name: "menu-content",
    title: "Menu title",
    items: topMenu.items
  },
};

export const Middle = {
  args: {
    attributes: new DrupalAttribute().addClass("toolbar-menu"),
    label: "menu label",
    menu_name: "menu-content",
    title: "Menu title",
    items: middleMenu.items
  },
};

export const Middle2 = {
  args: {
    attributes: new DrupalAttribute().addClass("toolbar-menu"),
    label: "menu label",
    menu_name: "menu-content",
    title: "Menu title",
    items: middleMenu2.items
  },
};

export const Footer = {
  args: {
    attributes: new DrupalAttribute().addClass("toolbar-menu"),
    label: "menu label",
    menu_name: "menu-content",
    title: "Menu title",
    items: [
      {
        url: "#",
        title: "Help",
        class: 'help',
      },
      {
        title: "User",
        class: 'user',
        below: [
          {
            url: "#",
            title: "Link",
          },
        ],
      },
    ],
  },
};