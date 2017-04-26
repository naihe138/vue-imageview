/**
* @file image
* @author naice
* @date 2017/4/24
*/
<template>
	<div id="imageView"
			 v-bind:style="{ width: viewWith + 'px', height: viewHeight + 'px' }" v-show="showImageView">
		<div>
			<ul class="imageBox"
					v-bind:style="ulStyleObj">
				<li v-for="item in imgArr"
						v-bind:style="{ width: viewWith + 'px'}">
					<img :src="item" alt="123">
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
  export default{
    props: {
      imgArr: {
        type: Array
      },
      showImageView: {
        type: Boolean
      },
      imageIndex: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        viewWith: 800,
        viewHeight: 800,
        imageView: null,
        indexLeft: 10,
        showIndex: 0,
        point: {
          startX: 0,
          changeX: 0
        },
        ulStyleObj: {
          width: '800px',
          transition: '0.5s',
          transform: 'scaleZ(1.01) translate3d(0, 0, 0)'
        },
        startTimeStap: null,
        endTimeStap: null,
        pEvent: {
          TOUCHSTART: 'touchstart',
          TOUCHMOVE: 'touchmove',
          TOUCHEND: 'touchend'
        },
        flag: false,
        browser: 'phone',
        // 拖拽距离配置
        dragConfig: {
          // 拖拽距离
          distance: 100,
          // 拖拽间隔
          timeStap: 200
        }
      }
    },
    methods: {
      // 计算布局
      initLayout () {
        this.ulStyleObj.width = this.imgArr.length * this.viewWith + 'px'
        let translate = -(
        this.showIndex * this.viewWith)
        this.ulStyleObj.transform = 'scaleZ(1.01) translate3d(' + (
                                    translate + this.point.changeX) + 'px, 0, 0)'
        this.eventHandle()
      },
      // 事件处理
      eventHandle () {
        const self = this
        if (!this.imageView) {
          return
        }
        this.imageView.addEventListener(self.pEvent.TOUCHSTART, (e) => {
          self.flag = true
          if (this.browser === 'pc') {
            self.point.StartX = e.clientX
          } else {
            self.point.StartX = e.changedTouches[0].pageX
          }
          self.startTimeStap = new Date()
          return false
        })
        this.imageView.addEventListener(self.pEvent.TOUCHMOVE, (e) => {
          if (!self.flag) {
            return
          }
          self.ulStyleObj.transition = ''
          if (this.browser === 'pc') {
            self.point.changeX = e.clientX - self.point.StartX
          } else {
            self.point.changeX = e.changedTouches[0].pageX - self.point.StartX
          }
          var translate = -(
          self.showIndex * self.viewWith)
          self.ulStyleObj.transform = 'scaleZ(1.01) translate3d(' + (
                                      translate + self.point.changeX) + 'px, 0, 0)'
        })
        this.imageView.addEventListener(self.pEvent.TOUCHEND, (e) => {
          self.flag = false
          self.ulStyleObj.transition = '0.5s'
          if (this.browser === 'pc') {
            self.point.changeX = e.clientX - self.point.StartX
          } else {
            self.point.changeX = e.changedTouches[0].pageX - self.point.StartX
          }
          self.endTimeStap = new Date()
          var timeStap = self.endTimeStap - self.startTimeStap
          var changeX = Math.abs(self.point.changeX)
          if ((
              changeX >= self.dragConfig.distance) || (
              timeStap < self.dragConfig.timeStap && changeX > 30)) {
            if (self.point.changeX > 0) {
              self.showIndex--
              if (self.showIndex <= 0) {
                self.showIndex = 0
              }
            } else {
              self.showIndex++
              if (self.showIndex >= self.imgArr.length - 1) {
                self.showIndex = self.imgArr.length - 1
              }
            }
          }
          var translate = -(
          self.showIndex * self.viewWith)
          self.ulStyleObj.transform = 'scaleZ(1.01) translate3d(' + (
              translate) + 'px, 0, 0)'
          if (changeX < 5) {
            self.$emit('hideImage')
          }
          return false
        })
      },
      // 平台判断
      browserRedirect () {
        const userAgentInfo = navigator.userAgent
        let Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod', 'Mobile']
        let flag = true
        for (let v = 0; v < Agents.length; v++) {
          if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false
            break
          }
        }
        return flag ? 'pc' : 'phone'
      }
    },
    mounted () {
      let vW = window.innerWidth
      let vH = window.innerHeight
      this.showIndex = this.imageIndex
      this.$nextTick(function () {
        this.imageView = document.querySelector('#imageView')
        this.viewWith = vW
        this.viewHeight = vH
        this.browser = this.browserRedirect()
        switch (this.browser) {
          case 'pc':
            this.pEvent.TOUCHSTART = 'mousedown'
            this.pEvent.TOUCHMOVE = 'mousemove'
            this.pEvent.TOUCHEND = 'mouseup'
            this.dragConfig.timeStap = 200
            this.dragConfig.distance = parseInt(this.viewWith / 2) < 400 ? parseInt(this.viewWith / 2) : 400
            break
          case 'phone':
            this.pEvent.TOUCHSTART = 'touchstart'
            this.pEvent.TOUCHMOVE = 'touchmove'
            this.pEvent.TOUCHEND = 'touchend'
            this.dragConfig.timeStap = 150
            this.dragConfig.distance = parseInt(this.viewWith / 2)
            break
          default:
            this.pEvent.TOUCHSTART = 'touchstart'
            this.pEvent.TOUCHMOVE = 'touchmove'
            this.pEvent.TOUCHEND = 'touchend'
            this.dragConfig.timeStap = 150
            this.dragConfig.distance = parseInt(this.viewWith / 2)
            break
        }
        this.initLayout()
      })
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
	ul, li {
		margin: 0;
		padding: 0;
	}

	#imageView {
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background: rgba(0, 0, 0, 0.8);
		z-index: 9999;
		overflow: hidden;
		& > div {
			width: 100%;
			height: 100%;
		}
		.imageBox {
			height: 100%;
			li {
				list-style: none;
				height: 100%;
				float: left;
				overflow: hidden;
				img {
					height: 100%;
					max-width: 100%;
				}
			}
		}
	}
</style>
