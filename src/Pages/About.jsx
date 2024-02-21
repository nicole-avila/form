import me from "../assets/IMG_0048.jpg";

export default function About() {
  return (
    <div className="about-content">
      <div>
        <img
          className="about-content__img-box"
          src={me}
          alt="profile photo of a young happy women"
        />
      </div>

      <div className="about-content__text-box">
        <h2>Hello</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
          libero sed quidem iure deserunt cupiditate enim nisi natus ullam,
          repellat quia non atque at est vitae similique iusto ex possimus?
        </p>
      </div>
    </div>
  );
}
