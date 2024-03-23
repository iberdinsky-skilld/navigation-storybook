import Page from './page.html.twig';
import topBar, { Basic as TopBarBasic } from './TopBar.stories'
import toolBar, { Basic as ToolbarBasic } from './Toolbar.stories'

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: 'Page',
  component: Page,
  play: async ({ canvasElement }) => {
    Drupal.attachBehaviors(canvasElement, drupalSettings);
  }
};

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Basic = {
  args: {
    topBar: `${topBar.component({...TopBarBasic.args})}`,
    toolBar: `${toolBar.component({...ToolbarBasic.args})}`
  }
};
