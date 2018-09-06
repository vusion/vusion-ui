<template>
    <div :class="$style.root">
        <div :class="$style.side">
            <u-sidebar color="inverse" collapsible accordion expand-trigger="click">
                <u-sidebar-group title="dashboard">
                    <u-sidebar-item exact to="/demo/dashboard/analysis">分析页</u-sidebar-item>
                    <u-sidebar-item exact to="/demo/dashboard/monitor">监控页</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="表单页">
                    <u-sidebar-item exact to="/demo/form/basic">基础表单</u-sidebar-item>
                    <u-sidebar-item exact to="/demo/form/advance">高级表单</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="列表页">
                    <u-sidebar-item exact to="/demo/table/basic">基础表格</u-sidebar-item>
                    <u-sidebar-item exact to="/demo/table/advance">高级表格</u-sidebar-item>
                    <u-sidebar-item exact to="/demo/table/select">选择列表</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="详情">
                    <u-sidebar-item exact to="/demo/detail/basic">基础详情</u-sidebar-item>
                    <!-- <u-sidebar-item exact to="/demo/detail/advance">高级详情</u-sidebar-item> -->
                </u-sidebar-group>
                <u-sidebar-group title="日期页">
                    <u-sidebar-item exact to="/demo/date/basic">日期选择</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </div>
        <div :class="$style.main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
};
</script>

<style module>
.side {
    position: fixed;
    width: $sidebar-width;
    top: $navbar-height;
    bottom: 0;
    overflow: hidden;
}

.side li {
    width: $sidebar-width;
}

.main {
    margin-left: $sidebar-width;
    max-width: 1000px;
    padding: 40px;
}
</style>
