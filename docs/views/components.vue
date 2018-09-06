<template>
<div :class="$style.root">
    <div :class="$style.side">
        <u-sidebar color="inverse" :class="$style.sidebar" collapsible accordion>
            <u-sidebar-group v-for="group in groups" :key="group.name" :title="group.name">
                <u-sidebar-item v-for="component in group.children" :key="component.name" exact :to="'/components/'+component.name">
                    {{ component.alias }} <small>{{ component.CamelName }}</small>
                </u-sidebar-item>
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
        return { groups: this.$docs.componentGroups };
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

.sidebar {
    width: calc($sidebar-width + 8px);
}

.sidebar > * {
    width: $sidebar-width;
}

.main {
    margin-left: $sidebar-width;
    max-width: 1010px;
    padding-left: 50px;
    padding-bottom: 50px;
    padding-top: 30px;
}
</style>
