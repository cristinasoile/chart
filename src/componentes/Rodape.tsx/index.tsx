import { ImLinkedin, ImGithub } from "react-icons/im";

function Rodape() {
  return (
    <footer className="flex flex-col md:flex-col md:justify-evenly bg-rodape bg-cover p-4 md:p-20 ">
      <div className="flex w-full md:w-auto justify-between items-center">
        <div className="flex gap-x-4">
          <a href="https://www.linkedin.com/in/deborah-cristina-desenvolvedoraweb/" target="_blank">
            <ImLinkedin size={30} color="white" />
          </a>
          <a href="https://github.com/cristinasoile" target="_blank">
            <ImGithub size={30} color="white" />
          </a>
        </div>
        {/* <div className="sm:w-32 md:block w-20">
          <img src="/imagens/minhas_imagens/logo_chartinho+B.png" alt="logo"/>
        </div> */}
        <div className="text-xs md:text-lg">
          <p className="text-white">Desenvolvido por Cristina Soile.</p>
        </div>
      </div>
    </footer>
  );
}

export default Rodape;
