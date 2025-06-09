const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm9087m/",
            name: "ssm9087m",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm9087m/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校园二手交易平台"
        } 
    }
}
export default base
