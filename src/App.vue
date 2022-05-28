<template>
  <h1>点击图片进行预览</h1>
  <div id="imgBox">
    <img src="https://cdn.jsdelivr.net/gh/naihe138/myimages/img/20210523164644.jpg" alt="">
    <img src="https://cdn.jsdelivr.net/gh/naihe138/myimages/img/20210523164639.webp" alt="">
    <img src="https://cdn.jsdelivr.net/gh/naihe138/myimages/img/20210523164640.jpeg" alt="">
    <img src="https://cdn.jsdelivr.net/gh/naihe138/myimages/img/20210523164641.jpeg" alt="">
    <img src="https://cdn.jsdelivr.net/gh/naihe138/myimages/img/20210523164642.jpeg" alt="">
    <img src="https://cdn.jsdelivr.net/gh/naihe138/myimages/img/20210523164643.jpeg" alt="">
  </div>
  <ImagesView v-model:visible="show" :images="srcArr" :src="imgSrc" />
</template>

<script setup lang="ts">
  import ImagesView from './components/index';
  import { ref, onMounted } from 'vue'
  const show = ref(false)
  const srcArr = ref<string[]>([])
  const imgSrc = ref('');
  const getData = (imgBox: HTMLDivElement) => {
    const imgs = imgBox.querySelectorAll('img');
    srcArr.value = Array.from(imgs).map((el) => el.src);
  }

  onMounted(() => {
    const imgBox = document.querySelector('#imgBox') as HTMLDivElement;
    getData(imgBox);
    imgBox.addEventListener('click', (e: any) => {
      if(e.target.nodeName == 'IMG') {
        imgSrc.value = e.target.src;
        show.value = true
      }
    })
  });
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
