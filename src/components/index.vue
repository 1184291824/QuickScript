<template>
    <view class="index-window">
        <index-left-window @chooseMenuItem="chooseMenuItem"></index-left-window>
        <index-right-window :list="itemList"></index-right-window>
    </view>
</template>

<script>
    import IndexLeftWindow from "@/components/index-left-window.vue"
    import IndexRightWindow from "@/components/index-right-window.vue"
    export default {
        name: "index",
        data() {
            return {
                itemList: [],
            }
        },
        components: {
            "index-left-window": IndexLeftWindow,
            "index-right-window": IndexRightWindow
        },
        methods: {
            chooseMenuItem(itemList){
                // console.log("e: " + JSON.stringify(e));
                this.itemList = itemList;
            }
        }
    }
</script>

<style>
    .index-window{
        height: calc(100vh - 3.6rem);
    }
</style>
