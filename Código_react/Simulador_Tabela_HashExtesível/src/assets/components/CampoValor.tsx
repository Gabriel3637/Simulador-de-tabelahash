
function CampoValor(props: any) {
  let tmp: string = "";
  if(props.tipo === 'number') {
    return (
      <input
        onChange={(e) => {if(e.target.value !== "") {
          props.set(Number(e.target.value));
        }else { 
          props.set("");
        }
        }}
        value={props.item}
        id="keyInput"
        type="number"
        placeholder="Digite uma chave inteira"
        className="w-full p-2 mb-4 rounded border-2 text-[var(--cor-escura)]"
      />
    );
  } else{
    return (
      <input
        onChange={(e) => props.set(e.target.value)}
        value={props.item}
        id="keyInput"
        type="text"
        maxLength={1}
        placeholder="Digite um caractere"
        className="w-full p-2 mb-4 rounded border-2 text-[var(--cor-escura)]"
      />
    );
  }
}

export default CampoValor;