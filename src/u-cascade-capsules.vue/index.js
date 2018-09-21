import UCascadeSelect from 'proto-ui.vusion/src/u-cascade-select.vue';

export default {
    name: 'u-cascade-capsules',
    mixins: [UCascadeSelect],
    props: {
        cancelable: { type: Boolean, default: false },
    },
};
