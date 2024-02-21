import Form from "./Form";
import Authentication from "./Authentication";
import { useParams } from "react-router-dom";

export default function ProjectPage() {
  const { projectId } = useParams();

  return (
    <>
      {projectId === "Form" && <Form />}
      {projectId === "Book" && <Authentication />}
    </>
  );
}
