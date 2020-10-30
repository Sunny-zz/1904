<template>
  <div>
    <h2>vuex 的一些小知识点</h2>
    <PluginDemo />
    <hr />
    <StrictDemo />
    <hr />
    <VModelDemo />
    <hr />
    <ModuleNameSpaced />
    <hr />
    <AsyncAction />
  </div>
</template>
<script>
import PluginDemo from './components/PluginDemo'
import StrictDemo from './components/StrictDemo'
import VModelDemo from './components/VModelDemo'
import AsyncAction from './components/AsyncAction'
import ModuleNameSpaced from './components/ModuleNameSpaced'
export default {
  name: 'App',
  components: {
    PluginDemo,
    StrictDemo,
    VModelDemo,
    ModuleNameSpaced,
    AsyncAction
  }
}
</script>
<style></style>