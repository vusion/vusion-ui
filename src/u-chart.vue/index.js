export default {
    name: 'u-chart',
    props: {
        title: String,
        caption: String,
        series: Array,
        data: Array,
        border: { type: Boolean, default: false },
        legend: { type: Boolean, default: false },
        width: { type: String, default: '100%' }, // @deprecated
        height: { type: String, default: '450px' }, // @deprecated
        titleAlign: { type: String, default: 'center' },
        titleAlignment: { type: String, default: 'center' },
        loading: { type: Boolean, default: false },
        error: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        contentStyle: Object,
    },
    data() {
        return {
            seriesList: this.handleSeriesList(this.series),
            // currentData: this.handleData(this.data),
        };
    },
    watch: {
        series(series) {
            this.seriesList = this.handleSeriesList(series);
        },
        // data(data) {
        //     this.currentData = this.handleData(data);
        // },
    },
    methods: {
        handleSeriesList(seriesList) {
            // 保证内部始终为 Array
            if (!seriesList)
                return [];

            seriesList.forEach((series) => {
                if (!series.hasOwnProperty('hidden'))
                    this.$set(series, 'hidden', false);
            });

            return seriesList;
        },
        // handleData(data) {
        //     if (!data) {
        //         return [];
        //     }

        //     return data;
        // },
        selectLegendItem(series) {
            this.$emit('select-series', {
                series,
            });
        },
        toggleLegendItem(series) {
            if (this.readonly)
                return;
            series.hidden = !series.hidden;
        },
    },
};
