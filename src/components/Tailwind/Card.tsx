interface CardTypes {
  tilt?: boolean;
}

export default function Card(props: CardTypes) {
  const { tilt } = props;
  return (
    <>
      Card
      <p>{Boolean(tilt).toString()}</p>
    </>
  );
}
