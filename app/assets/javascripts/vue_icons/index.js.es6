//= require vue
/* global Vue, gl */
/* eslint-disable no-param-reassign */

((gl) => {
  gl.VueRunningIcon = Vue.extend({
    template: `
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
        <g fill="#2D9FD8" fill-rule="evenodd">
          <path d="M12.5,7 C12.5,3.96243388 10.0375661,1.5 7,1.5 C3.96243388,1.5 1.5,3.96243388 1.5,7 C1.5,10.0375661 3.96243388,12.5 7,12.5 C10.0375661,12.5 12.5,10.0375661 12.5,7 Z M0,7 C0,3.13400675 3.13400675,0 7,0 C10.8659932,0 14,3.13400675 14,7 C14,10.8659932 10.8659932,14 7,14 C3.13400675,14 0,10.8659932 0,7 Z"></path>
          <path d="M7,3 C9.209139,3 11,4.790861 11,7 C11,9.209139 9.209139,11 7,11 C5.65802855,11 4.47040669,10.3391508 3.74481446,9.32513253 L7,7 L7,3 L7,3 Z"></path>
        </g>
      </svg>
    `,
  });

  gl.VuePendingIcon = Vue.extend({
    template: `
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
        <g fill="#E75E40" fill-rule="evenodd">
          <path d="M12.5,7 C12.5,3.96243388 10.0375661,1.5 7,1.5 C3.96243388,1.5 1.5,3.96243388 1.5,7 C1.5,10.0375661 3.96243388,12.5 7,12.5 C10.0375661,12.5 12.5,10.0375661 12.5,7 Z M0,7 C0,3.13400675 3.13400675,0 7,0 C10.8659932,0 14,3.13400675 14,7 C14,10.8659932 10.8659932,14 7,14 C3.13400675,14 0,10.8659932 0,7 Z"/>
          <path d="M4.69999981,5.30065012 C4.69999981,5.13460564 4.83842754,5 5.00354719,5 L5.89645243,5 C6.06409702,5 6.19999981,5.13308716 6.19999981,5.30065012 L6.19999981,8.69934988 C6.19999981,8.86539436 6.06157207,9 5.89645243,9 L5.00354719,9 C4.8359026,9 4.69999981,8.86691284 4.69999981,8.69934988 L4.69999981,5.30065012 Z M7.69999981,5.30065012 C7.69999981,5.13460564 7.83842754,5 8.00354719,5 L8.89645243,5 C9.06409702,5 9.19999981,5.13308716 9.19999981,5.30065012 L9.19999981,8.69934988 C9.19999981,8.86539436 9.06157207,9 8.89645243,9 L8.00354719,9 C7.8359026,9 7.69999981,8.86691284 7.69999981,8.69934988 L7.69999981,5.30065012 Z"/>
        </g>
      </svg>
    `,
  });

  gl.VueSuccessIcon = Vue.extend({
    template: `
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
        <g fill="#31AF64" fill-rule="evenodd">
          <path d="M12.5,7 C12.5,3.96243388 10.0375661,1.5 7,1.5 C3.96243388,1.5 1.5,3.96243388 1.5,7 C1.5,10.0375661 3.96243388,12.5 7,12.5 C10.0375661,12.5 12.5,10.0375661 12.5,7 Z M0,7 C0,3.13400675 3.13400675,0 7,0 C10.8659932,0 14,3.13400675 14,7 C14,10.8659932 10.8659932,14 7,14 C3.13400675,14 0,10.8659932 0,7 Z"/>
          <path d="M7.29166667,7.875 L5.54840803,7.875 C5.38293028,7.875 5.25,8.00712771 5.25,8.17011551 L5.25,9.03821782 C5.25,9.19875081 5.38360183,9.33333333 5.54840803,9.33333333 L8.24853534,9.33333333 C8.52035522,9.33333333 8.75,9.11228506 8.75,8.83960819 L8.75,8.46475969 L8.75,4.07392947 C8.75,3.92144267 8.61787229,3.79166667 8.45488449,3.79166667 L7.58678218,3.79166667 C7.42624919,3.79166667 7.29166667,3.91804003 7.29166667,4.07392947 L7.29166667,7.875 Z" transform="rotate(45 7 6.563)"/>
        </g>
      </svg>
    `,
  });

  gl.VueFailedIcon = Vue.extend({
    template: `
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
        <g fill="#D22852" fill-rule="evenodd">
          <path d="M12.5,7 C12.5,3.96243388 10.0375661,1.5 7,1.5 C3.96243388,1.5 1.5,3.96243388 1.5,7 C1.5,10.0375661 3.96243388,12.5 7,12.5 C10.0375661,12.5 12.5,10.0375661 12.5,7 Z M0,7 C0,3.13400675 3.13400675,0 7,0 C10.8659932,0 14,3.13400675 14,7 C14,10.8659932 10.8659932,14 7,14 C3.13400675,14 0,10.8659932 0,7 Z"/>
          <path d="M7.72916667,6.27083333 L7.72916667,4.28939247 C7.72916667,4.12531853 7.59703895,4 7.43405116,4 L6.56594884,4 C6.40541585,4 6.27083333,4.12956542 6.27083333,4.28939247 L6.27083333,6.27083333 L4.28939247,6.27083333 C4.12531853,6.27083333 4,6.40296105 4,6.56594884 L4,7.43405116 C4,7.59458415 4.12956542,7.72916667 4.28939247,7.72916667 L6.27083333,7.72916667 L6.27083333,9.71060753 C6.27083333,9.87468147 6.40296105,10 6.56594884,10 L7.43405116,10 C7.59458415,10 7.72916667,9.87043458 7.72916667,9.71060753 L7.72916667,7.72916667 L9.71060753,7.72916667 C9.87468147,7.72916667 10,7.59703895 10,7.43405116 L10,6.56594884 C10,6.40541585 9.87043458,6.27083333 9.71060753,6.27083333 L7.72916667,6.27083333 Z" transform="rotate(-45 7 7)"/>
        </g>
      </svg>
    `,
  });

  gl.VueCreatedIcon = Vue.extend({
    template: `
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" class="ci-status-icon-created" viewBox="0 0 14 14" enable-background="new 0 0 14 14">
        <path d="M12.5,7 C12.5,4 10,1.5 7,1.5 C4,1.5 1.5,4 1.5,7 C1.5,10 4,12.5 7,12.5 C10,12.5 12.5,10 12.5,7 L12.5,7 Z M0,7 C0,3.1 3.1,0 7,0 C10.9,0 14,3.1 14,7 C14,10.9 10.9,14 7,14 C3.1,14 0,10.9 0,7 L0,7 Z"></path>
        <circle cx="7" cy="7" r="3.25"></circle>
      </svg>
    `,
  });

  gl.VueCanceledIcon = Vue.extend({
    template: `
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" class="ci-status-icon-canceled" viewBox="0 0 14 14">
        <g fill="#5C5C5C" fill-rule="evenodd">
          <path d="M12.5,7 C12.5,3.96243388 10.0375661,1.5 7,1.5 C3.96243388,1.5 1.5,3.96243388 1.5,7 C1.5,10.0375661 3.96243388,12.5 7,12.5 C10.0375661,12.5 12.5,10.0375661 12.5,7 Z M0,7 C0,3.13400675 3.13400675,0 7,0 C10.8659932,0 14,3.13400675 14,7 C14,10.8659932 10.8659932,14 7,14 C3.13400675,14 0,10.8659932 0,7 Z"></path>
          <rect width="8" height="2" x="3" y="6" transform="rotate(45 7 7)" rx=".5"></rect>
        </g>
      </svg>
    `,
  });
})(window.gl || (window.gl = {}));
