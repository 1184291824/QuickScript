<template>
    <!-- <view> -->
        <view class="body" id="body">
            <view class="logo">
                <text>QuickScript | 快速脚本</text>
            </view>
            <view class="menu">
                <a class="menu-a" v-for="tab in tabs" :href="tab.link" :key="tab.text" :target="tab.target"><text>{{ tab.text }}</text></a>
            </view>
        </view>
    <!-- </view> -->
</template>

<script>
    export default {
        name: 'header-menu',
        data() {
            return {
                tabs: [
                    {
                        text: "首页",
                        link: "/",
                        target: "_self"
                    },
                    {
                        text: "帮助文档",
                        link: "#",
                        target: "_blank"
                    },
                    {
                        text: "Git",
                        link: "#",
                        target: "_blank"
                    },
                    {
                        text: "提交Bug",
                        link: "#",
                        target: "_blank"
                    },
                    {
                        text: "提交需求",
                        link: "#",
                        target: "_blank"
                    },
                ]
            }
        }
    }
</script>

<style>
    .body {
        justify-content: space-between;
        box-shadow: 0 0 8px 2px #E8E8E8;
        height: 3.6rem;
        z-index: 20;
    }
    
    .logo{
        padding: 0 10px;
        font-size: 1.5rem;
        /* display: flex; */
        align-items: center;
        /* height: 100%; */
    }
    
    .menu{
        /* display: flex; */
        align-items: center;
        /* padding: 5px 10px; */
        /* flex: 1; */
        justify-content: flex-end;
        font-size: 1.2rem;
    }
    .menu-a{
        padding: 5px 10px;
        margin: 0 10px;
        border-radius: 5px;
        text-decoration: none;
        /* color: #000000; */
    }
    .menu-a:hover{
        background-color: #E8E8E8;
    }
</style>
