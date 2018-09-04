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
        contentStyle: Object,
    },
    data() {
        return {
            currentSeries: this.handleSeries(this.series),
            // currentData: this.handleData(this.data),
        };
    },
    watch: {
        series(series) {
            this.currentSeries = this.handleSeries(series);
        },
        // data(data) {
        //     this.currentData = this.handleData(data);
        // },
    },
    methods: {
        handleSeries(series) {
            if (!series)
                return series;

            series.forEach((sery) => {
                if (!sery.hasOwnProperty('hidden'))
                    this.$set(sery, 'hidden', false);
            });
            return series;
        },
        // handleData(data) {
        //     if (!data) {
        //         return [];
        //     }

        //     return data;
        // },
    },
};
