import UTooltip from 'proto-ui.vusion/src/u-tooltip.vue';

export default {
    name: 'u-tooltip',
    extends: UTooltip,
    props: {
        size: { type: String, default: 'normal' },
    },
};
