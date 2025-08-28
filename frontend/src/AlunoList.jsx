import React from 'react';

const AlunoList = ({ alunos, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Lista de Alunos</h2>
      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.id}>
            {aluno.nome} - Matrícula: {aluno.matricula} - Turma: {aluno.turma}
            <button onClick={() => onEdit(aluno)}>Editar</button>
            <button onClick={() => onDelete(aluno.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlunoList;