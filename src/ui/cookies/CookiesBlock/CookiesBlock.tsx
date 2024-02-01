import React from "react"
import s from "./CookiesBlock.module.scss"
import RootButton from "@/ui/buttons/RootButton/RootButton"
import RootText from "@/ui/texts/RootText/RootText"

const CookiesBlock = () => {
  return (
    <div className={s["block"]}>
      <div className={s["content"]}>
        <RootText>
          Продолжая использовать наш сайт, вы&nbsp;даете согласие
          на&nbsp;обработку{" "}
          <RootButton
            textDecoration="underline"
            appearance="link"
            role="link"
            link="/cookies-policy"
          >
            файлов cookie
          </RootButton>{" "}
          , которые обеспечивают правильную работу сайта
        </RootText>
        <RootButton className={s["btn"]}>ОК</RootButton>
      </div>
    </div>
  )
}

export default CookiesBlock
