<template>
    <transition name="fade-transition">
        <slot name="fade-slot"></slot>
    </transition>
</template>

<script>
    export default {
        name: 'FadeAnimation'
    }
</script>

<style lang="less" scoped>
    .fade-transition-enter, .fade-transition-leave-to {
        opacity: 0;
    }

    .fade-transition-enter-active, .fade-transition-leave-active {
        transition: opacity .5s;
    }
</style>