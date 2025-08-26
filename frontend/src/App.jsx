import React, { useState, useEffect } from 'react';
import { getAlunos, criarAluno, atualizarAluno, deletarAluno } from './api';
import AlunoList from './AlunoList';
import AlunoForm from './AlunoForm';
import './App.css'; // Opcional, para estilização

function App() {
  const [alunos, setAlunos] = useState([]);
  const [alunoToEdit, setAlunoToEdit] = useState(null);

  useEffect(() => {
    fetchAlunos();
  }, []);

  const fetchAlunos = async () => {
    try {
      const data = await getAlunos();
      setAlunos(data);
    } catch (error) {
      console.error('Erro ao buscar alunos:', error);
    }
  };

  const handleSave = async (aluno) => {
    try {
      if (alunoToEdit) {
        await atualizarAluno(alunoToEdit.id, aluno);
        setAlunoToEdit(null);
      } else {
        await criarAluno(aluno);
      }
      fetchAlunos();
    } catch (error) {
      console.error('Erro ao salvar aluno:', error);
    }
  };

  const handleEdit = (aluno) => {
    setAlunoToEdit(aluno);
  };

  const handleDelete = async (id) => {
    try {
      await deletarAluno(id);
      fetchAlunos();
    } catch (error) {
      console.error('Erro ao deletar aluno:', error);
    }
  };

  return (
    <div className="App">
      <h1>Gerenciamento de Alunos</h1>
      <AlunoForm onSave={handleSave} alunoToEdit={alunoToEdit} />
      <hr />
      <AlunoList alunos={alunos} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;