module.exports = {
  "stories": [
    "../stories/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/component/**/*.jsx",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-controls",
    {
      name: "@storybook/addon-docs",
      options:{
        transcludeMarkdown: true
      }
    }
  ],
  "framework": "@storybook/react"
}