"use client"

import classNames from "classnames"
import React, { useState } from "react"
import s from "./CalendarBlock.module.scss"
import { Calendar } from "primereact/calendar"
import CalendarArrow from "@/ui/icons/CalendarArrow/CalendarArrow"

const CalendarBlock = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const dateTemplate = (date: { day: number }) => {
    if (date.day > 10 && date.day < 15) {
      return <span className={s["date-template-day"]}>{date.day}</span>
    }

    return date.day
  }

  return (
    <>
      <div className={classNames(s["block"], "main-calendar-block")}>
        <div className={classNames(s["wrap"])}>
          <Calendar
            dateTemplate={dateTemplate}
            panelClassName={s["calendar"]}
            showOtherMonths={false}
            inline={true}
            dateFormat="mm/yy"
            value={selectedDate}
            readOnlyInput
            locale="ru"
            onBlur={(e) => {
              setTimeout(() => {
                e.target.blur()
              }, 100)
            }}
            onChange={(e) => {
              if (e.value instanceof Date) {
                setSelectedDate(e.value)
              }
            }}
            prevIcon={<CalendarArrow next={false} />}
            nextIcon={<CalendarArrow next />}
          />
        </div>
      </div>
    </>
  )
}

export default CalendarBlock
