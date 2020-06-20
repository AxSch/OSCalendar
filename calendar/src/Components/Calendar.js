import React, { Component } from 'react'
import moment from 'moment'


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

    render() {
        const { date } = this.state
        return (
            <div className="absolute top-150">
                <div className="w-full max-w-md bg-black p-4 rounded-sm rounded-t-none">
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
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calendar

