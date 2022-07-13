// React Hooks
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Hooks
import { useFetch } from '../../hooks/useFetch';

// Styles
import styles from './Home.module.css';

const profileUrl = "https://api.github.com/users/leandroteixeira97";

const Home = () => {

  const { data: profileData, loading, error } = useFetch(profileUrl);

  return (
    <div className={styles.home_content}>
      {loading ? (
        <div className={styles.loading_data}>
          <i className='bx bx-loader-alt bx-spin bx-lg'></i>
        </div>
      ) : (
        <>
          <div className={styles.cover_bg_image}>
            <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Foto de capa" />
          </div>
          <div className={styles.profile_image}>
            <img src={profileData.avatar_url} alt={profileData.name}></img>
          </div>
          <div className={styles.profile_info}>
            <h1>Hello, there!</h1>
            <div>
              <p>Seja bem-vindo(a) ao meu portifólio pessoal. Me chamo <span>Leandro Aquino</span>, e desde criança sou apaixonado por tecnologia em geral. Comecei no mundo da programação estudando tecnologias front-end, mas um dia quero me tornar um desenvolvedor full-stack. Atualmente estou cursando Análise e Desenvolvimento de Sistemas na Faculdade de Tecnologia de São José dos Campos - SP | Brasil.</p>
              <p>Possuo experiência no desenvolvimento web, utilizando tecnologias como HTML, CSS, JavaScript ES6, React e ferramentas para versionamento de código, tais como Git e GitHub. Também possuo conhecimentos no desenvolvimento utilizando Python, com ênfase na utilização do micro-framework Flask.</p>
              <p>💻 Tecnologias: HTML5, CSS3, JavaScript ES6, ReactJS and Python.</p>
              <p>💼 Ferramentas: VSCode, Canva, Photoshop, Figma, Git e GitHub</p>
              <p>📚 Estudando agora: ReactJS</p>
            </div>
            <h2>Clique abaixo para saber mais:</h2>
          </div>
          <div className={styles.home_buttons}>
            <Link to={'/aboutme'} className="btn-dark">Conheça minha trajetória</Link>
            <Link to={'/projects'} className="btn-dark">Veja meus projetos</Link>
            <Link to={'/contact'} className="btn-dark">Entre em contato</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;