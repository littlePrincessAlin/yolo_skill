# 描述
一个浏览器插件
node > 18.0
# 功能
> 多人协同浏览猎聘简历，当A点击获取联系方式后（候选人已被A联系过），将不推荐给其他同事；
> 浏览器悬浮一个可操作窗口，用于展示访问记录；
> 候选人是被哪个同事联系的？记录（该功能优先级低）；


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# 使用指南：
1. 安装插件
2. 打开猎聘简历
3. 点击插件图标，获取联系方式
   3.1 第一次使用，填写用户名和邮箱
   3.2 再次使用，无需填写
4. 点击获取联系方式，插件自动记录修改联系状态
5. 点击插件图标，添加备注
   


##### 修改需求：
已修改：
1. 页面布局
2. 端口修改
3. 插件页面 ❌ 改为 >>> （展开/收回）

未修改：
1. 候选人未联系时 字体为蓝色（字体加粗）/或前方图标改为实底蓝色图标
2. 候选人已联系时 字体为红色（字体加粗）/或前方图标改为实底红色图标
3. 仅需记录使用人姓名（可提供登录接口）


##### 待处理需求:
1. 备注显示（list 组件） title为备注内容 description为备注人与备注时间。时间精确到分钟 后端会返回UTC时间 
