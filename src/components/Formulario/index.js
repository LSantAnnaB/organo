import { useState } from 'react'
import { Botao } from '../Botao'
import { CampoTexto } from '../CampoTexto'
import { ListaSuspensa } from '../ListaSuspensa/Index'
import './Formulario.css'
export const Formulario = (props) => {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
  }
  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2> Preencha os dados para cadastro</h2>
        <CampoTexto
          obrigatorio={true}
          label="nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto
          label="imagem"
          placeholder="Digite endereço da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa
          obrogatório={true}
          label="time"
          itens={props.times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>

  )

}  