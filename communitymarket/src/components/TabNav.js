import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProfileCard from './ProfileCard';
import { Container } from "react-bootstrap"
import Galeria from './Galeria';
import Favoritos from '../views/Favoritos';
import NewPublication from './NewPublication';
import MisPublicaciones from '../views/MisPublicaciones';
import { ContextApi } from "../ContextApi"
import { useContext} from "react"

function UncontrolledExample() {
  const {  usuario, auth } = useContext(ContextApi)
const {isAuth} = auth;
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Mis Datos" title="Mis Datos">
      <Container className="containerProfiles">
        <ProfileCard datos={usuario}/>
      </Container>
      </Tab>
      <Tab eventKey="Favoritos" title="Favoritos">
        <Favoritos/>
      </Tab>
      <Tab eventKey="Publicaciones" title="Publicaciones" >
      <Galeria/>
      </Tab>
      <Tab eventKey="Mis Publicaciones" title="Mis Publicaciones">
        {isAuth? <MisPublicaciones/>:''}
      </Tab>
      <Tab eventKey="Nueva Publicación" title="Nueva Publicación">
      {isAuth? <NewPublication/>:''}
      </Tab>
    </Tabs> 

  );
}

export default UncontrolledExample;