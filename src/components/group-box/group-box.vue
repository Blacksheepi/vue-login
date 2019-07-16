<template>
  <div class="groupBox">
    <div class="groupBoxTitle">{{ title }}</div>
    <div class="groupBoxContent">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
.groupBox {
  display: inline-block;
  vertical-align: top;
  width: 400px;
  background-image: url('~@/assets/taco-icon.png');
  background-repeat: no-repeat;
  background-color: rgba(118, 214, 255, 0.25);
  margin: 10px;
  border-radius: 10px;
  text-align: right;
  padding: 0 10px 10px 0;
  height: 100%;
  color: #003366;
  border: 1px solid #76d6ff;
  .groupBoxTitle {
    text-align: center;
    font-weight: bold;
    border-bottom: 1px solid lightblue;
    padding-bottom: 10px;
    padding-top: 10px;
  }
  .groupBoxContent {
    padding: 20px;
    text-align: left;
  }
}
</style>
