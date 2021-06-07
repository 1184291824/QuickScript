<template>
    <view class="left-window">
        <view class="left-window-item" v-for="item in list" :key="item.id" @click="this.$emit('chooseMenuItem', item.itemList)">
            <img :src="item.icon_src" />
            <text>{{ item.title }}</text>
        </view>
    </view>
</template>

<script>
    const list = require("@/assets/json/menu.json")
    export default {
        name: "index-left-window",
        data() {
            return list
        },
        created() {
            // console.log("created");
            // 载入图片
            for (let item of this.list) {
                // console.log("@/" + item.icon);
                const icon = require("@/assets" + item.icon);
                item.icon_src = icon;
            }
        },
        mounted() {
            // console.log("mounted");
            this.$emit("chooseMenuItem", this.list[0].itemList);
        }
    }
</script>

<style>
    .left-window {
        width: 16.4rem;
        /* position: absolute; */
        /* top: 3.6rem; */
        /* bottom: 0; */
        /* background-color: #E8E8E8; */
        /* height: ; */
        overflow-x: auto;
        overflow-y: auto;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        border-right: #E8E8E8 solid 1px;
    }
    .left-window-item{
        align-items: center;
        padding: 1rem;
        border-bottom: #E8E8E8 solid 1px;
        cursor: pointer;
    }
    .left-window-item img{
        width: 1.5rem;
        /* padding: 10px; */
    }
    .left-window-item text{
        margin-left: 0.5rem;
        flex: 1;
    }
    .left-window-item:hover{
        background-color: #fafafa;
    }
    .left-window-item:active{
        background-color: #F0F0F0;
    }
</style>
