export interface usuario_pessoal {
    id: string;
    nome: string;
    sobrenome: string;
    sexo: boolean | null;
  
    email: string;
    senha: string;
    hash_senha?: string;
  
    data_criacao: string;
    data_nascimento: string;
  
    descricao: string;
  }
  
export interface req_user_pessoal {
  data: { "usuario_pessoal": { values: Array<usuario_pessoal> } };
}

