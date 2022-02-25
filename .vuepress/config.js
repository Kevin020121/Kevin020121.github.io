const nav = require('./nav');
const sidebar = require('./sidebar');

const moment = require('moment');
moment.locale('zh-cn');

module.exports = {
  "title": "Kevin的博客",
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
    }
  },
  "description": "加载中",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    nav,
    sidebar,
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "Kevin",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1368052450@qq.com",
        "link": "https://www.kevin-icu.top"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "最后跟新时间",
    "author": "Kevin",
    "authorAvatar": "/avatar.gif",
    "record": "xxxx",
    "startYear": "2017",
    'subSidebar': 'auto'
  },
  "markdown": {
    "lineNumbers": true
  },
  plugins: [
    [
      //先安装在配置， npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ['koharu'],
        //theme: ['ackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
        clean: true,
        width: 135,
        height: 300,
        modelStyle: {
          left: '40px', bottom: '-20px', opacity: '0.9'
        }
      },
    ],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          return moment(timestamp).format('LLLL');
        }
      }
    ],
    [
      'vuepress-plugin-code-copy', true
    ],
    
  ]
}