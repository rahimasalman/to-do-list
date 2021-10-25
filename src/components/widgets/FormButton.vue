<template>
  <div class="d-inline" :style="containerStyle">
    <router-link
        v-if="type === 'route'"
        :to="route"
        :title="title"
        class="button"
        :disabled="loading && !sm && !noLoading"
        :style="elementStyle"
        :class="_class"
        @click="$emit('click', $event)"
    >
      <i v-if="icon" class="button__icon" :style="iconStyle" :class="[icon, iconClass, {'m-0': !text}]"></i>
      <span v-if="loading && !sm && !noLoading" class="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgba(255, 255, 255, 0); display: block; shape-rendering: auto;" width="25px" height="25px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <circle cx="50" cy="50" fill="none" stroke="#ffffff" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
                      <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                    </circle>
                </svg>
            </span>
      <span v-if="text" :style="textStyle" :class="textClass">{{ text }}</span>
    </router-link>
    <a
        v-else-if="type === 'link'"
        :href="href"
        :target="newTab ? '_blank' : ''"
        class="button"
        :disabled="loading && !sm && !noLoading"
        :title="title"
        :style="elementStyle"
        :class="_class"
        @click="$emit('click', $event)"
    >
      <i v-if="icon" class="button__icon" :style="iconStyle" :class="[icon, iconClass, {'m-0': !text}]"></i>
      <span v-if="loading && !sm && !noLoading" class="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgba(255, 255, 255, 0); display: block; shape-rendering: auto;" width="25px" height="25px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <circle cx="50" cy="50" fill="none" stroke="#ffffff" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
                      <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                    </circle>
                </svg>
            </span>
      <span v-if="text" :style="textStyle" :class="textClass">{{ text }}</span>
    </a>

    <button
        v-else-if="type === 'submit' || type === 'button'"
        :type="type"
        class="button"
        :disabled="loading && !sm && !noLoading"
        :title="title"
        :style="elementStyle"
        :class="_class"
        @click="$emit('click', $event)"
    >
      <i v-if="icon" class="button__icon" :style="iconStyle" :class="[icon, iconClass, {'m-0': !text}]"></i>
      <span v-if="loading && !sm && !noLoading" class="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgba(255, 255, 255, 0); display: block; shape-rendering: auto;" width="25px" height="25px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <circle cx="50" cy="50" fill="none" stroke="#ffffff" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
                      <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                    </circle>
                </svg>
            </span>
      <span v-if="text" :style="textStyle" :class="textClass">{{ text }}</span>
    </button>
  </div>
</template>

<script>

export default {
  name: "FormButton",
  props: {
    type: {
      required: true,
      type: String
    },
    title: {
      default: null,
    },
    href: {
      default: null,
    },
    route: {
      default: Object,
    },
    newTab: {
      default: false,
      type: Boolean
    },
    sm: {
      default: false,
      type: Boolean
    },
    noLoading: {
      default: false,
      type: Boolean
    },
    elementStyle: {
      default: null,
    },
    elementClass: {
      default: null,
    },
    iconStyle: {
      default: null,
    },
    containerStyle:{
      default:null
    },
    iconClass: {
      default: null,
    },
    textStyle: {
      default: null,
    },
    textClass: {
      default: null,
    },
    text: {
      default: null,
      type: String
    },
    block: {
      default: false,
      type: Boolean
    },
    round: {
      default: true,
      type: Boolean
    },
    roundFull: {
      default: false,
      type: Boolean
    },
    icon: {
      default: null,
      type: String
    },
    iconPosition: {
      default: null,
      type: String
    },
    property: {
      default: null,
      type: String
    }
  },
  data() {
    return {
      defaultVisible: false,
      // eslint-disable-next-line vue/no-reserved-keys
      _class: null,
    }
  },
  created() {
    const self = this;
    self._class = [
      self.elementClass,
      'button--' + self.property,
      {
        'button--block': self.block,
        'button--round': self.round,
        'button--full-round': self.roundFull,
        'button--icon-left': self.iconPosition === 'left',
        'button--icon-right': self.iconPosition === 'right',
        'button--sm': self.sm,
      }
    ];
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
