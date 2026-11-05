
function Card({ imagem, titulo, descricao }) {
  return (
    <article className="card">
      <img src={imagem} alt={titulo} />

      <div className="card-content">
        <h2>{titulo}</h2>
        <p>{descricao}</p>
      </div>
    </article>
  );
}

export default Card;
