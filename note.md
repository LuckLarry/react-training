"plugins": [
"transform-decorators-legacy" 不用这个配置，使用下面的两个
["@babel/plugin-proposal-decorators", { "legacy": true }],
["@babel/plugin-proposal-class-properties", { "loose" : true }]
