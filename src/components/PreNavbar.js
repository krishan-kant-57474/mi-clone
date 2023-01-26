import React from "react";
import "../Styles/PreNavbar.css";

const carticon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
    <path d="M7 22q-.825 0-1.412-.587Q5 20.825 5 20q0-.825.588-1.413Q6.175 18 7 18t1.412.587Q9 19.175 9 20q0 .825-.588 1.413Q7.825 22 7 22Zm10 0q-.825 0-1.412-.587Q15 20.825 15 20q0-.825.588-1.413Q16.175 18 17 18t1.413.587Q19 19.175 19 20q0 .825-.587 1.413Q17.825 22 17 22ZM6.15 6l2.4 5h7l2.75-5ZM5.2 4h14.75q.675 0 .925.5t-.025 1.05l-3.55 6.4q-.275.5-.725.775-.45.275-1.025.275H8.1L7 15h12v2H7q-1.125 0-1.7-.988-.575-.987-.05-1.962L6.6 11.6 3 4H1V2h3.25Zm3.35 7h7Z" />
  </svg>
);

const PreNavbar = () => {
  return (
    <div className="prenav">
      <div>
        <a href="https://www.mi.com/in/">MI INDIA</a>
        <span>|</span>

        <a href="https://in.event.mi.com/in/install-mi-store">
          GET MI STORE APP
        </a>
        <span>|</span>
        <a href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">
          ONLINE HELP
        </a>
        <span>|</span>
        <a href="https://www.mi.com/in/service/authorized_stores/">
          RETAIL STORE
        </a>
        <span>|</span>
      </div>
      <div>
        <a href="https://store.mi.com/in/site/login">SING IN</a>
        <span>|</span>
        <a href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">
          SING UP
        </a>
        <span>|</span>
        <a href="https://store.mi.com/in/cart">{carticon}CART(0)</a>
        <span>|</span>
      </div>
    </div>
  );
};

export default PreNavbar;
