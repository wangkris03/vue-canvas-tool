<template>  <!-- <a-menu
    v-show="visible"
    :style="style"
    class="contextmenu"
    :selectedKeys="selectedKeys"
    @click="handleClick"
  >
    <a-menu-item v-for="item in itemList" :key="item.key">
      <a-icon v-if="item.icon" role="menuitemicon" :type="item.icon" />{{
        item.text
      }}
    </a-menu-item>
  </a-menu> -->

  <ul v-show="visible" :style="style" class="contextmenu">
    <li
      v-for="item in itemList"
      :key="item.key"
      style="cursor: pointer; padding: 5px"
      @click="handleClick(item.key)"
    >
      {{ item.text }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "Contextmenu",
  props: {
    visible: {
      type: Boolean,
      required: false,
      default: false,
    },
    itemList: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      left: 0,
      top: 0,
      target: null,
    };
  },
  computed: {
    style() {
      return {
        left: this.left + "px",
        top: this.top + "px",
        zIndex: 9999,
      };
    },
  },
  created() {
    window.addEventListener("mousedown", (e) => this.closeMenu(e));
    window.addEventListener("contextmenu", (e) => this.setPosition(e));
  },
  methods: {
    closeMenu(e) {
      e.preventDefault();
      e.stopPropagation();
      if (
        this.visible === true &&
        e.button !== 2 &&
        !e.target.parentElement.classList.contains("contextmenu")
      ) {
        this.$emit("close");
      }
    },
    setPosition(e) {
      this.left = e.clientX;
      this.top = e.clientY;
      this.target = e.target;
    },
    handleClick(key) {
      this.$emit("select", key);
    },
  },
};
</script>

<style scoped>
.contextmenu {
  position: fixed;
  z-index: 9999;
  border: 1px solid #9e9e9e;
  border-radius: 4px;
  background: #fff;
  color: #000;
  box-shadow: 2px 2px 10px #aaaaaa !important;
  padding: 10px;
}
ul li {
  list-style: none;
}
</style>
