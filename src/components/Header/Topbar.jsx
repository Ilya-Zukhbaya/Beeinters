import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '../Menu';

export const Topbar = () => {
  const items = [
    { value: 'FAQ', href: './FAQ', icon: './pictures/topbar/info.svg' },
    { value: 'Поддержка', href: './help', icon: './pictures/topbar/help.svg' },
    { value: 'Настройки', href: './settings', icon: './pictures/topbar/settings.svg' },
    { value: '15 готовых дз', href: './hometasks', icon: './pictures/topbar/done.svg' },
    { value: '18 лекций', href: './lectures-done', icon: './pictures/topbar/task.svg' },
    { value: '1200 часов', href: './hours-done', icon: './pictures/topbar/time.svg' },
  ];

  const secItems = [
    { value: 'Программа', href: './programm', icon: './pictures/topbar/info.svg' },
    { value: 'Менторы', href: '', icon: './pictures/topbar/help.svg' },
    { value: 'Лекции', href: 'lectures-js', icon: './pictures/topbar/settings.svg' },
    { value: 'Правила поступления', href: '', icon: './pictures/topbar/done.svg' },
    { value: 'Новости', href: 'news', icon: './pictures/topbar/task.svg' },
    { value: 'Обратная связь', href: 'feedback', icon: './pictures/topbar/time.svg' },
  ];

  const [menuActive, setMenuActive] = React.useState(false);
  const [leftMenu, setLeftMenu] = React.useState(false);

  return (
    <div className="topbar-container">
      <Link to="/">
        <div className="topbar">
          <div className="topbar__logo-container">
            <svg
              width="41"
              height="9"
              viewBox="0 0 41 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M33.4306 2.59464C34.1826 2.65996 34.8493 2.11051 34.9152 1.3651C34.9191 1.34205 34.9191 1.31899 34.9191 1.2921H34.1283C34.0469 1.60716 33.8531 1.7647 33.4306 1.7647C33.008 1.7647 32.7871 1.60716 32.7212 1.2921H31.9304C31.9614 2.04519 32.6088 2.63306 33.3685 2.59848C33.3879 2.59848 33.4073 2.59464 33.4306 2.59464Z"
                fill="white"
              />
              <path
                d="M17.1692 6.23331V3.00192H16.173V7.7126H17.2118L19.2198 4.42742V7.7126H20.216V3.00192H19.1772L17.1692 6.23331Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.223 4.05087C11.5796 3.40152 12.2851 3.00577 13.0332 3.04035C13.0875 3.04035 13.1379 3.04035 13.1844 3.04419C14.3589 3.12103 15.2505 4.12388 15.173 5.2881C15.173 6.64444 14.3279 7.80097 12.7696 7.80097C11.1726 7.80097 10.312 6.62907 10.312 4.80013C10.312 2.70991 10.8159 1.38047 12.6068 1.14224L14.6845 0.865597L14.7659 1.91839L12.7735 2.18351C11.4943 2.34873 11.2733 2.98271 11.223 4.05087ZM11.3392 5.18436C11.3392 6.13341 11.8703 6.76355 12.7735 6.76355C13.6767 6.76355 14.1535 6.18336 14.1535 5.2881C14.1535 4.39284 13.5526 4.03935 12.7735 4.03935C12.037 4.03935 11.5292 4.32752 11.3392 4.69638V5.18436Z"
                fill="white"
              />
              <path
                d="M39.6561 3.00192V4.76554H37.714V3.00192H36.7178V7.7126H37.714V5.73765H39.6561V7.7126H40.6523V3.00192H39.6561Z"
                fill="white"
              />
              <path
                d="M32.4188 6.23331V3.00192H31.4226V7.7126H32.4615L34.4694 4.42742V7.7126H35.4656V3.00192H34.4268L32.4188 6.23331Z"
                fill="white"
              />
              <path
                d="M22.0108 5.88366C21.9022 6.41005 21.7511 6.63291 21.4487 6.63291C21.3247 6.63675 21.2006 6.62522 21.0804 6.59449V7.6857C21.2355 7.75486 21.4022 7.7856 21.5727 7.77792C22.0534 7.78944 22.4837 7.48974 22.6387 7.04019C22.7628 6.67133 22.8403 6.28326 22.8713 5.89518C22.9372 5.26504 22.9682 4.63491 22.9682 4.00092H24.2939V7.7126H25.2902V3.00192H22.1348C22.1542 3.96634 22.1116 4.92692 22.0108 5.88366Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30.0078 4.56959L29.9923 6.43695C29.9923 6.72512 30.1163 6.84424 30.4342 6.84808H30.5156V7.75486H30.2404C29.5659 7.75486 29.1783 7.50511 29.1279 6.93645C28.8875 7.47053 28.3448 7.80866 27.7556 7.79329C26.8292 7.79329 26.364 7.27842 26.364 6.47537C26.364 5.69923 26.992 5.33036 27.8254 4.99993L29.0465 4.52348C28.9961 4.03935 28.6666 3.89334 28.1782 3.89334C27.7014 3.89334 27.3447 4.03935 27.2905 4.47353H26.333V4.45816C26.4067 3.52064 27.2323 2.82518 28.1782 2.89818C29.2713 2.89818 30.0233 3.38615 30.0078 4.56959ZM27.3137 6.27942C27.3137 6.6867 27.6548 6.80581 28.12 6.80581C28.4611 6.82502 28.7945 6.70207 29.0348 6.46385L29.0465 5.1882L28.0929 5.56859C27.6006 5.76839 27.3137 5.92592 27.3137 6.27942Z"
                fill="white"
              />
              <path
                d="M4.09429 8.51948C6.20303 8.55022 7.93576 6.83271 7.96677 4.68486C7.93188 2.53316 6.19915 0.815647 4.09429 0.846386C1.98555 0.815647 0.252813 2.53316 0.221802 4.68486C0.252813 6.83271 1.98555 8.55022 4.09429 8.51948Z"
                fill="#FFC800"
              />
              <path
                d="M5.75725 7.54354C4.44316 8.29663 3.01666 8.43111 2.10571 7.98156C3.31514 8.69623 4.80754 8.70392 6.02471 8.00846C7.23026 7.33221 7.97452 6.03351 7.95902 4.62722C7.90475 5.63391 7.07133 6.79044 5.75725 7.54354Z"
                fill="black"
              />
              <path
                d="M4.58271 1.13072C4.85018 1.58795 4.20671 2.45247 3.14458 3.05956C2.08246 3.66664 1.00871 3.7896 0.741242 3.33236C0.729613 3.30931 0.717983 3.28625 0.710231 3.2632C0.659838 2.98271 0.737365 2.69838 0.923431 2.48321C0.954441 2.4371 0.989329 2.39484 1.02422 2.34873C1.33432 1.94913 1.72196 1.61485 2.15999 1.3651C2.59802 1.10766 3.08256 0.946286 3.58261 0.880966C3.64076 0.873282 3.69503 0.865597 3.7493 0.861755C4.02839 0.811805 4.31525 0.884808 4.5362 1.06924C4.5517 1.08845 4.57109 1.10766 4.58271 1.13072Z"
                fill="black"
              />
              <path
                d="M6.23017 1.62253C6.69534 2.42173 5.75726 3.82034 4.13306 4.75017C2.50887 5.68001 0.814896 5.78376 0.353609 4.98456C0.276082 4.85008 0.233442 4.70022 0.225689 4.54269C0.206308 5.09214 0.303217 5.63775 0.516416 6.14493C0.547427 6.22178 0.582315 6.29863 0.621078 6.37547L0.624955 6.387C0.772256 6.62907 0.98158 6.82502 1.22967 6.95182C2.14061 7.43595 3.67953 7.27073 5.12153 6.44464C6.55966 5.62238 7.47448 4.38131 7.50937 3.35926C7.52488 3.07877 7.45898 2.80212 7.31943 2.56006C7.26516 2.48321 7.21089 2.40636 7.15275 2.33336C6.8155 1.90302 6.39298 1.54953 5.91231 1.29978C6.04411 1.38047 6.15265 1.49189 6.23017 1.62253Z"
                fill="black"
              />
              <path
                d="M4.09429 8.51948C6.20303 8.55022 7.93576 6.83271 7.96677 4.68486C7.93188 2.53316 6.19915 0.815647 4.09429 0.846386C1.98555 0.815647 0.252813 2.53316 0.221802 4.68486C0.252813 6.83271 1.98555 8.55022 4.09429 8.51948Z"
                fill="url(#paint0_radial_0_282)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_0_282"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(4.09349 4.6843) scale(3.87006 3.83456)">
                  <stop offset="0.5" stopColor="white" stopOpacity="0.01" />
                  <stop offset="1" stopColor="white" stopOpacity="0.35" />
                </radialGradient>
              </defs>
            </svg>
            <p>2022</p>
          </div>
          <p className="topbar__logo">BEEINTERS</p>
        </div>
      </Link>
      <nav className="nav-container">
        <div className="burger-btn leftvar__burger-btn" onClick={() => setLeftMenu(!leftMenu)}>
          <button>
            <img
              src="./pictures/leftbar/menu.svg"
              alt="leftbar-menu"
              className="topbar__leftMenu-img"
              width={30}
            />
          </button>
        </div>
      </nav>
      <nav className="nav-container">
        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
          <button>MENU</button>
        </div>
      </nav>
      <div className="topbar__info-container">
        <ul>
          <li>FAQ</li>
          <li>Поддержка</li>
          <li>Настройки</li>
          <li className="border">|</li>
        </ul>
        <ul>
          <li className="topbar__sec-ul">15 готовых дз</li>
          <li className="topbar__sec-ul">18 лекций</li>
          <li className="topbar__sec-ul red-box-container">
            <div>
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  id="icon-1"
                  d="M6.98072 4.11561C6.94697 4.0452 6.87427 4.00002 6.7942 4.00002H4.3545L6.76228 0.307008C6.80242 0.245415 6.80489 0.167414 6.76867 0.103617C6.73243 0.0396095 6.66324 0 6.5883 0H3.2942C3.21617 0 3.14492 0.042797 3.10994 0.110602L0.0217095 6.11061C-0.0102102 6.17242 -0.00671186 6.24601 0.0307571 6.305C0.0684431 6.364 0.134526 6.4 0.205966 6.4H2.32304L0.0161362 11.7224C-0.0231905 11.8134 0.0118175 11.919 0.098481 11.9706C0.131824 11.9904 0.168883 12 0.205749 12C0.264835 12 0.323101 11.9754 0.363466 11.929L6.9517 4.32899C7.00335 4.26941 7.01448 4.1862 6.98072 4.11561Z"
                  fill="white"
                />
              </svg>
            </div>
            <span>1200</span>часов
          </li>
        </ul>
      </div>
      <div className="topbar__rightside">
        <img
          className="topbar__rightside__avatar"
          src="./pictures/topbar/avatar.png"
          alt="user avatar"
        />
        <div className="topbar__rightside__user-description">
          <p>Илья Зухбая</p>
          <p>
            <span></span>Online
          </p>
        </div>
        <div className="PRO">
          <p>PRO</p>
        </div>
      </div>
      <Menu header={'Top-Menu'} items={items} active={menuActive} setActive={setMenuActive} />
    </div>
  );
};
