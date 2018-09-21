import { MEmitter } from 'proto-ui.vusion';

export default {
    name: 'u-table-view-column',
    parentName: 'u-table-view',
    mixins: [MEmitter],
    props: {
        title: String,
        field: String,
        width: [String, Number],
    },
    data() {
        return {
            tempWidth: this.width + '',
            currentWidth: this.width,
        };
    },
    created() {
        this.dispatch(this.$options.parentName, 'add-column-vm', this);
    },
    destroyed() {
        this.dispatch(this.$options.parentName, 'remove-column-vm', this);
    },
};
