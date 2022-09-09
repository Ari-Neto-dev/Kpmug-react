import { useState } from "react";
import "./App.css";
import Header from "../../components/Header/Header";

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("nome: " + fullName + "e-mail: " + email + "phone: " + phone);
  };

  const handleChangeFullName = (e) => {
    setFullName(e.target.value);
    console.log("escrevendo..", e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    console.log("escrevendo..", e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
    console.log("escrevendo..", e.target.value);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <form className="container-form" onSubmit={(e) => handleSubmit(e)}>

          <div className="container-input">
            <label for="nomesobrenome">Nome e Sobrenome</label>
            <input
              type="text"
              id="nomesobrenome"
              class="input-padrao"
              onChange={(e) => handleChangeFullName(e)}
              value={fullName}
            />
          </div>

          <div className="container-input">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              class="input-padrao"
              placeholder="endereçoemail@dominio.com.br"
              onChange={(e) => handleChangeEmail(e)}
              value={email}
            />
          </div>

          <div className="container-input">
            <label for="telefone">Telefone </label>
            <input
              type="tel"
              id="telefone"
              class="input-padrao"
              required
              onChange={(e) => handleChangePhone(e)}
              value={phone}
              placeholder="(XX) XXXXX-XXXX"
            />
          </div>

          <input className="button" type="submit" value="Enviar" disabled={!email || !fullName || !phone} />
        </form>
      </main>
    </div>
  );
}

export default App;
