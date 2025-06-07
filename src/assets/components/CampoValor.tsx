interface PropsValor{
  tipoEnt: string;
  setItem: React.Dispatch<React.SetStateAction<number | string>>;
  item: number | string
  setStatus : React.Dispatch<React.SetStateAction<[string, string]>>;
}

function CampoValor(props: PropsValor) {
  if(props.tipoEnt === 'number') {
    return (
      <input
        onChange={(e) => {if((/^-?\d+$/.test(e.target.value))) {
          props.setItem(Number(e.target.value));
          props.setStatus(["", "red"])
        }else {
          props.setItem("");
          props.setStatus(["[ERRO]: Valor inválido!", "red"])
        }
        }}
        value={props.item}
        id="keyInputNumber"
        type="number"
        placeholder="Digite uma chave inteira"
        className="w-full p-2 rounded border-2 text-[var(--cor-escura)]"
        step={"1"}
      />
    );
  } else{
    return (
      <input
        onChange={(e) => {if(e.target.value.length === 1 && (/^[a-zA-Z]$/.test(e.target.value))){
          props.setItem(e.target.value)
        }else{
          props.setItem("");
          props.setStatus(["[ERRO]: Valor inválido!", "red"])
        }}}
        value={props.item}
        id="keyInputChar"
        type="text"
        maxLength={1}
        placeholder="Digite um caractere"
        className="w-full p-2 rounded border-2 text-[var(--cor-escura)]"
      />
    );
  }
}

export default CampoValor;