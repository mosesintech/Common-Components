interface CardTypes {
  tilt?: boolean;
}

export default function Card(props: CardTypes) {
  const { tilt } = props;
  return (
    <>
      Card
      {Boolean(tilt)}
    </>
  );
}
