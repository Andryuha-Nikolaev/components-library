import React from "react"
import type { ModalConfig } from "@/redux/features/modalSlice"
import Link from "next/link"
import Image from "next/image"
import RootButton from "@/ui/buttons/RootButton/RootButton"
import { useAppDispatch } from "@/redux/hooks"
import { openModal } from "@/redux/features/modalSlice"
import RootText from "@/ui/texts/RootText/RootText"
import ModalContentWrapper from "../ModalContentWrapper/ModalContentWrapper"

const DefaultModal = ({ image, modalId }: ModalConfig) => {
  const dispatch = useAppDispatch()

  return (
    <ModalContentWrapper>
      <RootText tag="h2">{modalId}</RootText>
      <RootText tag="p">{modalId}</RootText>
      DefaultModal <Link href={"/"}>home</Link>
      <Link href={"/ui/buttons"}>ui</Link>
      {image && (
        <div
          style={{
            display: "flex",
          }}
        >
          <Image
            quality={80}
            width={600}
            height={200}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            src={image}
            // src="https://specialgamesclub.ru/wp-content/uploads/2023/07/Gothic-2-Original-Game-Wallpaper.jpg"
            alt=""
          ></Image>
        </div>
      )}
      <RootButton
        onClick={() => {
          dispatch(
            openModal({
              modalId: "alt",
            })
          )
        }}
        styleVariant="2"
      >
        Открыть модалку alt
      </RootButton>
    </ModalContentWrapper>
  )
}

export default DefaultModal
