import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Contact = () => {
  const [state, handleSubmit] = useForm("mpwrvldo");
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="contact" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        Contáctame
      </motion.h2>
      
      {state.succeeded ? (
        <motion.div 
          className="success-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>¡Mensaje enviado con éxito!</h3>
          <p>Gracias por contactarme. Te responderé lo antes posible.</p>
          <button onClick={() => window.location.reload()}>Enviar otro mensaje</button>
        </motion.div>
      ) : (
        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: isVisible ? 0.2 : 0, duration: 0.8 }}
        >
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input type="text" id="name" name="name" placeholder="Tu nombre" required />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="tu@email.com" required />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" rows="6" placeholder="¿En qué puedo ayudarte?" required></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <motion.button 
            type="submit"
            disabled={state.submitting}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {state.submitting ? 'Enviando...' : 'Enviar'}
          </motion.button>
        </motion.form>
      )}
    </section>
  );
};

export default Contact;