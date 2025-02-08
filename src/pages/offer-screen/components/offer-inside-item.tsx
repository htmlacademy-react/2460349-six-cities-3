function OfferInsideItem({amenity}: {amenity: string}): JSX.Element {
  return (
    <li className="offer__inside-item">
      {amenity}
    </li>
  );
}

export default OfferInsideItem;


