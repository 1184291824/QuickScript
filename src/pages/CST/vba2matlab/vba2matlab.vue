<template>
    <view class="code-box">
        <textarea class="code-area language-vba" v-model="vba_code" placeholder="VBA代码"></textarea>
        <view class="code-area code-matlab">
            <pre><code class="language-matlab line-numbers" id="matlab">{{matlab_code}}</code></pre>
        </view>

        <view class="history-view">
            <text>
                <input id="history" type="checkbox" v-model="history.show" />
                <label for="history">是否加入History List</label>
            </text>
            <text>
                <label for="history-name">history名称（唯一）</label>
                <input id="history-name" type="text" v-model="history.name" />
            </text>
        </view>
        <button class="copy-button" type="button" @click="copy">
            <text>复制matlab代码</text>
        </button>
        
    </view>
</template>

<script>
    // import Prism from "prismjs"
    import vba2matlab_function from "./vba2matlab.js"
    // let timeout = null;
    export default {
        name: "vba2matlab",
        data() {
            return {
                vba_code: "' 请在这里输入vba代码，\n' 但是请注意, 您的vba代码应该具有如下特点，\n' 1. 以With语句开头，以End语句结尾\n' 2. 可以包含多组With End 语句\n' 3. 以“'”开头表示注释语句",
                // matlab_code: "",
                history: {
                    show: false,
                    name: "fooHistory1"
                }
            }
        },
        methods: {
            vba2matlab_function: vba2matlab_function.vba2matlab,
            copy() {
                let _input = document.createElement("textarea"); // 直接构建input
                _input.value = this.matlab_code; // 设置内容
                document.body.appendChild(_input); // 添加临时实例
                _input.select(); // 选择实例内容
                document.execCommand("Copy"); // 执行复制
                document.body.removeChild(_input); // 删除临时实例
                alert("已复制到剪贴板")
            }
        },
        computed: {
            matlab_code(){
                return this.vba2matlab_function(this.vba_code, this.history)
            }
        },
        // watch: {
        //     vba_code: {
        //         handler(data) {
        //             clearTimeout(timeout);
        //             this.matlab_code = this.vba2matlab_function(data);
        //             timeout = setTimeout(Prism.highlightAll, 500); // 延迟刷新高亮
        //             // Prism.highlightAll();
        //         },
        //         immediate: true,
        //     },
            
        // }
    }
</script>

<style>
    .code-box {
        display: grid;
        /* margin-top: 2rem; */
        /* justify-content: space-around;
        align-items: center;
        flex-wrap: wrap; */
        /* width: 90%; */
        /* margin: 0 auto; */
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 30rem auto;
        place-items: center;
        /* gap: 2rem; */
    }

    .code-area {
        /* height: 500px; */
        /* width: 45%; */
        border: solid #E8E8E8 1px;
        border-radius: 5px;
        padding: 1em;
        box-sizing: border-box;
        overflow: auto;
        margin: 2rem;
        place-self: stretch;
        resize: none;
        /* font-family: Consolas; */
        font-size: 0.8rem;
    }

    .code-matlab {
        padding: 0;
    }

    .code-matlab>pre {
        width: 100%;
        margin: 0;
    }

    .history-view {
        align-items: center;
        justify-content: center;
        flex-direction: column;
        /* width: 50%; */
    }
    .history-view text{
        padding: 0.5rem 0;
        align-items: center;
    }
    
    .history-view #history-name{
        border: #E8E8E8 solid 1px;
        border-radius: 5px;
        line-height: 2rem;
    }

    .copy-button {
        background: none;
        border: solid 1px lightgray;
        font-size: 1rem;
        padding: 0.5rem;
        border-radius: 5px;
        /* margin: 20px auto; */
        /* width: 50%; */
    }

    .copy-button:hover {
        background-color: #fafafa;
    }

    .copy-button:active {
        background-color: #F0F0F0;
    }

    @media screen and (max-width: 500px) {

        #vba,
        #matlab {
            width: 100%;
            margin: 10px auto;
        }
    }
</style>
