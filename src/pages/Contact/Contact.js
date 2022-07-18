// EmailJS
import emailjs from 'emailjs-com';

// SweetAlert2
import Swal from 'sweetalert2';

// Styles
import styles from "./Contact.module.css";

const Contact = () => {

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_pycqeht', 'template_wzis9aa', e.target, 'YEIZEsuPYSAxpS124')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    
      Swal.fire({
        title: 'Obrigado!',
        text: 'Seu e-mail foi encaminhado, em breve entrarei em contato.',
        icon: 'success',
        confirmButtonColor: "#1f1f1f"
      }
      )

    e.target.reset();

  };

  return (
    <div className={styles.contact_content}>
      <div className={styles.cover_bg_image}>
        <img src="https://images.unsplash.com/photo-1620287341401-e2945a4b9daa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Foto de capa" />
      </div>
      <h1>Entre em contato comigo</h1>
      <form className={styles.contact_form} onSubmit={(e) => sendEmail(e)}>
        <label>
          Nome:
          <input required type="text" name="name" id="name" placeholder="Digite seu nome..." />
        </label>
        <label>
          E-mail:
          <input required type="email" name="email" id="email" placeholder="exemplo@gmail.com" />
        </label>
        <label>
          Assunto:
          <input required type="text" name="subject" id="subject" placeholder="Digite um assunto..." />
        </label>
        <label>
          Mensagem:
          <textarea required name="message" id="message" placeholder="Digite aqui sua mensagem..."></textarea>
        </label>
        <button className="btn-dark">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;