import USteps from 'proto-ui.vusion/src/u-steps.vue';

export default {
    name: 'u-steps',
    extends: USteps,
    props: {
        size: String,
    },
    computed: {
        styleObject() {
            if (this.size === 'auto') {
                const width = this.itemVMs.length ? (1 / this.itemVMs.length) * 100 + '%' : undefined;
                return {
                    width,
                };
            } else
                return {};
        },
    },
};
