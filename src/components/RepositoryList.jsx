import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss"
import { useEffect, useState } from "react";

export function RepositoryList() {
  const [repositories, setRepositories] = useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/LucasFlaquer/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <p>Listagem de todos os {repositories.length}</p>
      <ul>
        {repositories.map(repository => {
          return <RepositoryItem repository={repository} key={repository.name} />
        })}
      </ul>
    </section>
  )
}