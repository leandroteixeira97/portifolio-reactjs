// React Hooks
import { useState, useEffect } from 'react';

// Components
import StorylineCard from "../../components/StorylineCard";

// Data
import { storylineData } from "../../data/storylineData";

// Styles
import styles from "./AboutMe.module.css";

const AboutMe = () => {

  const [data] = useState(storylineData);
  const [informationDiv, setInformationDiv] = useState(2002);

  useEffect(() => {
    let infoDivs = document.querySelectorAll(".year-info");
    infoDivs.forEach((div) => {
      if (div.id !== `year-${informationDiv}`) {
        div.style.display = "none";
      } else {
        div.style.display = "flex";
      }
    });
  }, [informationDiv]);

  return (
    <div className={styles.about_me_content}>
      <div className={styles.cover_bg_image}>
        <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Foto de capa" />
      </div>
      <div className={styles.storyline_header}>
        <h1>Minha trajetória na tecnologia</h1>
        <div className={styles.storyline}>
          <div className={styles.storyline_years}>
            <div>
              <button onClick={() => setInformationDiv(2002)}>2002</button>
            </div>
            <div>
              <button onClick={() => setInformationDiv(2008)}>2008</button>
            </div>
            <div>
              <button onClick={() => setInformationDiv(2010)}>2010</button>
            </div>
            <div>
              <button onClick={() => setInformationDiv(2012)}>2012</button>
            </div>
            <div>
              <button onClick={() => setInformationDiv(2015)}>2015</button>
            </div>
            <div>
              <button onClick={() => setInformationDiv(2020)}>2020</button>
            </div>
            <div>
              <button onClick={() => setInformationDiv(2022)}>2022</button>
            </div>
          </div>
          <div className={styles.storyline_info}>
            <div className='year-info' id='year-2002'>
              <h2>2002</h2>
              <p>Como disse, sempre fui apaixonado por tecnologia, desde criança.
                Não vim de uma família rica  financeiramente falando, mas desde que me entendo por gente nós sempre tivemos um computador pessoal em casa.
                O primeiro computador que tivemos era um daqueles que tinham o gabinete na horizontal e o monitor (de tubo, é claro) ficava em cima dele.
                Me recordo que ele tinha até um drive para disquetes, o barulhinho que ele fazia traz uma nostalgia boa.</p>
            </div>
            <div className='year-info' id='year-2008'>
              <h2>2008</h2>
              <p>Meus pais sempre me deixaram a vontade para mexer no computador, e com isso fui aprendendo muito sobre o funcionamento do hardware. Pesquisava sobre tudo,
                desde como instalar um programa até sobre como formatar um PC por completo. Nessa época me lembro que quando formatávamos um computador,
                tínhamos que entrar no site da fabricante para fazer o download de cada <i>driver</i> individualmente. Não tinha Windows Update.
              </p>
            </div>
            <div className='year-info' id='year-2010'>
              <h2>2010</h2>
              <p>Nessa época já dava suporte para alguns vizinhos da minha rua. Formatava alguns computadores, resolvia alguns problemas de conexão, instalava e configurava impressoras.
                Era tudo na base da pesquisa, mas já me virava bem. Sempre ouvia me falarem: "Nossa você leva jeito pra isso, deveria cobrar".</p>
            </div>
            <div className='year-info' id='year-2012'>
              <h2>2012</h2>
              <p>E assim fui crescendo, com o computador fazendo parte de minha rotina diária. Em 2012, quando tinha 14 anos, tive a oportunidade de ser menor aprendiz
                na empresa Ericsson, a gigante do ramo de telecomunicações. Foi minha primeira experiência profissional, onde ia para a empresa trabalhar durante as
                minhas férias escolares. Paralelamente eu fazia o curso de Eletricista de Manutenção, onde tive pouco contato com computadores em si, mas muito contato com
                eletrônica, tanto analógica quanto digital.
              </p>
            </div>
            <div className='year-info' id='year-2015'>
              <h2>2015</h2>
              <p>Logo quando terminei o curso no SENAI, eu estava no terceiro ano do ensino médio e pensei em fazer um técnico em Redes de Computadores, porém acabei optando
                por estudar para o vestibular. Estava muito indeciso com qual carreira seguir, e depois de muito tempo pensando e um pouco de pressão, acabei optando pelo curso
                de Engenharia Mecânica. Foi um período muito bom, eu gostava bastante do curso pois tinha muita matemática e física. Só que ao decorrer do curso percebi que não era aquilo que gostaria de
                fazer para o resto da vida. Tentei mudar para o curso de Engenharia da Computação, porém por ser bolsista do ProUni não tive sucesso.</p>
            </div>
            <div className='year-info' id='year-2020'>
              <h2>2020</h2>
              <p>Finalmente havia terminado o curso de Engenharia Mecânica. Nesta época eu já era funcionário público em minha cidade, então não perdi tempo e logo ingressei no curso de Análise e Desenvolvimento de Sistemas.
                Me identifiquei demais com o curso, era tudo o que eu queria. Porém no meio do ano de 2020 fui promovido em meu trabalho e tive que trancá-lo para poder cursar uma pós-graduação na área que eu trabalhava (Licitações
                e Contratações Públicas).
              </p>
            </div>
            <div className='year-info' id='year-2022'>
              <h2>2022</h2>
              <p>Este ano foi o <i>turning point</i> em minha carreira. Já estava estabilizado no serviço público, ganhava bem pra caramba como chefe, porém o vazio da insatisfação profissional me preenchia cada vez mais. Foi aí
                que decidi tomar uma decisão extrema: pedir exoneração de meu cargo para migrar de área. Eu havia prestado vestibular novamente para Análise e Desenvolvimento de Sistemas na Faculdade de Tecnologia de minha cidade (FATEC) e havia passado.
                Decidi então largar a securidade do serviço público para ingressar totalmente nesta área que eu amo, e não me arrependo nem um pouco. Estudo programação todos os dias e, a cada assunto novo estudado, eu tenho vontade de aprender mais e mais.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className={styles.professional_historic_header}>Histórico profissional</h2>
      <div className={styles.professional_historic}>
        {
          data.map((job) => <StorylineCard
            key={job.job_index}
            job_index={job.job_index}
            job_title={job.job_title}
            job_image={job.job_image}
            job_period={job.job_period}
            job_description={job.job_description}
            job_company={job.job_company} ></StorylineCard>)
        }
      </div>
      <div className={styles.know_more}>
        <h2>Veja mais em meu LinkedIn:</h2>
        <a href='https://www.linkedin.com/in/leandroteixeira97' target="_blank" className="btn-dark">Clique aqui</a>
      </div>
    </div>
  );
};

export default AboutMe;