import viteLogo from "/vite.svg";
import Tilt from "../../lib/Tilt";

interface CardTypes {
  title?: string;
  tilt?: boolean;
}

export default function Card(props: CardTypes) {
  const { title, tilt } = props;
  return (
    <>
      {tilt ? (
        <Tilt
          options={{ max: 25, speed: 400, glare: true, "max-glare": 0.8 }}
          // borderRadius here matches the border-radius of .container .glass-card
          // since <Tilt /> wraps it's child in another div.
          styles={{ borderRadius: "15px" }}
        >
          <CardComponent title={title} />
        </Tilt>
      ) : (
        <>
          <CardComponent title={title} />
        </>
      )}
    </>
  );
}

function CardComponent(props: { title?: string }) {
  const { title } = props;
  return (
    <div className="glass-card">
      <div className="content">
        <h2>{title}</h2>

        <img src={viteLogo} className="logo" alt="Vite logo" />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Exercitationem possimus sint similique corrupti aperiam ratione at.
          Aliquam suscipit non culpa ipsum rem at quis consequatur, earum a,
          fugiat autem voluptatibus?
        </p>
        <span>
          <a href="#">Read more link.</a>
        </span>
      </div>
    </div>
  );
}
