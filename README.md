# vue-imageview
A Imageview component for Vue2.0 ---------vue 的H5图片查看器组件

<h3><a href="http://gitblog.naice.me/vue-imageview/example/demo3/index.html#/">demo</a><h3>

## 1、Usage with Vue2.0

`npm install vue-imageview --save`

## 2、Using as your need

````
<template>
	<div class="hello">
		<transition name="slide-fade" class="fadeView">
			<div v-if="show">
				<image-view :imgArr="imgArr" 
				            :showImageView="true"
				            :imageIndex="imageIndex"
				            v-on:hideImage="hideImageView"></image-view>
			</div>
		</transition>
		<h1 @click="showImgView">显示隐藏</h1>
		<img v-for="(item, index) in imgArr" :src="item" @click="selectImg(index)">
	</div>
</template>

<script>
  import imageView from 'vue-imageview'
  export default {
    name: 'hello',
    components: {
      'image-view': imageView
    },
    data () {
      return {
        // 图片数组
        imgArr: ['/public/img/1.jpeg', '/public/img/2.jpeg', '/public/img/2.jpeg', '/public/img/3.jpeg', '/public/img/4.jpeg', '/public/img/5.jpeg', '/public/img/6.jpeg'],
        // 显示组件
        show: false,
        // 从哪一张图片开始
        imageIndex: 0
      }
    },
    methods: {
      showImgView () {
        this.show = true
      },
      hideImageView () {
        this.show = false
      },
      selectImg (index) {
        this.show = true
        this.imageIndex = index
      }
    }
  }
</script>

<style scoped>
	.slide-fade-enter-active {
		transition: opacity .5s ease;
	}

	.slide-fade-leave-active {
		transition: opacity .5s ease;
	}

	.slide-fade-enter, .slide-fade-leave-active {
		opacity: 0;
	}
	h1, h2 {
		margin: 0;
		padding: 0;
	}
	img {
		display: block;
		margin: 10px auto;
		max-width: 400px;
	}
</style>

````

### 3、Configuration

<table>
    <tr>
        <th>Param</th>
        <th>Type</th>
        <th>Description</th>
        <th>Required</th>
    </tr>
    <tr>
        <td>imgArr</td>
        <td>array</td>
        <td>The list of images to view</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td>show</td>
        <td>blooean</td>
        <td>The flag of images to view</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td>imageIndex</td>
        <td>number</td>
        <td>The start of images to view</td>
        <td>No</td>
    </tr>
    <tr>
        <td>hideImage</td>
        <td>function</td>
        <td>The callback function of images to close</td>
        <td>Yes</td>
    </tr>
</table>
