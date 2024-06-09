import { html } from 'lit';
import { TapIcon } from '../../icon';

export class UfoIcon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_24_1534)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13 19V22H11V19H13ZM8 17V20H6V17H8ZM18 17V20H16V17H18ZM12 2C13.3543 1.99985 14.6639 2.48464 15.6917 3.36659C16.7195 4.24855 17.3975 5.46936 17.603 6.808C20.244 7.663 22 9.145 22 11C22 13.983 17.462 16 12 16C6.538 16 2 13.983 2 11C2 9.145 3.756 7.663 6.397 6.808C6.60288 5.46954 7.28101 4.24896 8.3087 3.36708C9.3364 2.4852 10.6458 2.00026 12 2ZM17.411 8.86L17.334 9.008C16.568 10.368 14.55 11 12 11C9.34 11 7.275 10.327 6.583 8.863C4.988 9.443 4 10.24 4 11C4 12.435 7.52 14 12 14C16.48 14 20 12.435 20 11C20 10.239 19.01 9.441 17.411 8.86ZM12 4C11.5179 4.00013 11.0405 4.0953 10.5952 4.28007C10.1499 4.46484 9.74543 4.73558 9.40486 5.07681C9.06428 5.41803 8.79431 5.82306 8.61039 6.26871C8.42647 6.71435 8.33221 7.19189 8.333 7.674C8.328 8.406 9.696 9 12 9C14.29 9 15.67 8.398 15.667 7.667C15.667 6.69445 15.2807 5.76174 14.593 5.07404C13.9053 4.38634 12.9725 4 12 4Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_24_1534">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    `);
  }
}
