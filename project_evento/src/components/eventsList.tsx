import { EventType } from '@/lib/types'
import React from 'react'

export const EventsList = ({ events } : { events: EventType[] }) => {
  return (
    <section>
        {events.map((event) => (
        <section
          key={event.id}
          
        >
          {event.name}
        </section>
      ))}
    </section>
  )
}
