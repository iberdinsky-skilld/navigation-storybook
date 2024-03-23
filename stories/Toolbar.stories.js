import Toolbar from "../navigation/templates/navigation.html.twig"
import ToolbarBlock, {
  TopMenu as toolbarBlockTop,
  MiddleMenu as toolbarBlockMiddle,
  MiddleMenu2 as toolbarBlockMiddle2,
  FooterMenu as toolbarBlockFooter,
} from "./ToolbarBlock.stories"

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: "Toolbar",
  component: Toolbar,
  play: async ({ canvasElement }) => {
    Drupal.attachBehaviors(canvasElement, drupalSettings)
  }
}

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Basic = {
  args: {
    icon_path: "./navigation/assets/images/logo.svg",
    menu_content: `
      ${ToolbarBlock.component({ ...toolbarBlockTop.args })}
      ${ToolbarBlock.component({ ...toolbarBlockMiddle.args })}
      ${ToolbarBlock.component({ ...toolbarBlockMiddle2.args })}
    `,
    menu_footer: `${ToolbarBlock.component({ ...toolbarBlockFooter.args })}`
  }
}
