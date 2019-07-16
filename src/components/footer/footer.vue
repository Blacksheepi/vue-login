<template>
  <div class="footer">
    <div class="footerText">
      reference to
      <a href="https://www.manning.com/books/spring-in-action-fifth-edition">
        <i>Spring in Action, 5th Edition</i>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.footer {
  background-color: #76d6ff;
  background: linear-gradient(white, #76d6ff);
  width: 100%;
  height: 70px;
  border-radius: 10px;
  .footerText {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: center;
    padding-top: 35px;
    font-size: 10pt;
    a {
      color: inherit;
    }
  }
}
</style>
