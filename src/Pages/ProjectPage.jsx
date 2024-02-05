import Form from "./Form";
import Authentication from "./Authentication";
import { useParams } from "react-router-dom";

export default function ProjectPage() {
  const { projectId } = useParams();
  console.log(projectId);
  return (
    <div>
      {projectId === "1" && <Form />}
      {projectId === "2" && <Authentication />}
    </div>
  );
}
