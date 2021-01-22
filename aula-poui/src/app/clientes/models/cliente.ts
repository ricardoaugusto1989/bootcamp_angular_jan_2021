export interface Cliente {
	id: string;
	nome: string;
	cidade: string;
	estado: string;
	dataNascimento: string;
	endereco: string;
	sexo: string;
}

export type Clientes = Array<Cliente>;

export interface ClientesAPI {
	items: Clientes;
	hasNext: boolean;
}
