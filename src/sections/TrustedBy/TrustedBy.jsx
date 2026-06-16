import "./TrustedBy.scss";

const logos = [
  "Angular",
  "TypeScript",
  "JavaScript",
  "SCSS",
  "HTML5",
  "MySQL",
  "Git",
  "REST APIs",
  "Laravel",
];

export default function TrustedBy() {
  return (
    <section className="trusted">
      <div className="trusted__container">
        <p className="trusted__title">Tecnologías</p>

        <div className="trusted__slider">
          <div className="trusted__track">
            {[...logos, ...logos].map((logo, index) => (
              <span key={index}>{logo}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
