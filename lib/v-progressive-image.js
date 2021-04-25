// 2021.4.10
export default {
  install: (app, options) => {
    const scaleMultiple =
      options && options.scale && options.scale >= 1 ? options.scale : 1.2;
    const animationTime = options && options.time ? options.time : 0.5;
    const blurPixels = options && options.blur ? options.blur : 20;
    const css = `<style type="text/css">.v-progressive-image{overflow:hidden;width:100%;background-size:cover;position:relative}.v-progressive-image img{display:block}.v-progressive-image:after{content:"";width:100%;position:absolute;left:0;top:0;background:inherit no-repeat;filter:blur(20px)}.pi-preview{overflow:hidden;width:100%;}.pi-origin{overflow:hidden;width:100%}.pi-animation{animation:blur ${animationTime}s cubic-bezier(0.39,0.575,0.565,1)}.pi-abs{position:absolute;left:0;top:0}@keyframes blur{from{transform:scale(${scaleMultiple});filter:blur(${blurPixels}px);-webkit-filter:blur(${blurPixels}px);-ms-filter:blur(${blurPixels}px);-moz-filter:blur(${blurPixels}px)}to{transform:scale(1);filter:blur(0);-webkit-filter:blur(0);-ms-filter:blur(0);-moz-filter:blur(0)}}</style>`;
    document.head.insertAdjacentHTML("beforeend", css);

    app.directive("preview", {
      // 当指令第一次绑定到元素并且在挂载父组件之前调用
      beforeMount(el, binding) {
        el.className = "v-progressive-image";
        const img = new Image();
        img.className = "pi-preview";
        img.onload = () => {
          el.appendChild(img);
          el.style.backgroundImage = "url(" + binding.value + ")";
        };
        img.src = binding.value;
      },
    });

    app.directive("origin", {
      // 当被绑定的元素插入到 DOM 中时
      mounted(el, binding) {
        const img = new Image();
        img.className = "pi-origin pi-animation";
        if (options && options.animation === false) {
          img.className = "pi-origin";
        }
        img.onload = () => {
          if (options && options.removePreview) {
            el.childNodes.forEach((item, index) => {
              if (item.className === "pi-preview") {
                el.removeChild(el.childNodes[index]);
              }
            });
          } else {
            img.className += " pi-abs";
          }
          el.appendChild(img);
        };
        img.src = binding.value;
      },
    });
  },
};
