(function (window) {
  let svgSprite = '<svg><symbol id="icon-tubiao115" viewBox="0 0 1025 1024"><path d="M512.001074 142.293459l381.02485 375.222426c-30.419236 16.693995-51.043938 48.61347-51.043938 85.30178l0 292.45959-164.992503 0L676.989483 667.807889c0-53.757877-44.404409-97.487895-98.991204-97.487895l-131.996458 0c-54.585771 0-98.992227 43.728995-98.992227 97.487895l0 227.469366-164.990456 0L182.019138 602.817665c0-36.689334-20.624702-68.607785-51.041892-85.30178L512.001074 142.293459M512.001074 63.907514c-8.443704 0-16.95188 3.109977-23.333524 9.455803l-481.308552 473.982351c-12.822642 12.631274-8.442681 22.974326 9.669684 22.974326l65.995159 0c18.112365 0 32.998091 14.599187 32.998091 32.49767L116.021933 927.772879c0 17.896437 14.887773 32.49767 32.999115 32.49767l230.987662 0c18.108272 0 32.997068-14.601233 32.997068-32.49767L413.005777 667.807889c0-17.897461 14.887773-32.4946 32.996044-32.4946l131.996458 0c18.107248 0 32.996044 14.59714 32.996044 32.4946L610.994324 927.772879c0 17.896437 14.887773 32.49767 32.999115 32.49767l230.987662 0c18.107248 0 32.997068-14.601233 32.997068-32.49767L907.978168 602.817665c0-17.898484 14.888796-32.49767 32.996044-32.49767l65.999252 0c18.108272 0 22.492326-10.343052 9.666614-22.974326l-481.308552-473.982351C528.949884 67.017491 520.443755 63.907514 512.001074 63.907514L512.001074 63.907514z"  ></path></symbol><symbol id="icon-htmal5icon22" viewBox="0 0 1024 1024"><path d="M365.624235 692.484607 165.695786 492.556159 99.05297 559.198975 365.624235 825.77024 936.850128 254.54537 870.207311 187.902554Z"  ></path></symbol><symbol id="icon-shouye" viewBox="0 0 1025 1024"><path d="M786.332898 914.015914 638.472386 914.015914 638.472386 644.045579l-1.023355 0 0-3.070066L383.686597 640.975513l0 273.040401L233.778352 914.015914 233.778352 423.195275l-44.171084 0 0 534.9907 238.249391 0L427.856658 685.143528l166.445667 0 0 273.040401 236.201657 0L830.503982 423.195275l-44.170061 0L786.333922 914.015914 786.332898 914.015914zM515.651332 64.288202l-18.98017 0L60.187618 426.449545l27.263208 35.370229L510.944921 113.808365 933.859796 452.158276l23.513634-34.50754L515.651332 64.288202z"  ></path></symbol><symbol id="icon-arrow-right-copy-copy-copy" viewBox="0 0 1024 1024"><path d="M357.957 167.176l-49.463 48.973 294.308 296.327-296.782 293.831 49.044 49.381 346.239-342.809z"  ></path></symbol><symbol id="icon-loading" viewBox="0 0 1024 1024"><path d="M393.664871 495.52477c0 11.307533-9.168824 20.466124-20.466124 20.466124l-103.671151 0c-11.307533 0-20.466124-9.15859-20.466124-20.466124 0-11.2973 9.15859-20.466124 20.466124-20.466124l103.671151 0C384.496048 475.058646 393.664871 484.22747 393.664871 495.52477zM805.207925 495.52477c0 11.307533-9.15859 20.466124-20.466124 20.466124l-103.671151 0c-11.2973 0-20.466124-9.15859-20.466124-20.466124 0-11.2973 9.168824-20.466124 20.466124-20.466124l103.671151 0C796.049335 475.058646 805.207925 484.22747 805.207925 495.52477zM547.600823 237.917668l0 103.671151c0 11.307533-9.15859 20.466124-20.466124 20.466124s-20.466124-9.15859-20.466124-20.466124l0-103.671151c0-11.307533 9.15859-20.466124 20.466124-20.466124C538.442232 217.451544 547.600823 226.610134 547.600823 237.917668zM547.600823 649.460722l0 103.681384c0 11.2973-9.15859 20.466124-20.466124 20.466124s-20.466124-9.168824-20.466124-20.466124l0-103.681384c0-11.2973 9.15859-20.466124 20.466124-20.466124C538.442232 628.994598 547.600823 638.163421 547.600823 649.460722zM411.562497 428.754041c-3.786233 6.569626-10.673084 10.233062-17.733896 10.233062-3.479241 0-6.999414-0.880043-10.222829-2.742461l-89.774653-51.861158c-9.782807-5.658883-13.129019-18.173918-7.480368-27.956725 5.658883-9.79304 18.173918-13.139252 27.956725-7.490601l89.774653 51.861158C413.864936 406.456199 417.22138 418.971234 411.562497 428.754041zM767.918647 634.633015c-3.796466 6.559393-10.673084 10.233062-17.744129 10.233062-3.469008 0-6.989181-0.890276-10.212596-2.752694l-89.774653-51.861158c-9.782807-5.64865-13.139252-18.173918-7.480368-27.956725 5.64865-9.79304 18.173918-13.139252 27.956725-7.480368l89.774653 51.861158C770.221086 612.32494 773.567297 624.850208 767.918647 634.633015zM673.723312 282.70778l-51.861158 89.76442c-3.786233 6.559393-10.673084 10.233062-17.744129 10.233062-3.469008 0-6.989181-0.890276-10.212596-2.752694-9.79304-5.64865-13.139252-18.163685-7.480368-27.956725l51.861158-89.76442c5.64865-9.79304 18.163685-13.139252 27.956725-7.490601C676.025751 260.399705 679.382195 272.91474 673.723312 282.70778zM467.854571 639.053698l-51.861158 89.774653c-3.796466 6.559393-10.673084 10.233062-17.744129 10.233062-3.479241 0-6.999414-0.890276-10.222829-2.752694-9.782807-5.658883-13.139252-18.173918-7.480368-27.956725l51.861158-89.774653c5.658883-9.782807 18.173918-13.129019 27.956725-7.480368C470.15701 616.755856 473.503221 629.27089 467.854571 639.053698zM460.435601 379.911636c-3.213181 1.862417-6.733355 2.742461-10.202363 2.742461-7.081279 0-13.957897-3.673669-17.744129-10.243295l-51.809993-89.795119c-5.64865-9.79304-2.292206-22.308075 7.500834-27.956725 9.79304-5.64865 22.308075-2.292206 27.956725 7.500834l51.79976 89.795119C473.585085 361.747951 470.228641 374.262986 460.435601 379.911636zM666.089447 736.400816c-3.223415 1.852184-6.743588 2.742461-10.212596 2.742461-7.071046 0-13.957897-3.673669-17.744129-10.243295l-51.79976-89.805352c-5.64865-9.79304-2.292206-22.308075 7.500834-27.956725 9.782807-5.64865 22.297842-2.281973 27.946492 7.500834l51.809993 89.805352C679.238932 718.237131 675.882488 730.752166 666.089447 736.400816zM760.499677 384.526747l-89.795119 51.809993c-3.223415 1.852184-6.743588 2.742461-10.212596 2.742461-7.071046 0-13.957897-3.673669-17.744129-10.243295-5.64865-9.79304-2.292206-22.308075 7.500834-27.956725l89.805352-51.809993c9.782807-5.638417 22.297842-2.281973 27.946492 7.500834C773.649162 366.363062 770.292718 378.878097 760.499677 384.526747zM404.02073 590.180594l-89.805352 51.79976c-3.213181 1.862417-6.733355 2.742461-10.202363 2.742461-7.081279 0-13.957897-3.673669-17.744129-10.243295-5.64865-9.79304-2.292206-22.308075 7.500834-27.956725l89.795119-51.79976c9.79304-5.64865 22.308075-2.292206 27.956725 7.500834S413.81377 584.531943 404.02073 590.180594z"  ></path></symbol><symbol id="icon-gerenzhongxin" viewBox="0 0 1024 1024"><path d="M512 87.04c-136.704 0-247.808 111.104-247.808 247.808 0 98.816 58.368 184.32 142.336 223.744-155.136 45.568-268.8 188.928-268.8 358.912 0 10.752 8.704 19.456 19.456 19.456 10.752 0 19.456-8.704 19.456-19.456 0-184.832 150.528-335.36 335.36-335.36 136.704 0 247.808-111.104 247.808-247.808S648.704 87.04 512 87.04z m0 456.192c-115.2 0-208.384-93.696-208.384-208.384 0-115.2 93.696-208.384 208.384-208.384 115.2 0 208.384 93.696 208.384 208.384 0 114.688-93.184 208.384-208.384 208.384z m226.816 76.8c-8.704-6.656-20.992-5.12-27.648 3.584-6.656 8.704-5.12 20.992 3.584 27.648 83.968 64 132.096 161.28 132.096 266.752 0 10.752 8.704 19.456 19.456 19.456 10.752 0 19.456-8.704 19.456-19.456 0.512-118.272-53.248-226.816-146.944-297.984z"  ></path></symbol><symbol id="icon-ziyuan" viewBox="0 0 1024 1024"><path d="M588.468659 257.265591H123.316451L371.227243 58.55359a31.947267 31.947267 0 1 0-39.614611-49.837737l-319.472671 255.578137v11.501016a30.669376 30.669376 0 0 0 0 4.472617v3.194727a30.669376 30.669376 0 0 0 0 4.472617v11.501016l319.472671 255.578137a31.947267 31.947267 0 1 0 40.253556-49.837737L123.316451 321.160125h465.152208C792.292223 321.160125 958.418011 464.283881 958.418011 640.632795s-166.125789 319.47267-369.949352 319.472671H95.841801a31.947267 31.947267 0 0 0 0 63.894534h492.626858C830.628943 1024 1022.312545 852.123703 1022.312545 640.632795s-191.683602-383.367205-433.843886-383.367204z" fill="" ></path></symbol><symbol id="icon-gouwuche" viewBox="0 0 1024 1024"><path d="M973.4229333333333 226.58453333333335c-16.254933333333334-21.165866666666666-41.973333333333336-37.257600000000004-70.5408-37.257600000000004H191.6544l-7.354666666666666-56.0096c-5.377066666666667-41.2928-40.75306666666667-74.14506666666666-86.0224-74.14506666666666H57.89440000000002c-11.965866666666667 0-21.668266666666668 9.922133333333333-21.668266666666668 21.898666666666667 0 11.977599999999999 9.7024 21.9008 21.668266666666668 21.9008h40.382933333333334c17.901866666666667 0 39.923199999999994 10.1344 43.034666666666666 34.048l82.752 633.2341333333334c5.5040000000000004 42.2208 41.66933333333333 68.58133333333333 86.02133333333333 68.58133333333333h549.6650666666667c11.978666666666667 0 21.668266666666668-9.296 21.668266666666668-21.27466666666667 0-11.977599999999999-9.689599999999999-21.2736-21.668266666666668-21.2736H310.0853333333333c-22.6464 0-40.35306666666667-12.567466666666666-43.041066666666666-33.24693333333333l-6.978133333333333-53.101866666666666h547.5594666666666c40.35946666666667 0 74.09173333333334-22.112000000000002 83.91573333333334-59.019733333333335l95.25653333333332-351.8197333333334c6.686933333333333-25.061333333333334 1.8197333333333332-52.750933333333336-13.374933333333333-72.51413333333333z m-28.4896 61.300266666666666L849.6533333333333 640.4768c-4.781866666666666 17.966933333333333-21.268266666666666 25.653333333333332-42.02773333333334 25.653333333333332h-553.312l-56.90026666666667-433.0048h705.4698666666667c15.005866666666666 0 28.192 8.701866666666666 36.165333333333336 19.096533333333333 7.026133333333333 9.138133333333334 9.101866666666666 23.5808 5.8848 35.66293333333333zM388.2357333333333 922.4362666666666c0 26.0672-21.134933333333333 47.19466666666666-47.196799999999996 47.19466666666666-26.062933333333334 0-47.19786666666666-21.127466666666663-47.19786666666666-47.19466666666666 0-26.063999999999997 21.134933333333333-47.19253333333334 47.19786666666666-47.19253333333334 26.061866666666667 0 47.196799999999996 21.1296 47.196799999999996 47.19253333333334z m453.1338666666666 0c0 26.0672-21.1296 47.19466666666666-47.19786666666666 47.19466666666666-26.062933333333334 0-47.1904-21.127466666666663-47.1904-47.19466666666666 0-26.063999999999997 21.128533333333333-47.19253333333334 47.1904-47.19253333333334 26.069333333333333 0 47.19786666666666 21.1296 47.19786666666666 47.19253333333334z m0 0"  ></path></symbol><symbol id="icon-sousuo" viewBox="0 0 1024 1024"><path d="M926.72 870.4L768 714.666667a375.04 375.04 0 0 0-19.626667-517.973334 394.24 394.24 0 0 0-549.12 0 375.04 375.04 0 0 0 0 538.453334A395.093333 395.093333 0 0 0 708.266667 768l160.426666 157.44A42.666667 42.666667 0 0 0 896 938.666667a42.666667 42.666667 0 0 0 29.013333-11.52 40.106667 40.106667 0 0 0 1.706667-56.746667z m-759.466667-404.48a303.786667 303.786667 0 0 1 306.773334-298.666667 303.786667 303.786667 0 0 1 306.346666 298.666667 303.786667 303.786667 0 0 1-306.346666 298.666667 303.786667 303.786667 0 0 1-306.773334-298.666667z"  ></path></symbol><symbol id="icon-ICONbiaozhun_fuzhi-" viewBox="0 0 1024 1024"><path d="M512 988.16a448 448 0 1 1 448-448 448 448 0 0 1-448 448z m0-832a384 384 0 1 0 384 384 384 384 0 0 0-384-384z"  ></path><path d="M434.88 800a32 32 0 0 1-22.4-9.28 32 32 0 0 1 0-45.12l203.52-203.84-203.52-203.52a32 32 0 0 1 0-45.44 32 32 0 0 1 45.12 0l226.24 226.56a32 32 0 0 1 9.28 22.4 32 32 0 0 1-9.28 22.72l-226.24 224.64a32 32 0 0 1-22.72 10.88z"  ></path></symbol><symbol id="icon-htmal5icon22-copy" viewBox="0 0 1024 1024"><path d="M365.624235 692.484607 165.695786 492.556159 99.05297 559.198975 365.624235 825.77024 936.850128 254.54537 870.207311 187.902554Z" fill="#b4282d" ></path></symbol></svg>'; const script = (function () { const scripts = document.getElementsByTagName('script'); return scripts[scripts.length - 1]; }()); const shouldInjectCss = script.getAttribute('data-injectcss'); const ready = function (fn) {
    if (document.addEventListener) { if (~['complete', 'loaded', 'interactive'].indexOf(document.readyState)) { setTimeout(fn, 0); } else { var loadFn = function () { document.removeEventListener('DOMContentLoaded', loadFn, false); fn(); }; document.addEventListener('DOMContentLoaded', loadFn, false); } } else if (document.attachEvent) { IEContentLoaded(window, fn); } function IEContentLoaded(w, fn) {
      let d = w.document,
        done = false,
        init = function () { if (!done) { done = true; fn(); } }; var polling = function () { try { d.documentElement.doScroll('left'); } catch (e) { setTimeout(polling, 50); return; }init(); }; polling(); d.onreadystatechange = function () { if (d.readyState == 'complete') { d.onreadystatechange = null; init(); } };
    }
  }; const before = function (el, target) { target.parentNode.insertBefore(el, target); }; const prepend = function (el, target) { if (target.firstChild) { before(el, target.firstChild); } else { target.appendChild(el); } }; function appendSvg() {
    let div,
      svg; div = document.createElement('div'); div.innerHTML = svgSprite; svgSprite = null; svg = div.getElementsByTagName('svg')[0]; if (svg) { svg.setAttribute('aria-hidden', 'true'); svg.style.position = 'absolute'; svg.style.width = 0; svg.style.height = 0; svg.style.overflow = 'hidden'; prepend(svg, document.body); }
  } if (shouldInjectCss && !window.__iconfont__svg__cssinject__) { window.__iconfont__svg__cssinject__ = true; try { document.write('<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'); } catch (e) { console && console.log(e); } }ready(appendSvg);
}(window));