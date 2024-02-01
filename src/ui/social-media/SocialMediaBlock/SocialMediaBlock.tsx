import React from "react"
import s from "./SocialMediaBlock.module.scss"
import TgIcon from "../icons/TgIcon"
import VkIcon from "../icons/VkIcon"
import OkIcon from "../icons/OkIcon"
import RutubeIcon from "../icons/RutubeIcon"
import YoutubeIcon from "../icons/YoutubeIcon"
import classNames from "classnames"

const socialMediaArr = [
  { name: "tg", link: "https://t.me/rus_judo", icon: TgIcon },
  { name: "vk", link: "https://vk.com/russianjudofederation", icon: VkIcon },
  { name: "ok", link: "https://ok.ru/group/61065863626881", icon: OkIcon },
  {
    name: "rutube",
    link: "https://rutube.ru/channel/24967149/",
    icon: RutubeIcon,
  },
  {
    name: "youtube",
    link: "https://www.youtube.com/channel/UCLHCtSqUX_mC1I5FTdSvszQ",
    icon: YoutubeIcon,
  },
]

const SocialMediaBlock = ({ variant }: { variant: "header" | "footer" }) => {
  return (
    <div className={classNames(s["wrap"], s[variant])}>
      {socialMediaArr.map((item) => {
        const Icon = item.icon

        return (
          <a
            className={classNames(s["link"], s[variant])}
            href={item.link}
            target="_blank"
            rel="noreferrer noopener"
            key={`social-media-${item.name}`}
          >
            <div
              style={{
                display: "flex",
                scale: variant === "header" ? 1.3 : 1.1,
              }}
            >
              {Icon && <Icon />}
            </div>
          </a>
        )
      })}
    </div>
  )
}

export default SocialMediaBlock
