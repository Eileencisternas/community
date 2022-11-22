import logo from "../assets/imgs/community.jpg"

export default function Home() {
  return (
    <div id="Home">
      <h1>Bienvenidos a Community Market</h1>
      <img src={logo} className="logoHome" alt="logo" />
      <a className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      ></a>
    </div>
  )
}
