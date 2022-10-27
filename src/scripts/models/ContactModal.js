export default class ContactModal{
    constructor(data){
        this.name = data.name
    }
    renderModal(){
        const modal = `
        <form>
			<div>
				<label>Prénom</label>
			    	<input type="text" />
                <label>Nom</label>
					<input type="text" />
                <label>Email</label>
					<input type="email"/>
                <label>Votre message</label>
					<textarea name="message" id="message" cols="100" rows="10"></textarea>
			</div>
            <button class="contact_button">Envoyer</button>
		</form>
        `
        return modal
    }
}
 