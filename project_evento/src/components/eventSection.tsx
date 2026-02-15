import { EventoEvent } from "@prisma/client";



export default function eventSection({props}: {props : {event: EventoEvent, title: string, content: string}}) {
  const { event, title, content } = props;
  return (
    <section
          id="aboutSection"
          className="mb-12"
        >
          <h2 className="text-2xl mb-8">{title}</h2>
          <p className="text-lg leading-8 text-white/75 max-w-4xl mx-auto">
            {content}
          </p>
        </section>
  )
}
