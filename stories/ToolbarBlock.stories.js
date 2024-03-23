import Block from "../navigation/templates/navigation-block.html.twig"
import DrupalAttribute from "drupal-attribute"
import ToolBarMenu, {
  Top as topToolBarMenu,
  Middle as middleToolBarMenu,
  Middle2 as middle2ToolBarMenu,
  Footer as footerToolBarMenu
} from "./ToolbarMenu.stories"

export default {
  title: "ToolbarBlock",
  component: Block,
  play: async ({ canvasElement }) => {
    Drupal.attachBehaviors(canvasElement, drupalSettings)
  }
}

export const Basic = {
  args: {
    attributes: new DrupalAttribute().addClass("toolbar-block"),
    label: "Block label",
    title_attributes: new DrupalAttribute().addClass("toolbar-block__title"),
    content: "block content"
  }
}

export const TopMenu = {
  args: {
    attributes: new DrupalAttribute().addClass("toolbar-block"),
    label: "Block label",
    title_attributes: new DrupalAttribute().addClass("toolbar-block__title"),
    content: `${ToolBarMenu.component({ ...topToolBarMenu.args })}`
  }
}

export const MiddleMenu = {
  args: {
    attributes: new DrupalAttribute().addClass("toolbar-block"),
    label: "Block label",
    title_attributes: new DrupalAttribute().addClass("toolbar-block__title"),
    content: `${ToolBarMenu.component({ ...middleToolBarMenu.args })}`
  }
}

export const MiddleMenu2 = {
  args: {
    attributes: new DrupalAttribute().addClass("toolbar-block"),
    label: "Block label",
    title_attributes: new DrupalAttribute().addClass("toolbar-block__title"),
    content: `${ToolBarMenu.component({ ...middle2ToolBarMenu.args })}`
  }
}

export const FooterMenu = {
  args: {
    attributes: new DrupalAttribute().addClass("toolbar-block"),
    label: "Block label",
    title_attributes: new DrupalAttribute().addClass("toolbar-block__title"),
    content: `${ToolBarMenu.component({ ...footerToolBarMenu.args })}`
  }
}
