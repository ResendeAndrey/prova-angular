import { Component } from '@angular/core';
import { CepService } from './cep.service';
import { CrudService } from './crud.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'teste-helpper'

	persons = [
		{
			name: 'Teste',
			cpf: 'Teste',
			phone: 'Teste',
			email: 'Teste',
			cep: 'Teste',
			state: 'Teste',
			city: 'Teste',
			street: 'Teste',
		}
	]
	columns = ['name', 'cpf', 'phone', 'email', 'cep', 'state', 'city', 'street', 'actions']
	selectedPerson
	loading

	addPerson() {
		this.selectedPerson = {}
	}

	editPerson(person) {
		this.selectedPerson = { ...person }
	}

	deletePerson(person) {
		this.crud.remove(person)
		this.persons = JSON.parse(this.crud.get())
	}

	changeCep(event) {
		var cep = event.target.value
		if (cep.length == 8) {
			this.loading = true
			this.cep.getCep(cep).then((apiResponse: any) => {
				if (apiResponse.erro) {
					alert('Cep não encontrado')
				} else {
					this.selectedPerson = {
						...this.selectedPerson,
						cep: apiResponse.cep.replace('-', ''),
						state: apiResponse.uf,
						city: apiResponse.localidade,
						street: apiResponse.logradouro
					}
				}
			}).catch(error => {
				alert('Erro ao buscar o cep')
				console.error(error)
			}).finally(() => this.loading = false)
		}
	}

	cancel() {
		this.selectedPerson = null
	}

	submit(person) {
		var error = false
		this.columns.forEach(key => {
			if (key != 'actions' && !person[key]) {
				error = true
			}
		})

		if (error) {
			alert('Erro!\nPreencha todos os campos!')
		} else {
			this.crud.save(person)
			this.persons = JSON.parse(this.crud.get())
			this.selectedPerson = null
		}
	}

	ngOnInit() {
		if (!this.crud.get() || !JSON.parse(this.crud.get()).length) this.crud.populateTable()
		this.persons = JSON.parse(this.crud.get())
	}

	constructor(public cep: CepService, public crud: CrudService) { }
}



