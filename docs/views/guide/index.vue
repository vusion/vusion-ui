<template>
    <div :class="$style.root">
        <div :class="$style.side">
            <u-sidebar color="inverse">
                <u-sidebar-item to="/guide/introduce">介绍</u-sidebar-item>
                <u-sidebar-item to="/guide/quickstart">快速开始</u-sidebar-item>
                <u-sidebar-item href="https://github.com/vusion/vusion-ui/releases" target="_blank">更新日志</u-sidebar-item>
            </u-sidebar>
        </div>
        <div :class="$style.main">
            <router-view></router-view>
        </div>
    </div>
</template>

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
    padding: 50px;
    padding-top: 30px;
}
</style>
