import React from "react"
import s from "./HeaderButtons.module.scss"
import Link from "next/link"
import classNames from "classnames"

const HeaderButtons = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={s["block"]}>
      <Link
        aria-label="open search"
        href={"/"}
        className={classNames(s["btn"], s["btn-search"])}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2369_19205)">
            <path
              d="M13.809 15.3223C12.089 16.6575 9.92474 17.287 7.75691 17.0827C5.58907 16.8783 3.58058 15.8555 2.14028 14.2224C0.699973 12.5892 -0.0638863 10.4686 0.00418848 8.29207C0.0722632 6.11555 0.967155 4.04678 2.5067 2.50686C4.04652 0.967216 6.11516 0.0722678 8.29154 0.00418875C10.4679 -0.0638903 12.5884 0.700017 14.2215 2.14041C15.8545 3.58081 16.8773 5.58943 17.0816 7.7574C17.2859 9.92537 16.6565 12.0897 15.3214 13.8099L19.6585 18.1474C19.7994 18.2782 19.9023 18.4445 19.9566 18.629C20.0108 18.8134 20.0143 19.009 19.9667 19.1952C19.9191 19.3815 19.8221 19.5514 19.686 19.6871C19.5499 19.8229 19.3798 19.9194 19.1934 19.9665C19.0074 20.0142 18.812 20.0109 18.6277 19.9569C18.4434 19.9029 18.2771 19.8003 18.1462 19.6598L13.809 15.3223ZM14.9789 8.55932C14.9916 7.70839 14.835 6.86343 14.5182 6.07359C14.2013 5.28375 13.7306 4.5648 13.1334 3.95856C12.5361 3.35233 11.8243 2.87091 11.0393 2.5423C10.2544 2.2137 9.41189 2.04448 8.56092 2.04448C7.70994 2.04448 6.86747 2.2137 6.08249 2.5423C5.29751 2.87091 4.5857 3.35233 3.98848 3.95856C3.39125 4.5648 2.92053 5.28375 2.60368 6.07359C2.28684 6.86343 2.13021 7.70839 2.14289 8.55932C2.16803 10.245 2.85527 11.8532 4.05615 13.0364C5.25702 14.2195 6.87514 14.8828 8.56092 14.8828C10.2467 14.8828 11.8648 14.2195 13.0657 13.0364C14.2666 11.8532 14.9538 10.245 14.9789 8.55932Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_2369_19205">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Link>
      <a
        aria-label="to personal cabinet"
        href="https://cabinet.judo.ru/"
        target="_self"
        className={classNames(s["btn"], s["btn-lk"])}
      >
        <svg
          width="20"
          height="22"
          viewBox="0 0 20 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.3335 19.3333C2.3335 19.5985 2.43885 19.8529 2.62639 20.0404C2.81393 20.228 3.06828 20.3333 3.3335 20.3333H16.6668C17.2191 20.3333 17.6668 19.8856 17.6668 19.3333C17.6668 17.3399 16.852 15.434 15.4113 14.0332C13.9715 12.6334 12.0245 11.8518 10.0002 11.8518C7.97578 11.8518 6.02884 12.6334 4.58904 14.0332C3.14828 15.434 2.3335 17.3399 2.3335 19.3333ZM13.391 9.70627C14.2959 8.82646 14.8097 7.6271 14.8097 6.37036C14.8097 5.11362 14.2959 3.91426 13.391 3.03445C12.487 2.15558 11.2668 1.66666 10.0002 1.66666C8.73355 1.66666 7.51333 2.15558 6.60934 3.03445C5.7044 3.91426 5.19064 5.11363 5.19064 6.37036C5.19064 7.6271 5.7044 8.82646 6.60934 9.70627C7.51333 10.5851 8.73355 11.0741 10.0002 11.0741C11.2668 11.0741 12.487 10.5851 13.391 9.70627Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
      <div className={classNames(s["btn"], s["btn-burger"])}>{children}</div>
    </div>
  )
}

export default HeaderButtons
