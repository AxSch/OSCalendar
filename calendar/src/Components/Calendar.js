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

