import { Emitter } from 'proto-ui.vusion';

export default {
    name: 'u-table-view-column-2',
    parentName: 'u-table-view-2',
    mixins: [Emitter],
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
