interface Props {
  good: string;
}

function OfferInsideItem({good}: Props) {
  return (
    <li className="offer__inside-item">
      {good}
    </li>
  );
}

export default OfferInsideItem;


