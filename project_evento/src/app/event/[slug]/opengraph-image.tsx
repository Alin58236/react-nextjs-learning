import { ImageResponse } from "next/og";

//Image Metadata for Sharing on Social Media
export const alt = "Evento";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  return new ImageResponse(
    <section>
      <h1>{params.slug}</h1>
      <p>Evento - Browse vents around you</p>
    </section>,
  );
}
