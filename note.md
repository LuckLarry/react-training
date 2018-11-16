"plugins": [
"transform-decorators-legacy" 不用这个配置，使用下面的两个
["@babel/plugin-proposal-decorators", { "legacy": true }],
["@babel/plugin-proposal-class-properties", { "loose" : true }]






<BrowserRouter>里面只能有一个顶级的标签</BrowserRouter>


<Route path="/" exact component={App}></Route>
exact 是完全匹配的非正则