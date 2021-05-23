# vue-imageview
A Imageview component for Vue2.0

<h3><a href="https://naihe138.github.io/vue-imageview/index.html#/">Click Demo</a><h3>


## demo preview

![vue-pick.gif](https://cdn.jsdelivr.net/gh/naihe138/myimages/img/20210523171808.gif)
## 1、Usage with Vue2.0

`npm install vue-imageview --save`

## 2、Using as your need

````html
<template>
  <div>
    <div id="imgBox">
      <img src="https://cdn.jsdelivr.net/gh/naihe138/myimages/img/20210523164644.jpg" alt="">
      <img src="https://cdn.jsdelivr.net/gh/naihe138/myimages/img/20210523164639.webp" alt="">
      <img src="https://cdn.jsdelivr.net/gh/naihe138/myimages/img/20210523164640.jpeg" alt="">
      <img src="https://cdn.jsdelivr.net/gh/naihe138/myimages/img/20210523164641.jpeg" alt="">
      <img src="https://cdn.jsdelivr.net/gh/naihe138/myimages/img/20210523164642.jpeg" alt="">
      <img src="https://cdn.jsdelivr.net/gh/naihe138/myimages/img/20210523164643.jpeg" alt="">
    </div>
    <ImagesView :visible.sync="show" :images="srcArr" :src="imgSrc" :info="info" />
  </div>
</template>

<script>
import ImagesView from 'vue-imageview'
export default {
  components: {
    ImagesView
  },
  data() {
    return {
      show: false,
      imgSrc: '',
      srcArr: [],
      info: {}
    }
  },
  methods: {
    async getData(imgBox) {
      const imgs = imgBox.querySelectorAll('img');
      let arr = []
      for (let i = 0; i < imgs.length; i++) {
        const obj = await this.loadImag(imgs[i]);
        console.log(obj)
        arr.push(obj)
      }
      this.srcArr = arr
    },
    loadImag(el) {
      return new Promise((resolved, reject) => {
        el.onload = function() {
          resolved({
            src: el.src,
            width: el.width,
            height: el.height
          })
        };
        el.onerror = reject;
      })
    }
  },
  mounted () {
    const imgBox = document.querySelector('#imgBox');
    this.getData(imgBox);
    imgBox.addEventListener('click', (e) => {
      if(e.target.nodeName == 'IMG') {
        this.imgSrc = e.target.src;
        this.info = {
          x: e.clientX,
          y: e.clientY,
          width: e.target.width,
          height: e.target.height,
        }
        this.show = true;
      }
    })
  }
}
</script>
````

## Attributes

Attribute | Description | require | Type | Default
---- | --- | --- | --- | ---
visible | show/hide picker | yes | Boolean | false
images | images data for components [data1, data2]  | yes | Array | []
src | show current images link  | yes | String | ''
info | current image info  | yes | {} | {}
