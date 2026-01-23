import { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";
import Button from "../components/Button";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cep, setCep] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({ name, email, password, confirmPassword, cep });
  }

  return (
    <form
      className="flex h-screen items-center justify-center bg-[#161410]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col justify-center gap-2">
        <Link to="/" className="flex justify-center">
          <img
            src="./logo.png"
            alt=""
            className="mb-4 w-40 self-center object-contain"
          />
        </Link>

        <Input placeholder="Nome" onChange={(e) => setName(e.target.value)} />
        <Input
          placeholder="E-mail"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          placeholder="Confirmar Senha"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Input
          placeholder="CEP"
          type="text"
          onChange={(e) => setCep(e.target.value)}
        />
        <Button title="Criar conta" />
        <Link to="/login">
          <Button title="Já tenho uma conta" variant="outline" />
        </Link>
      </div>
    </form>
  );
};

export default Register;
