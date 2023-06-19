import './ListaSuspensa.css'

export const ListaSuspensa = (props) => {

  const aoSelecionar = (evento) => {
    props.aoAlterado(evento.target.value)
  }
  
  return (
    <div className='lista-suspensa'>
      <label>{props.label}</label>
      <select
        required={props.obrigatorio}
        value={props.value}
        onChange={aoSelecionar}
        >
        {props.itens.map(item => {
          return <option key={item}>{item}</option>
        })}
      </select>
    </div>
  )
}