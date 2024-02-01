"use client"

import React, { useState, useRef } from "react"
import classNames from "classnames"
import s from "./PeriodCalendarBlock.module.scss"
import { Calendar } from "primereact/calendar"
import CalendarWrapper from "../../../providers/CalendarLocaleProvider/CalendarLocaleProvider"
import RootText from "@/ui/texts/RootText/RootText"
import CalendarIcon from "@/ui/icons/CalenadarIcon/CalendarIcon"
import CalendarArrow from "@/ui/icons/CalendarArrow/CalendarArrow"
import useClickOutside from "@/hooks/useClickOutside/useClickOutside"

const months = [
  "Янв",
  "Фев",
  "Мар",
  "Апр",
  "Май",
  "Июн",
  "Июл",
  "Авг",
  "Сен",
  "Окт",
  "Ноя",
  "Дек",
]

const PeriodCalendarBlock = () => {
  const currentDate = new Date()
  const newDate = new Date(currentDate)
  newDate.setMonth(currentDate.getMonth() - 9)

  const [startDate, setStartDate] = useState(newDate)
  const [endDate, setEndDate] = useState(new Date())
  const [openCal, setOpenCal] = useState<number>(0)

  const calRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLDivElement>(null)
  const btnRef2 = useRef<HTMLDivElement>(null)

  function formatMonthYear(date: Date) {
    const monthIndex = date.getMonth()
    const year = date.getFullYear()

    const formattedDate = `${months[monthIndex]} ${year}`
    return formattedDate
  }

  const formattedStartDate = formatMonthYear(startDate)
  const formattedEndDate = formatMonthYear(endDate)

  const handleClose = () => {
    setOpenCal(0)
  }

  const calendarToggle = (index: number) => {
    if (openCal === index) {
      handleClose()
    } else {
      setOpenCal(index)
    }
  }

  useClickOutside({
    elementRefs: [calRef, btnRef, btnRef2],
    isOpen: !!openCal,
    onClose: handleClose,
  })

  return (
    <CalendarWrapper>
      <div className={classNames(s["block"], "period-calendar-block")}>
        <div className={classNames(s["inputs"])}>
          <div
            ref={btnRef}
            onClick={() => {
              calendarToggle(1)
            }}
            className={classNames(s["input"])}
          >
            <RootText>{formattedStartDate}</RootText>

            <CalendarIcon />
          </div>
          <RootText fontWeightVariant="bold">—</RootText>
          <div
            ref={btnRef2}
            onClick={() => {
              calendarToggle(2)
            }}
            className={classNames(s["input"])}
          >
            <RootText>{formattedEndDate}</RootText>
            <CalendarIcon />
          </div>
        </div>
        <div ref={calRef} className={classNames(s["calendars"])}>
          <div className={classNames(s["wrap"], openCal === 1 && s["open"])}>
            <Calendar
              panelClassName={s["calendar"]}
              view="month"
              inline
              dateFormat="mm/yy"
              value={startDate}
              readOnlyInput
              locale="ru"
              onChange={(e) => {
                if (e.value instanceof Date) {
                  setStartDate(e.value)
                  setOpenCal(0)
                }
              }}
              maxDate={endDate}
              prevIcon={<CalendarArrow next={false} />}
              nextIcon={<CalendarArrow next />}
            />
          </div>
          <div
            className={classNames(
              s["wrap"],
              s["wrap2"],
              openCal === 2 && s["open"]
            )}
          >
            <Calendar
              panelClassName={s["calendar"]}
              inline
              view="month"
              dateFormat="mm/yy"
              value={endDate}
              readOnlyInput
              locale="ru"
              onChange={(e) => {
                if (e.value instanceof Date) {
                  setEndDate(e.value)
                  setOpenCal(0)
                }
              }}
              minDate={startDate}
              prevIcon={<CalendarArrow next={false} />}
              nextIcon={<CalendarArrow next />}
            />
          </div>
        </div>
      </div>
    </CalendarWrapper>
  )
}

export default PeriodCalendarBlock
