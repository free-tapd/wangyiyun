<template>
  <div class="search">
    <input
      type="text"
      :value="foo"
      :placeholder="placeholder"
      @input="$emit('update:foo', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  props: {
    foo: String,
    placeholder:String
  },
};
</script>
<style lang="less" scoped>
.search {
  padding: 5px 10px;
  input {
    border: none;
    width: 250px;
    height: 30px;
    border-radius: 7.5px;
    background: #ededed;
    outline: none;
    border-width: 0;
  }
}
</style>
