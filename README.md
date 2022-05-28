# vue preview image
A preview images component for Vue3

<h3><a href="https://naihe138.github.io/vue-imageview/index.html#/">Click Demo</a><h3>


## demo preview

<!-- ![vue-pick](https://cdn.jsdelivr.net/gh/naihe138/myimages/img/20210523171808.gif) -->
![](https://cdn.jsdelivr.net/gh/naihe138/myimages/img/20210523171808.gif)

## 1、Usage with Vue3

`npm install vue-imageview --save`

## 2、Using as your need

````html
]<template>
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
  const srcArr = ref([])
  const imgSrc = ref('');
  const getData = (imgBox: HTMLDivElement) => {
    const imgs = imgBox.querySelectorAll('img');
    srcArr.value = Array.from(imgs).map((el) => el.src);
  }

  onMounted(() => {
    const imgBox: HTMLDivElement = document.querySelector('#imgBox');
    getData(imgBox);
    imgBox.addEventListener('click', (e: any) => {
      if(e.target.nodeName == 'IMG') {
        imgSrc.value = e.target.src;
        show.value = true
      }
    })
  });
</script>
````

## Attributes

Attribute | Description | require | Type | Default
---- | --- | --- | --- | ---
visible | show/hide picker | yes | Boolean | false
images | images data for components [src1, src2]  | yes | Array | []
src | show current images link  | yes | String | ''
