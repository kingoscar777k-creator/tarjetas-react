function Tarjeta({ receta }) {
  return (
    <article className="recipe-card">
      <div className="card-image-wrap">
        <img className="card-image" src={receta.imagen} alt={receta.alt} loading="lazy" />
        <span className={`recipe-tag tag-${receta.tipo.toLowerCase()}`}>{receta.tipo}</span>
      </div>
      <div className="card-content">
        <div className="card-title-row">
          <h3>{receta.nombre}</h3>
          <span className="card-arrow" aria-hidden="true">↗</span>
        </div>
        <p className="card-description">{receta.descripcion}</p>
        <div className="card-meta"><span aria-hidden="true">◷</span> {receta.tiempo}</div>
      </div>
    </article>
  );
}

export default Tarjeta;