import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Usuario = () => {
  const [usuario, setUsuario] = useState([]);
  const id = useParams();

  const obtenerUsuario = async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const users = await res.data;
    setUsuario(users);
    console.log(usuario);
  };

  useEffect(() => {
    obtenerUsuario();
  }, []);

  return (
    <div>
      <h4>Usuario</h4>
      <p>Nombre: {usuario.name}</p>
      <p>Email: {usuario.email}</p>
      <p>Teléfono: {usuario.phone}</p>
    </div>
  );
};
export default Usuario;
