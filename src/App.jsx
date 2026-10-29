import Tarjeta from './Tarjeta.jsx';
import './styles.css';

const recetas = [
  {
    nombre: 'Tostadas con aguacate',
    tipo: 'Desayuno',
    descripcion: 'Pan crujiente, aguacate cremoso, limón y un toque de pimienta. Ideal para empezar el día.',
    tiempo: '10 min',
    imagen: '/images/tostadas.svg',
    alt: 'Ilustración de tostadas con aguacate'
  },
  {
    nombre: 'Pasta al pesto',
    tipo: 'Comida',
    descripcion: 'Una receta italiana sencilla con albahaca fresca, piñones, parmesano y aceite de oliva.',
    tiempo: '20 min',
    imagen: '/images/pasta.svg',
    alt: 'Ilustración de un plato de pasta al pesto'
  },
  {
    nombre: 'Tortitas caseras',
    tipo: 'Desayuno',
    descripcion: 'Tortitas esponjosas con fruta fresca y un chorrito de sirope. Perfectas para compartir.',
    tiempo: '15 min',
    imagen: '/images/tortitas.svg',
    alt: 'Ilustración de tortitas con fruta'
  },
  {
    nombre: 'Ensalada mediterránea',
    tipo: 'Comida',
    descripcion: 'Tomate, pepino, aceitunas y queso feta con un aliño ligero. Fresca y llena de color.',
    tiempo: '12 min',
    imagen: '/images/ensalada.svg',
    alt: 'Ilustración de una ensalada mediterránea'
  },
  {
    nombre: 'Brownie de chocolate',
    tipo: 'Postre',
    descripcion: 'Bizcocho de chocolate intenso, tierno por dentro y con una fina capa crujiente por fuera.',
    tiempo: '35 min',
    imagen: '/images/brownie.svg',
    alt: 'Ilustración de un brownie de chocolate'
  },
  {
    nombre: 'Limonada natural',
    tipo: 'Bebida',
    descripcion: 'Limón recién exprimido, agua fría y unas hojas de menta para refrescar cualquier momento.',
    tiempo: '5 min',
    imagen: '/images/limonada.svg',
    alt: 'Ilustración de un vaso de limonada'
  }
];

function App() {
  return (
    <div className="app">
      <header className="hero">
        <nav className="navbar" aria-label="Navegación principal">
          <a className="brand" href="#" aria-label="Recetas de casa, inicio">
            <span className="brand-icon" aria-hidden="true">✳</span>
            recetas<span>de casa</span>
          </a>
          <a className="nav-link" href="#recetas">Explorar recetas <span aria-hidden="true">↘</span></a>
        </nav>
        <div className="hero-content">
          <p className="eyebrow"><span></span> COCINA FÁCIL, SABOR REAL</p>
          <h1>Pequeñas recetas,<br /><em>grandes momentos.</em></h1>
          <p className="hero-description">
            Ideas sencillas y deliciosas para disfrutar cada día.<br className="desktop-break" />
            Elige una receta y ponte manos a la obra.
          </p>
          <a className="primary-button" href="#recetas">Ver las recetas <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-decoration decoration-one" aria-hidden="true">✳</div>
        <div className="hero-decoration decoration-two" aria-hidden="true">✦</div>
      </header>

      <main id="recetas" className="recipes-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">UN POCO DE INSPIRACIÓN</p>
            <h2>¿Qué te apetece hoy?</h2>
          </div>
          <p className="section-note">6 ideas para disfrutar<br />sin complicarse.</p>
        </div>

        <div className="cards-grid">
          {recetas.map((receta) => (
            <Tarjeta key={receta.nombre} receta={receta} />
          ))}
        </div>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#"><span className="brand-icon" aria-hidden="true">✳</span> recetas<span>de casa</span></a>
        <p>Hecho con cariño · Proyecto de práctica con React</p>
      </footer>
    </div>
  );
}

export default App;