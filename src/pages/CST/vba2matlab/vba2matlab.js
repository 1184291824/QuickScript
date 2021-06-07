import Prism from "prismjs"
function vba2matlab(vba, history) {
    // if (vba === "") {
    //     return ""
    // }
    // document.getElementById('vba').addEventListener('input', function() {
    // let vba = this.value;
    if (history.show) {
        setTimeout(Prism.highlightAll, 100);
        vba = vba.replace(/'/g, "''");
        vba = vba.replace(/\n/g, "\\n");
        // console.log(vba);
        return "invoke(mws, 'AddToHistory', '" + history.name + "', '" + vba + "');" + "\n";
    } else {
        let vba_lines = vba.split('\n');
        let object_name;
        // let matlab = document.getElementById('matlab');
        let matlab = "";
        // matlab.value = "";
        for (let vba_line of vba_lines) {
            vba_line = vba_line.trim(); // 去除首尾空格
            // console.log(vba_line);
            if (vba_line.startsWith('With')) { // 起始行
                object_name = vba_line.split(' ')[1];
                matlab += object_name + " = invoke(mws, '" + object_name + "');" + "\n";
                continue;
            } else if (vba_line.startsWith('End')) { // 结束行
                matlab += "release(" + object_name + ");" + "\n";
                continue;
            } else if (vba_line.startsWith("'")) { // 以'开头的是注释行
                matlab += "% " + vba_line.slice(1) + "\n";
                continue;
            } else if (vba_line === "") { // 空行
                matlab += "\n"
            } else {
                let codes = vba_line.split(/[ ,]+/);
                let matlab_code = "invoke(" + object_name + ", ";
                for (let code in codes) {
                    if (code == 0 && code != codes.length - 1) {
                        matlab_code += "\"" + codes[code].slice(1) + "\", ";
                    } else if (code == 0) {
                        matlab_code += "\"" + codes[code].slice(1) + "\");";
                    } else if (code != codes.length - 1) {
                        if (codes[code].endsWith("\"")) {
                            matlab_code += codes[code] + ", ";
                        } else {
                            matlab_code += codes[code] + " ";
                        }

                    } else {
                        matlab_code += codes[code] + ");";
                    }
                }
                matlab_code = matlab_code.replace(/"/g, "'"); // 兼容低版本matlab
                matlab += matlab_code + "\n";
            }

        }
        setTimeout(Prism.highlightAll, 100);
        return matlab
    }

}
// })
// document.getElementById('copy').addEventListener('click', function() {
//     // let Url2 = this.value;
//     // let oInput = document.createElement('input');
//     // oInput.value = Url2;
//     // document.body.appendChild(oInput);
//     document.getElementById('matlab').select(); // 选择对象
//     document.execCommand("Copy"); // 执行浏览器复制命令
//     // oInput.className = 'oInput';
//     // oInput.style.display = 'none';
//     alert('复制成功');
// })

export default {
    vba2matlab
}
