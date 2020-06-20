import React, { Component } from 'react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faArrowRight } from '@fortawesome/free-solid-svg-icons'


class Calendar extends Component {
    constructor() {
        super()
        this.state = {
            date: moment(),
            days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        }
    }

    getFirstDayOfMonth() {
        const { date } = this.state
        const firstDayOfMonth = moment(date).startOf('month').format('DD')
        return firstDayOfMonth
    }

    getLastDayOfMonth() {
        const { date } = this.state
        const lastDayOfMonth = moment(date).endOf('month').format('DD')
        return lastDayOfMonth
    }

    getMonthDays() {
        const { date } = this.state
        let monthDays = []
        const noDaysInMonth = date.daysInMonth()
        for (let day = 1; day <= noDaysInMonth; day++) {
            monthDays.push(
                <td key={day}>{day}</td>
            )
        }
        return monthDays
    }

    getCalendarGaps() {
        let gaps = []
        const firstDay = this.getFirstDayOfMonth()
        for (let i = 0; i < firstDay; i++) {
            gaps.push(
                <td>{" "}</td>
            )
        }
        return gaps
    }

    renderWeekdays() {
        const { days } = this.state
        return days.map(day => {
            return (
                <th key={day} className="p-2 text-white">
                    {day}
                </th>
            )
        })
    }

    renderMonth() {
        const calendarDays = this.getMonthDays()
        const calendarGaps = this.getCalendarGaps()
        const calendarMonth = [...calendarGaps, ...calendarDays]

        let rows = []
        let cells = []

        calendarMonth.forEach((row, key) => {
            if (key % 7 !== 0) {
                cells.push(row)
            } else {
                rows.push(cells)
                cells = []
                cells.push(row)
            }
            if (key === calendarMonth.length - 1) {
                rows.push(cells)
            }
        })

        return rows.map((day, key) => {
            return <tr className="text-white text-center">{day}</tr>
        })
    }

    render() {
        const { date } = this.state
        return (
            <div className="absolute top-150">
                <div className="w-full bg-black p-3 flex items-center justify-between rounded-sm rounded-b-none">
                    <h2 className="text-white pl-2">_.asterisk</h2>
                    <FontAwesomeIcon className="text-white" icon={faTimes} />
                </div>
                <div className="w-full max-w-md bg-black p-4 rounded-sm rounded-t-none">
                    <div className="flex text-white items-center">
                        <FontAwesomeIcon className="text-lime-green" icon={faArrowRight} />
                        <p className="pl-2 text-xl text-cold-blue">~ </p>
                        <p className="pl-2">cal</p>
                    </div>
                    <div className="flex justify-center text-white">
                        {date.format('MMM YYYY')}
                    </div>
                    <div className="flex justify-center">
                        <table>
                            <thead>
                                <tr>
                                    {this.renderWeekdays()}
                                </tr>
                            </thead>
                            <tbody>{this.renderMonth()}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calendar

