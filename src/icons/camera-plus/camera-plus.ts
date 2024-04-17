import {html} from "lit";
import {TapIcon} from "../../icon";

export class CameraPlusIcon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_24_1283)">
          <path d="M11 18.5C12.25 18.5 13.3125 18.0625 14.1875 17.1875C15.0625 16.3125 15.5 15.25 15.5 14C15.5 12.75 15.0625 11.6875 14.1875 10.8125C13.3125 9.9375 12.25 9.5 11 9.5C9.75 9.5 8.6875 9.9375 7.8125 10.8125C6.9375 11.6875 6.5 12.75 6.5 14C6.5 15.25 6.9375 16.3125 7.8125 17.1875C8.6875 18.0625 9.75 18.5 11 18.5ZM3 22C2.45 22 1.97917 21.8042 1.5875 21.4125C1.19583 21.0208 1 20.55 1 20V8C1 7.45 1.19583 6.97917 1.5875 6.5875C1.97917 6.19583 2.45 6 3 6H6.15L7.4 4.65C7.58333 4.45 7.80417 4.29167 8.0625 4.175C8.32083 4.05833 8.59167 4 8.875 4H13C13.2833 4 13.5208 4.09583 13.7125 4.2875C13.9042 4.47917 14 4.71667 14 5V8H3V20H19V11H20C20.1333 11 20.2625 11.025 20.3875 11.075C20.5125 11.125 20.6208 11.1958 20.7125 11.2875C20.8042 11.3792 20.875 11.4875 20.925 11.6125C20.975 11.7375 21 11.8667 21 12V20C21 20.55 20.8042 21.0208 20.4125 21.4125C20.0208 21.8042 19.55 22 19 22H3ZM19 6H18C17.7167 6 17.4792 5.90417 17.2875 5.7125C17.0958 5.52083 17 5.28333 17 5C17 4.71667 17.0958 4.47917 17.2875 4.2875C17.4792 4.09583 17.7167 4 18 4H19V3C19 2.71667 19.0958 2.47917 19.2875 2.2875C19.4792 2.09583 19.7167 2 20 2C20.2833 2 20.5208 2.09583 20.7125 2.2875C20.9042 2.47917 21 2.71667 21 3V4H22C22.2833 4 22.5208 4.09583 22.7125 4.2875C22.9042 4.47917 23 4.71667 23 5C23 5.28333 22.9042 5.52083 22.7125 5.7125C22.5208 5.90417 22.2833 6 22 6H21V7C21 7.28333 20.9042 7.52083 20.7125 7.7125C20.5208 7.90417 20.2833 8 20 8C19.7167 8 19.4792 7.90417 19.2875 7.7125C19.0958 7.52083 19 7.28333 19 7V6Z" fill="currentColor"/>
        </g>
        <defs>
          <clipPath id="clip0_24_1283">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      `);
  }
}