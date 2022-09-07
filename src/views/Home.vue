<template>  <div class="container">
    <div class="content-wrapper">
      <div class="list-wraper">
        <div :key="item.id" v-for="item in list" class="image-wrapper">
          <img :src="item.url" />
          <i
            @click="handleAdd(item.url)"
            class="pt-iconfont"
            style="width: 20px; height: 20px"
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M184.576 105.664C184.335 104.413 183.956 103.155 183.465 102.023L183.434 101.951L183.4 101.883C182.21 99.2587 180.565 96.7688 178.504 94.4819C176.348 92.0844 174.275 90.3703 172.166 89.2343C171.062 88.6593 169.952 88.2086 168.673 87.8099C167.169 87.3538 165.672 87.1024 164.131 87.0338C163.87 87.0244 163.695 87.0212 163.521 87.0212C161.934 87.0212 160.33 87.2676 158.752 87.7571C156.901 88.3269 155.119 89.2913 153.466 90.6158L153.366 90.6959L153.269 90.7789C152.455 91.4696 151.516 92.333 150.472 93.3427C149.532 94.2607 148.735 95.02 148.067 95.6528L147.377 96.3109L147.353 96.2877L146.85 96.8088L141.527 101.861L141.739 102.077L141.311 102.522L122.677 121.74L115.655 128.983L109.33 135.511C107.389 137.508 105.764 139.193 104.467 140.572L102.381 142.762L102.088 143.071C100.88 144.313 99.9033 145.526 99.149 146.728C98.5284 147.705 97.9474 148.806 97.4419 149.979C96.9561 150.96 96.4854 152.191 95.914 153.958C95.4251 155.46 94.9196 157.122 94.398 158.932C93.9019 160.653 93.4325 162.315 92.9864 163.93C92.4145 166.04 92.09 167.516 91.9207 168.752C91.3295 172.706 92.0736 176.121 94.147 178.785C95.3893 180.347 98.1027 182.839 102.972 182.839C103.577 182.839 104.213 182.802 104.865 182.729L105.039 182.709L105.214 182.679C106.252 182.514 107.572 182.21 109.49 181.695C111.121 181.255 112.856 180.728 114.797 180.087C116.617 179.477 118.363 178.856 120.022 178.229C121.819 177.537 123.187 176.95 124.242 176.426C125.626 175.783 126.957 174.955 128.198 173.963C129.029 173.313 129.791 172.67 130.479 172.035C131.062 171.539 131.766 170.835 133.151 169.418C134.402 168.12 135.942 166.517 137.798 164.579C139.48 162.807 141.422 160.818 143.931 158.29L143.983 158.239L144.033 158.184L150.969 150.949L169.575 131.759L175.589 125.559L175.568 125.539L175.637 125.477C176.164 125.002 176.745 124.447 177.355 123.823C177.724 123.442 178.16 123.007 178.659 122.517C179.261 121.92 179.927 121.256 180.665 120.496L180.792 120.366L180.912 120.232C182.28 118.698 183.315 117 183.985 115.184C184.643 113.43 184.982 111.581 184.982 109.721C184.982 108.334 184.846 106.967 184.576 105.664ZM144.909 144.769L137.973 152.002C135.668 154.326 133.586 156.453 131.735 158.402C129.889 160.331 128.356 161.923 127.144 163.18C125.926 164.428 125.204 165.15 124.973 165.316C124.4 165.859 123.733 166.423 122.981 167.012C122.233 167.61 121.453 168.091 120.642 168.458C119.83 168.87 118.65 169.374 117.091 169.975C115.529 170.564 113.897 171.145 112.194 171.717C110.49 172.281 108.87 172.776 107.338 173.188C105.806 173.6 104.667 173.872 103.912 173.993C103.573 174.033 103.259 174.05 102.971 174.05C101.928 174.05 101.201 173.796 100.793 173.282C100.275 172.616 100.131 171.52 100.36 169.975C100.475 169.139 100.751 167.932 101.181 166.346C101.619 164.763 102.077 163.136 102.568 161.438C103.06 159.733 103.534 158.168 103.997 156.743C104.461 155.312 104.836 154.327 105.127 153.791C105.472 152.96 105.863 152.198 106.299 151.515C106.727 150.831 107.352 150.071 108.159 149.239C108.509 148.873 109.319 148.029 110.59 146.689C111.858 145.339 113.447 143.691 115.357 141.726L121.682 135.201L128.703 127.957L147.337 108.737L163.548 125.544L144.909 144.769ZM176.025 112.045C175.737 112.823 175.277 113.564 174.638 114.28C173.947 114.992 173.324 115.612 172.773 116.158C172.229 116.691 171.753 117.171 171.345 117.588C170.885 118.06 170.449 118.481 170.049 118.838L153.837 102.123C154.531 101.465 155.358 100.678 156.307 99.7506C157.261 98.8264 158.057 98.0997 158.693 97.5587C159.499 96.9121 160.341 96.4436 161.204 96.1762C161.988 95.9328 162.763 95.8128 163.521 95.8128C163.6 95.8128 163.681 95.8128 163.762 95.816C164.597 95.8528 165.409 95.9813 166.187 96.2172C166.969 96.4614 167.646 96.7288 168.222 97.029C169.44 97.6848 170.785 98.8264 172.258 100.463C173.734 102.103 174.868 103.817 175.681 105.608C175.914 106.147 176.1 106.77 176.239 107.487C176.386 108.201 176.458 108.943 176.458 109.722C176.459 110.493 176.318 111.267 176.025 112.045Z"
                fill="black"
              />
              <path
                d="M73.6025 173.26H37.5999C31.4147 173.26 26.3819 168.069 26.3819 161.69V38.3058C26.3819 31.9274 31.4147 26.7399 37.5999 26.7399H157.225C163.41 26.7399 168.439 31.9274 168.439 38.3058V69.7115C168.439 72.9481 170.985 75.572 174.122 75.572C177.26 75.572 179.805 72.9483 179.805 69.7115V38.307C179.805 25.4661 169.675 15.0182 157.226 15.0182H37.5999C25.1479 15.0182 15.0182 25.4661 15.0182 38.307V161.69C15.0182 174.532 25.1479 184.982 37.5999 184.982H73.6025C76.7405 184.982 79.2854 182.357 79.2854 179.12C79.2854 175.884 76.7405 173.26 73.6025 173.26Z"
                fill="black"
              />
              <path
                d="M142.507 53.2675C142.507 50.0309 139.961 47.407 136.824 47.407H55.8512C52.7131 47.407 50.1682 50.0307 50.1682 53.2675C50.1682 56.5053 52.7131 59.1289 55.8512 59.1289H136.824C139.961 59.1289 142.507 56.5053 142.507 53.2675Z"
                fill="black"
              />
              <path
                d="M55.8513 78.3317C52.7133 78.3317 50.1684 80.9553 50.1684 84.1909C50.1684 87.4285 52.7133 90.0523 55.8513 90.0523H111.724C114.863 90.0523 117.407 87.4287 117.407 84.1909C117.407 80.9553 114.863 78.3317 111.724 78.3317H55.8513Z"
                fill="black"
              />
              <path
                d="M87.5756 111.39H55.8513C52.7133 111.39 50.1684 114.014 50.1684 117.249C50.1684 120.487 52.7133 123.111 55.8513 123.111H87.5756C90.7135 123.111 93.2576 120.487 93.2576 117.249C93.2576 114.014 90.7135 111.39 87.5756 111.39Z"
                fill="black"
              />
            </svg>
          </i>
        </div>
        <textarea
          style="
            padding: 20px;
            width: 100%;
            min-height: 500px;
            border: 0;
            background: rgba(255, 255, 255, 0);
          "
          v-model="jsonData"
        />
      </div>
      <vue-fabric
        ref="canvas"
        id="canvas"
        :width="width"
        :height="height"
        @selection:created="selected"
        @selection:updated="selected"
        @mouse:down="selected"
        @mouse:dblclick="dblclick"
        @object:added="objectAdded"
      >
      </vue-fabric>
      <div class="tool-wrapper">
        <span @click="changeSelected" class="pt-iconfont">选择</span>
        <span @click="createText" class="pt-iconfont">标注</span>
        <span @click="changeDrawMore(true)" class="pt-iconfont">画笔</span>
        <span @click="handleDelete" class="pt-iconfont">删除</span>
        <span @click="toJsonData" class="pt-iconfont">生成数据</span>
        <span @click="loadFromJSON" class="pt-iconfont">绘图</span>
      </div>
    </div>
    <!-- <textarea
      style="padding:20px;width:200px; height:200px; border:0px solid
    red;position:fixed; top:200px; left:0;background: rgba(255,255,255,0);"
      v-model="jsonData"
      readonly
    /> -->

    <vue-image-model
      :close="
        () => {
          imgUrl = '';
        }
      "
      v-show="imgUrl.length > 0"
      :url="imgUrl"
    ></vue-image-model>
    <Contextmenu
      :visible="visible"
      :itemList="menuItemList"
      style="z-index: 9999"
      @select="onMenuSelect"
      @close="onClose"
    ></Contextmenu>
  </div>
