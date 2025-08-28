import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Substitua pelo URL da sua API

export const getAlunos = async () => {
  const response = await axios.get(`${API_URL}/alunos`);
  return response.data;
};

export const criarAluno = async (aluno) => {
  const response = await axios.post(`${API_URL}/alunos`, aluno);
  return response.data;
};

export const atualizarAluno = async (id, aluno) => {
  const response = await axios.put(`${API_URL}/alunos/${id}`, aluno);
  console.log(response)
  return response.data;
};

export const deletarAluno = async (id) => {
  const response = await axios.delete(`${API_URL}/alunos/${id}`);
  return response.data;
};