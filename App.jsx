import { useState } from 'react';
import "./App.css";

const FavoritesData = [
  {
    id: 1,
    name: "Killer Queen",
    img: "https://upload.wikimedia.org/wikipedia/en/2/2b/Queen_Sheer_Heart_Attack.png",
    descripcion: "Canción icónica de Queen lanzada en 1974. Una obra maestra del rock que combina elegancia y potencia, con la inconfundible voz de Freddie Mercury."
  },
  {
    id: 2,
    name: "Volver al Futuro 3",
    img: "https://upload.wikimedia.org/wikipedia/en/8/8d/Back_to_the_Future_Part_III.jpg",
    descripcion: "La tercera entrega de la trilogía de Volver al Futuro (1990). Marty McFly viaja al Viejo Oeste para salvar al Doc Brown. Una aventura llena de acción y humor."
  },
  {
    id: 3,
    name: "Alitas",
    img: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400",
    descripcion: "Deliciosas alitas de pollo, crujientes por fuera y jugosas por dentro. Perfectas para cualquier ocasión, ya sea con salsa BBQ, búfalo o tu favorita."
  }
];

const HeaderContent = () => {
  return (
    <header>
      <h1>Mis Favoritos</h1>
    </header>
  );
};

const Navbar = (props) => {
  return (
    <nav>
      <ul>
        {props.data.map((item) => (
          <li 
            key={item.id} 
            onClick={() => props.fncClick(item)} 
            style={{cursor: "pointer"}}
          >
            <img 
              src={item.img} 
              alt={item.name} 
              style={{
                width: "30px",
                height: "30px", 
                marginRight: "8px",
                verticalAlign: "middle",
                borderRadius: "5px"
              }} 
            />
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

const MainContent = (props) => {
  return (
    <main>
      <section>
        <h2>{props.data && props.data.name}</h2>
        <p>{props.data && props.data.descripcion}</p>
      </section>
    </main>
  );
};

const AsideContent = (props) => {
  return (
    <aside>
      <section>
        <img 
          src={props.data && props.data.img} 
          alt={props.data ? props.data.name : 'Selecciona un objeto para ver su descripción'} 
          style={{
            width: '200px', 
            height: '200px',
            margin: '10px',
            borderRadius: '10px'
          }}
        />
      </section>
    </aside>
  );
};


function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <HeaderContent />
      <Navbar data={FavoritesData} fncClick={handleClick}/>
      <MainContent data={selectedItem}/>
      <AsideContent data={selectedItem}/>
      <FooterContent />
    </div>
  );
}

export default App;
