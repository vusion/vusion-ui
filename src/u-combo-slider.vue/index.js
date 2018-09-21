import UComboSlider from 'proto-ui.vusion/src/u-combo-slider.vue';

export default {
    name: 'u-combo-slider',
    mixins: [UComboSlider],
    props: {
        unit: String,
        tip: String,
        hideButtons: { type: Boolean, default: true },
    },
};
