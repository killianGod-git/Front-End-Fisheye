export default class ContactModal{
    constructor(data){
        this.name = data.name
    }
    renderModal(){
        const modal = `
        <div class="modal" aria-label="Contact me ${this.name}" >
            <header>
                <h2>Contactez-moi <br> ${this.name}</h2>
                <a href="#" aria-label="Close contact form" onclick="closeModal()"><img src="assets/icons/close.svg"  /></a>
            </header>
            <form id="contactPhotograph" >
			    <div>
				    <label for="prenom" aria-label="First name">Prénom</label>
			    	    <input type="text" id="prenom"  />
                    <label for="nom" aria-label="Last name">Nom</label>
					    <input type="text" id="nom" />
                    <label for="email" aria-label="Email">Email</label>
					    <input type="email" id="email" />
                    <label for="message" aria-label="Your message">Votre message</label>
	    				<textarea cols="100" rows="10" id="message"  ></textarea>
		    	</div>
                <button id="btn-submit" class="contact_button" type="submit" aria-label="Send" />Envoyer</button>
		    </form>
        </div>    
        `
        return modal
    }
}
 