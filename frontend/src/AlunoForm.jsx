import React, { useState, useEffect } from 'react';

const AlunoForm = ({ onSave, alunoToEdit }) => {
  const [nome, setNome] = useState('');
  const [matricula, setMatricula] = useState('');
  const [turma, setTurma] = useState('');

  useEffect(() => {
    if (alunoToEdit) {
      setNome(alunoToEdit.nome);
      setMatricula(alunoToEdit.matricula);
      setTurma(alunoToEdit.turma);
    }
  }, [alunoToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ nome, matricula, turma });
    setNome('');
    setMatricula('');
    setTurma('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Matrícula"
        value={matricula}
        onChange={(e) => setMatricula(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Turma"
        value={turma}
        onChange={(e) => setTurma(e.target.value)}
        required
      />
      <button type="submit">{alunoToEdit ? 'Atualizar' : 'Adicionar'}</button>
    </form>
  );
};

export default AlunoForm;