<template>
  <div class="cloudtitle">
    <div class="cloudtitletext">
      <h2>
        <slot></slot>
      </h2>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.cloudtitle {
  height: 95px;
  width: 100%;
  text-align: right;
  background-image: url('../../assets/Cloud_sm.png');
  background-repeat: no-repeat;
  background-position: right;
  margin-bottom: 20px;
  .cloudtitletext {
    padding-top: 20px;
    width: 100%;
    text-align: right;
    color: #003366;
  }
}
</style>
