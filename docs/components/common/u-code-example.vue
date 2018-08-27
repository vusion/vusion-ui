<template>
<div :class="$style.root">
    <div :class="$style.example"><slot></slot></div>
    <u-collapse-transition>
        <div :class="$style.code" v-show="expanded">
            <slot name="code"></slot>
        </div>
    </u-collapse-transition>
    <div :class="$style.expander" :expanded="expanded" @click="expanded = !expanded">{{ expanded ? '收起代码' : '显示代码' }}</div>
</div>
</template>

<script>
import './solarized-light.css';

export default {
    name: 'u-code-example',
    data() {
        return {
            expanded: false,
        };
    },
};
</script>

<style module>
.root {
    border: 1px #eee solid;
}

.example {
    padding: 20px;
}

.code {
    border-top: 1px #eee solid;
    transition: $transition-duration height ease-in-out, $transition-duration padding-top ease-in-out, $transition-duration padding-bottom ease-in-out;
}

.code pre {
    margin: -1px;
}

.code:empty {
    display: none;
}

.expander {
    border-top: 1px #eee solid;
    text-align: center;
    vertical-align: middle;
    padding: 5px;
    cursor: pointer;
}

.expander:hover {
    background: whitesmoke;
}

.expander::before {
    content: '';
    display: inline-block;
    position: relative;
    border: 5px solid transparent;
    border-left-width: 4px;
    border-right-width: 4px;
    border-top-color: #bbb;
    bottom: -3px;
    right: 4px;
}

.expander[expanded]::before {
    border-top-color: transparent;
    border-bottom-color: #bbb;
    top: -3px;
    bottom: 0;
}
</style>
