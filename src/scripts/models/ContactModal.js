export default class ContactModal{
    constructor(data){
        this.name = data.name
    }
    renderModal(){
        const modal = `
        <div class="modal">
            <header>
                <h2>Contactez-moi <br> ${this.name}</h2>
                <img src="assets/icons/close.svg" onclick="closeModal()" />
            </header>
            <form id="contactPhotograph">
			    <div>
				    <label>Prénom</label>
			    	    <input type="text" id="prenom" />
                    <label>Nom</label>
					    <input type="text" id="nom"/>
                    <label>Email</label>
					    <input type="email" id="email"/>
                    <label>Votre message</label>
	    				<textarea cols="100" rows="10" id="message"></textarea>
		    	</div>
                <button id="btn-submit" class="contact_button" type="submit" onclick="closeModal()"/>Envoyer</button>
		    </form>
        </div>    
        `
        return modal
    }
}
 