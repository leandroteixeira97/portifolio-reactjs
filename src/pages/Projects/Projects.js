// Hooks
import { useFetch } from '../../hooks/useFetch';

// Components
import ProjectCard from '../../components/ProjectCard';

// Styles
import styles from './Projects.module.css';

const reposUrl = "https://api.github.com/users/leandroteixeira97/repos";

const Projects = () => {

  const { data: reposData, loading, error } = useFetch(reposUrl);

  const repoAPI1ADS = reposData[0];
  const repoGerenciadorProjetos = reposData[10];
  const repoMiniblog = reposData[13];
  const repoNetflixClone = reposData[14];
  const repoSecretWord = reposData[16];

  return (
    <div className={styles.projects}>
      <div className={styles.cover_bg_image}>
        <img src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Foto de capa" />
      </div>
      <div className={styles.projects_info}>
        <h1>Projetos</h1>
        <p>Aqui estão listados alguns projetos pessoais e acadêmicos que tenho desenvolvido ao longo da carreira</p>
        <div className={styles.project_cards}>
          {loading ? (
            <div className={styles.loading_data}>
              <i className='bx bx-loader-alt bx-spin bx-lg'></i>
            </div>
          ) : (<>
            {reposData &&
              <>
                <ProjectCard name={repoAPI1ADS.name} description={repoAPI1ADS.description} url={repoAPI1ADS.html_url} image={"https://github.com/leandroteixeira97/portifolio-reactjs/blob/main/src/assets/api.png?raw=true"} />
                <ProjectCard name={repoGerenciadorProjetos.name} description={repoGerenciadorProjetos.description} url={repoGerenciadorProjetos.html_url} image={"https://github.com/leandroteixeira97/portifolio-reactjs/blob/main/src/assets/costs.png?raw=true"} />
                <ProjectCard name={repoMiniblog.name} description={repoMiniblog.description} url={repoMiniblog.html_url} image={"https://github.com/leandroteixeira97/portifolio-reactjs/blob/main/src/assets/miniblog.png?raw=true"} />
                <ProjectCard name={repoNetflixClone.name} description={repoNetflixClone.description} url={repoNetflixClone.html_url} image={"https://github.com/leandroteixeira97/portifolio-reactjs/blob/main/src/assets/netflix.png?raw=true"} />
                <ProjectCard name={repoSecretWord.name} description={repoSecretWord.description} url={repoSecretWord.html_url} image={"https://github.com/leandroteixeira97/portifolio-reactjs/blob/main/src/assets/guesses.png?raw=true"} />
              </>
            }
          </>)}
        </div>
      </div>
      {!loading && <div className={styles.see_more_github}>
        <h2>Veja mais em meu GitHub</h2>
        <a href="https://www.github.com/leandroteixeira97" target="_blank" className='btn-dark'>Clique aqui</a>
      </div>}
    </div>
  );
};

export default Projects;