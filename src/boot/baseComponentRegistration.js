const requireComponent = require.context('components/ui', false, /[A-Z]\w+\.vue$/) // require the base components in the components directory.

export default async ({ Vue }) => {
  requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)
    const componentName = fileName.replace(/^\.\//, '').replace(/\.vue/, '')

    Vue.component(componentName, componentConfig.default || componentConfig) // register globally the base components in the Vue instance
  })
}