# v-progressive-image

##### 这是一个适用于vue3的渐进式图片加载插件！

只需在原标签上添加两行自定义指令，即可实现图片的平滑过渡。

<a href="https://www.npmjs.com/package/v-progressive-image"><img src="https://img.shields.io/npm/v/v-progressive-image"></a> <img src="https://img.shields.io/badge/vue-3.x-brightgreen">

### 效果

![v-progressive-image](./v-progressive-image.gif)

### 简介

v-progressive-image 是vue3的指令插件，通过两个指令，即可实现图片渐进加载功能。

v-progressive-image 可以帮您：实现从高斯模糊的缩略图到原图的平缓过渡，改善用户体验。

原理： `v-preview` 指定的缩略图会被优先下载，使用户先看到一张高斯模糊的缩略图；当原图加载完成时，再平滑过渡到高清图片，这便是渐进加载。

### 安装插件

```
npm i v-progressive-image
```

### 全局引入插件

```javascript
import vProgressiveImage from 'v-progressive-image';
```

```javascript
app.use(vProgressiveImage, {
    removePreview: false, // 大图加载完成后是否删除较小的预览图(删除会进行DOM操作) 默认false
    animation: true // 是否启用过渡动画 默认true
    scale: 1.2 // 过渡动画放大倍数 必须>=1 默认为1.2 (仅在animation不为false时生效，1.0.0及之后的版本支持)
});
```

> ###### 注意：（适用于旧版本）
>
> v-progressive-image 的 `0.1.0` 和 `0.1.1` 版本需要引入样式文件：
>
> ```javascript
> import 'v-progressive-image/lib/index.css';  // 0.1.0 和 0.1.1 版本需要引入样式文件
> ```
>
> `1.0.0` 及之后的版本无需引入

### 使用

```vue
<div
	v-preview="'https://ftp.bmp.ovh/imgs/2021/04/c7a9451f12cb70ce.jpg'"
	v-origin="'https://ftp.bmp.ovh/imgs/2021/04/b3a70da0fa596920.jpeg'"
>
</div>
```

- 使用 `v-preview` 指定预览图（较小的图片）链接，使用 `v-origin` 指定原图链接。
- div标签中间不可以有内容。
- 预览图建议使用Base64编码。
- 支持在任何常规标签上使用，但在非块级元素上使用可能会有意料之外的结果，如模糊范围超过父元素。