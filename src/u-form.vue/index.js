import UForm from 'proto-ui.vusion/src/u-form.vue';

export default {
    name: 'u-form',
    mixins: [UForm],
    computed: {
        extraSlots() {
            return this.itemVMs.some((item) => item.$slots.extra);
        },
    },
};
