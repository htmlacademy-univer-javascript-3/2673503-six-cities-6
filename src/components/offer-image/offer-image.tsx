interface OfferImageProps {
  src: string;
}

export default function OfferImage({src}: OfferImageProps) {
  return (
    <div className="offer__image-wrapper">
      <img
        className="offer__image"
        src={src}
        alt="Photo studio"
      />
    </div>
  );
}
