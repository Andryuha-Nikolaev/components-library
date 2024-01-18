import React from "react"
import type { ModalConfig } from "@/redux/features/modalSlice"
import Link from "next/link"
import Image from "next/image"

const DefaultModal = ({ image, modalId }: ModalConfig) => {
  return (
    <div>
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
    </div>
  )
}

export default DefaultModal
