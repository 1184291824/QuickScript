<template>
    <view class="right-window">
        <!-- <view > -->
            <router-link class="right-window-item" :to="item.link" v-for="item in list" :key="item.id">
                <text class="right-window-item-title">{{item.title}}</text>
                <text class="right-window-item-description">{{item.description}}</text>
            </router-link>
        <!-- </view> -->
    </view>
</template>

<script>
    export default {
        data() {
            return
        },
        props: {
            list: {
                type: Array,
                required: true
            }
        },
    }
</script>

<style>
    .right-window {
        overflow: auto;
        flex: 1;
        flex-wrap: wrap;
        align-items: flex-start;
        align-content: flex-start
    }

    .right-window-item {
        margin: 20px;
        padding: 0.5rem;
        border-radius: 10px;
        border: #E8E8E8 solid 1px;
        width: 15rem;
        height: 10rem;
        flex-direction: column;
        display: flex;
        /* 消除a下划线 */
        text-decoration: none;
    }

    .right-window-item:hover {
        background-color: #fafafa;
    }

    .right-window-item:active {
        background-color: #F0F0F0;
    }

    .right-window-item-title {
        border-bottom: #E8E8E8 solid 1px;
        line-height: 1.5rem;
        height: 1.5rem;
        font-weight: normal;
        /* margin-bottom: 5px; */
    }

    .right-window-item-description {
        height: 7.5rem;
        overflow: auto;
        padding-top: 0.25rem;
        line-height: 1.5rem;
    }
</style>