</template>

<script type="text/ecmascript-6">

import VueImageModel from '../components/image-model.vue';
import Contextmenu from '../components/menu/Contextmenu.vue';

export default {
  components: {
    VueImageModel,
    Contextmenu
  },
  data() {
    return {
      imgUrl: '',
      width: 300,
      height: 500,
      list: [
        {
          id: 1,
          url: '/images/test.png'
        },
      ],
      isDrawingMode: true,
      jsonData: "",
      jsonInput: "",
      visible: false,
      menuItemList: [
        { key: "0", icon: "close", text: "删除" },
        { key: "1", icon: "clear", text: "清空" },
        { key: "2", icon: "all", text: "置顶" },
      ],
    };
  },
  created() {
    this.width = document.body.offsetWidth - 200;
    this.height = document.body.offsetHeight - 60;
    console.log(document.body.offsetWidth);
    // window.addEventListener("mousedown", e => this.handleMenu(e));
    // document.getElementById("canvas").oncontextmenu=this.onContextmenu;
    // document.getElementsByTagName("canvas").oncontextmenu=(e)=>this.onContextmenu(e);
    window.oncontextmenu = (e) => { this.onContextmenu(e) }

  },
  mounted() {

    // this.$refs.canvas.createTriangle({ id: 'Triangle', x: 100, y: 100, x1: 150, y1: 200, x2: 180, y2: 190, fill: 'yellow', left: 80 });
    //     this.$refs.canvas.createImage('/static/images/sticker1.png', { id: 'myImage', width: 100, height: 100, left: 10, top: 10 ,evented:false, selectable: false});
    //     // this.$refs.canvas.createImage('/static/images/sticker2.png');
    //     // this.$refs.canvas.createImage('/static/images/sticker3.png');
    // let options1 = {
    //   x: 100, y: 100, x1: 600, y1: 600, color: '#B2B2B2', drawWidth: 2, id: 'Triangle'
    // };
    // this.$refs.canvas.drawDottedline(options1);
    // this.$refs.canvas.createEllipse({ rx: 200, ry: 400, left: 300 });
    //     this.$refs.canvas.createItext(`斯诺伐克两三斯诺伐克两三斯诺伐克两三斯诺伐
    // // 克两三斯诺伐克两三斯诺伐克两三斯诺伐克两三`, { top: 100, left: 300, width: 50 ,editable:true});
    //     this.$refs.canvas.setCornerIcons({ size: 20, tl: '/static/images/cow.png' });
    //     this.$refs.canvas.drawByPath([[50, 50], [120, 120], [80, 160]], {});
    let that = this;

    // var img = new Image();
    // img.setAttribute('crossOrigin', 'anonymous');
    // img.onload = function () {
    //       that.$refs.canvas.createImageByImg(img, { id: 'myImage', width:100,height:100, left: 10, top: 10 ,evented:true, selectable: true, crossOrigin:"anonymous"});
    // }
    // img.src = '/static/images/sticker1.png';
    this.$refs.canvas.setSelection(false)
    let options = {
      imgUrl: "https://weiliicimg9.pstatp.com/weili/l/701712572929933335.webp",
      width: this.width,
      height: this.height,
      opacity: 1,
      scaleX: 1.5
    }
    // this.$refs.canvas.setBackgroundImage(options);
    this.$refs.canvas.setBackgroundColor("#ffffff00");
    // https://s1.tuchong.com/content-image/201907/be4f3b7bc7b57305bf4c4c2d304d5ba8.jpg
    // this.$refs.canvas.createImageByImg('http://cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png', { id: 'myImage', width: 100, height: 100, left: 10, top: 10 ,evented:false, selectable: false, crossOrigin:"anonymous"});
    // this.$refs.canvas.freeDrawConfig({isDrawingMode:this.isDrawingMode});

  },
  methods: {
    handleMenu(e) {
      e.preventDefault();
      if (this.visible === false && e.button === 2) {
        this.onContextmenu(e)
      }
      else {
        e.preventDefault();
        this.visible = false
      }
    },
    createText() {
      this.$refs.canvas.createItext(`请输入`, { zIndex: 999, top: 100, left: 300, width: 50, editable: true, textBackgroundColor: "#000", fill: "#fff" });

    },
    changeSelected() {
      this.changeDrawMore(false)
      this.selected()
    },
    changeDrawMore(val) {
      this.isDrawingMode = val;
      this.$refs.canvas.freeDrawConfig({ isDrawingMode: this.isDrawingMode,color:"green" });
    },
    setErase() {
      this.$refs.canvas.eraseDrawConfig({ drawWidth: 20 });
    },
    toggleMirror() {
      this.$refs.canvas.toggleMirror({ flip: 'Y' });
    },
    discardActive() {
      this.$refs.canvas.discardActive();
    },
    handleAdd(url) {
      this.$refs.canvas.createImage(url);
    },
    handleDelete() {
      this.$refs.canvas.removeCurrentObj();
    },
    rotate() {
      this.$refs.canvas.setRotate();
    },
    createImg() {
      let dataUrl = this.$refs.canvas.toDataUrl();
      this.imgUrl = dataUrl;
    },
    selected(obj, option) {
      this.$refs.canvas.setSelection(true)

    },
    onClose() {
      this.visible = false
    },
    onContextmenu(e) {
      e.preventDefault();
      this.visible = true;
    },
    onMenuSelect(key) {
      switch (key) {
        case "0":
          this.handleDelete();
          break;
        case "1":
          this.$refs.canvas.clear();
          break;
        case "2":
          this.$refs.canvas.toTopLayer();
          break;
        default:
          break;
      }
      this.visible = false
    },
    toJsonData() {
      const j = this.$refs.canvas.toJson()
      this.jsonData = JSON.stringify(j)
    },
    loadFromJSON() {
      try {
        const i = JSON.parse(this.jsonData)
        this.$refs.canvas.loadFromJSON(i, () => {
          console.log("load success");
        })
      } catch (error) {
        window.alert(error)
      }

    },
    dblclick(e) {
      console.log("dblclick", e);
    },
    objectAdded(e) {
      if (!e.target) {
        return
      }
      this.toJsonData()
      const t = e.target
      //画笔
      if (t.strokeLineCap === "round") {
        if (t.path && t.path.length < 11) {
          this.$refs.canvas.removeCurrentObj()
        }
        else if (t.path[0][1] !== t.path[t.path.length - 1][1]) {
          new Promise(res => {
            const data = JSON.parse(this.jsonData)

            const temp = data.objects.forEach(item => {
              if (item.type === "path" && item.path.length > 10 && item.path[0][1] !== item.path[item.path.length - 1][1]) {
                item.path[0][1] = t.path[t.path.length - 1][1]
                item.path[0][2] = t.path[t.path.length - 1][2]
              }
              return item;

            });
            this.jsonData = JSON.stringify(data)
            res(1)
          }).then(() => {
            this.loadFromJSON()
          })
        }
      }

    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;

  .header {
    height: 60px;

    border-bottom: 1px solid #efefef;
    display: -ms-flexbox;
    display: -moz-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;

    box-sizing: border-box;
    width: 100%;

    .logo {
      width: 200px;
      box-sizing: border-box;
      border-right: 1px solid #efefef;
      height: 60px;
      display: -ms-flexbox;
      display: -moz-box;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      box-align: center;
      -moz-box-align: center;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      box-pack: center;
      -webkit--moz-box-pack: center;
      -moz-box-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
    }
  }

  .content-wrapper {
    position: relative;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -moz-box;
    display: -webkit-box;
    display: flex;
    -moz-box-flex: 1;
    box-flex: 1;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;

    .tool-wrapper {
      position: fixed;
      top: 0;
      right: 0;
      display: -ms-flexbox;
      display: -moz-box;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;

      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -moz-box-direction: normal;
      -moz-box-orient: vertical;
      -webkit-flex-direction: column;
      flex-direction: column;

      .pt-iconfont {
        padding: 20px 30px;
        color: #fff;
        cursor: pointer;
        border: 1px solid #fff;
        background: rgba(0, 0, 0, 0.3);
      }
    }

    .list-wraper {
      width: 200px;

      border-right: 1px solid #efefef;
      overflow-y: auto;
      flex-shrink: 0;
      box-sizing: border-box;

      display: -webkit-flex;
      display: -ms-flexbox;
      display: -moz-box;
      display: -webkit-box;
      display: flex;
      -webkit-box-orient: vertical;
      -moz-box-orient: vertical;
      -webkit-flex-direction: column;
      flex-direction: column;

      .image-wrapper {
        padding: 20px;
        display: -ms-flexbox;
        display: -moz-box;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;

        flex-shrink: 0;
        box-pack: center;
        -webkit--moz-box-pack: center;
        -moz-box-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        box-align: center;
        -moz-box-align: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        border-bottom: 1px solid #efefef;
        position: relative;

        img {
          width: 120px;
        }

        .pt-iconfont {
          position: absolute;
          top: 0px;
          right: 0px;
          font-size: 18px;
          color: #777;
          padding: 10px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
