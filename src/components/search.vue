<template>
  <div class="search">
    <input
      type="text"
      :value="foo"
      @input="$emit('update:foo', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  props: {
    foo: String,
  },
};
</script>
<style lang="less" scoped>
.search {
  input {
    border: none;
    width: 500px;
    height: 60px;
    border-radius: 15px;
    background: #ededed;
    outline: none;
    border-width: 0;
  }
}
</style>
