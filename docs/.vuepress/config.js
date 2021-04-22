
module.exports = {
    head: [// 设置 favor.ico，html/head 标题中添加 style 标签
       ['link', { rel: 'icon', href: `logo.png` }]
   ],
   title: '我的技术站', // 设置网站标题
   description: '描述：我的技术站',
   base: '/', //默认路径
   themeConfig: {// 主题设置
       displayAllHeaders: true, // 默认值：false
       nav: [{// 右上导航航条 docs/.vuepress 文件夹下
           text: '概述',
           link: '/'
       }, {
           text: 'Vue 学习笔记',
           items:[
               {text:'笔记', link: '/guide/vue/test01'}, // 可不写后缀 .md
               {text:'其它链接', link: 'https://www.baidu.com/'}// 外部链接
           ]
       }, {
           text: 'Typescript 学习笔记',
           items:[
               {text:'笔记', link: '/guide/ts/'},// 以 ‘/’结束，默认读取 README.md
               {text:'其它链接', link: 'https://www.baidu.com/'} // 外部链接
           ]
       }],
       sidebar: {//左侧列表
           '/guide/vue/': [{ // 对应导航中的link文件夹路径，注意这里是 ‘/’结束
               title: 'Vue 学习',
               collapsable: true,
               children: [{
                   title: '测试01',
                   path: 'test01'
               }, {
                   title: '测试02',
                   path: 'test02'
               }, {
                   title: '测试03',
                   path: 'test03'
               }]
           }],
           '/guide/ts/': [{
               title: 'Typescript 学习',
               collapsable: false,
               children: [{
                   title: '测试',
                   path: 'test01'
               }]
           }],
           // fallback 侧边栏被最后定义
           '/': ['','guide/vue/test03'], //不能放在数组第一个，否则会导致右侧栏无法使用 
        //    '/': [''], //不能放在数组第一个，否则会导致右侧栏无法使用 
       },
       // 左侧列表展开级数，默认是 1
       sidebarDepth: 6
   }
}