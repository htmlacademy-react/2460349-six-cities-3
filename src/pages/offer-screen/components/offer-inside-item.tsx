interface AmenityProps {
  amenity: string;
}

function OfferInsideItem({amenity}: AmenityProps) {
  return (
    <li className="offer__inside-item">
      {amenity}
    </li>
  );
}

export default OfferInsideItem;


