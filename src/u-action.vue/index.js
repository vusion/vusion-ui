import { UEmitter } from 'proto-ui.vusion';

export default {
    name: 'u-action',
    parentName: 'u-actions',
    mixins: [UEmitter],
    inheritAttrs: false,
    created() {
        this.dispatch(this.$options.parentName, 'add-item-vm', this);
    },
    destroyed() {
        this.dispatch(this.$options.parentName, 'remove-item-vm', this);
    },
};
