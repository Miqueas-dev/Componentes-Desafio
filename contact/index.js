function contactComponent(el) {
   const componentEl = document.createElement("div");
   // el template string (commillas invertidas, te deja escribir algo asi como esta el hmtl) debajo del otro.. el string normal no
   componentEl.innerHTML = `
   <section class="contact">
   <h2 class="contact__title">Contacto</h2>
   <form class="contacto__form" action="">
      <label>
         <h3>Nombre</h3>
         <input class="contanct__form-input" type="text">
      </label>
      <label>
         <h3>Email</h3>
         <input class="contanct__form-input" type="text">
      </label>
      <label>
         <h3>Mensaje</h3>
         <textarea></textarea>
      </label>
      <div class="contacto__submit">
         <button class="contacto__submit-send">Enviar</button>
      </div>
   </form>
</section>
`;
   const formEl = componentEl.querySelector(".contacto__form");
   formEl.addEventListener("submit", function (e) {
      e.preventDefault()
      console.log("enviado correctamente");
   })
   el.appendChild(componentEl);
}
