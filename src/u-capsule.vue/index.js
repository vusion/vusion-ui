import UListViewItem from 'proto-ui.vusion/src/u-list-view-item.vue';

export default {
    name: 'u-capsule',
    parentName: 'u-capsules',
    mixins: [UListViewItem],
    props: {
        label: String,
    },
};
