<template>
<section class="post">
  <img class="post__img" src='../assets/post.svg'/>
  <div class="post__doc">JunctionX 2020 Seoul</div>
  <div class="post__reaction">
      <img src='../assets/thumb_up-24px.svg'/>12
      <img src='../assets/comment-24px.svg'/>8
  </div>
</section>
</template>

<script>
export default {
  name: 'MyPage'
}

</script>

<style scoped>
.post {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 25px;
    border: 1px solid rgb(158, 158, 158);
    border-radius: 15px;
    padding: 25px 20px;
}
.post__img {
    box-shadow: 0.5px 1px 1px rgb(138, 138, 138);
    border-radius: 10px;
}
.post__doc {
    margin-top: 10px;
}
.post__reaction {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 5px;
}
.post__reaction img{
    margin: 5px;
    cursor: pointer;
}

</style>
