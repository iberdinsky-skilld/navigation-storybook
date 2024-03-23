/** @type { import('@storybook/html').Preview } */

import "./drupal";
import "./debounce";
import "./displace";

import "../navigation/assets/vendor/floating-ui/floating-ui.core.umd";
import "../navigation/assets/vendor/floating-ui/floating-ui.dom.umd";

import "../navigation/js/tooltip"
import "../navigation/js/toolbar-popover.js";
import "../navigation/js/toolbar-menu.js";
import "../navigation/js/admin-toolbar-wrapper"
import "../navigation/js/toolbar-dropdown"
import "../navigation/js/sidebar"

// Here we import theme css.
import.meta.glob(["../navigation/css/base/**.pcss.css", "../navigation/css/components/**.pcss.css"], {
  eager: true,
});


export default {
  parameters: {
    layout: "fullscreen",
  },
};

