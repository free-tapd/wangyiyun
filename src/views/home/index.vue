<template>
  <Search v-model:foo="value" />

</template>
<script>
import Search from "@/components/search.vue";
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const state = reactive({
      value: "sdaf",
    });
    return {
      ...toRefs(state),
    };
  },
  components: {
    Search,
  },
};
</script>
<style lang="less" scoped>

</style>
