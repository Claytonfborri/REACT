import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "../layout/Container";
import Loading from "../layout/Loading";
import Message from "../layout/Message";
import ProjectForm from "../project/ProjectForm";
import styles from "./Project.module.css";

const Project = () => {
  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [message, setMessage] = useState();
  const [type, setType] = useState();

  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/project/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProject(data);
        })
        .catch((err) => console.log(err));
    }, 300);
  }, [id]);

  const editPost = (project) => {
    setMessage(""); //Pra sempre trocar a mensagem..
    if (project.cost < project.cost) {
      setMessage("O orçamento não pode ser menor que o custo do projeto!");
      setType("error");
      return false;
    }
    fetch(`http://localhost:5000/project/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
        setShowProjectForm(false);
        setMessage("Projeto atualizado!");
        setType("sucess");
      })
      .catch((err) => console.log(err));
  };
  const toggleProjectForm = () => {
    setShowProjectForm(!showProjectForm);
  };
  const toggleServiceForm = () => {
    setShowServiceForm(!showServiceForm);
  };

  return (
    <>
      {project.name ? (
        <div className={styles.project_details}>
          <Container customClass="colum">
            {message && <Message type={type} msg={message} />}
            <div className={styles.details_container}>
              <h1>Projeto: {project.name}</h1>
              <button className={styles.btn} onClick={toggleProjectForm}>
                {!showProjectForm ? "Editar projeto" : "Fechar"}
              </button>
              {!showProjectForm ? (
                <div className={styles.project_info}>
                  <p>
                    <span>Categoria: </span> {project.category.name}
                  </p>
                  <p>
                    <span>Total de Orçamento:</span> R$ {project.budget}
                  </p>
                  <p>
                    <span>Total Utilizado</span> R$ {project.cost}
                  </p>
                </div>
              ) : (
                <div className={styles.project_info}>
                  <ProjectForm
                    handleSubmit={editPost}
                    btnText="Concluir edição"
                    projectData={project}
                  />
                </div>
              )}
            </div>
            <div className={styles.service_form_container}>
              <h2>Adicione um serviço:</h2>
              <button className={styles.btn} onClick={toggleServiceForm}>
                {!showServiceForm ? "Adicionar serviço" : "Fechar"}
              </button>
              <div className={styles.project_info}>
                {showServiceForm && <div>Formulario de Serviço</div>}
              </div>
            </div>
            <h2>Serviços</h2>
            <Container customClass="start">
              <p>Itens de Serviços</p>
            </Container>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Project;