import { useEffect, useState } from "react";

export function MaquinaDeEscrever(props: any) {
  const [text, setText] = useState("");
  const [mostrarCursor, setMostrarCursor] = useState(false)

  const escreveNaTela = (text: string,  i = 0) => {
    if (i < text.length){
        setMostrarCursor(true);

        setText(text.slice(0, i + 1));
        setTimeout(() => escreveNaTela(text, i + 1), 100);
    
    }else if (i >= text.length && props?.esconderCursor){
        setMostrarCursor(false);
    }
  };

  useEffect(() => {
    setTimeout(() => escreveNaTela(props.text), props?.delay ?? 200);
  }, []);
  return (
      <div className={`flex ${props.className ?? ""}`}>
        <p>
          {text}
        </p>
        
          {mostrarCursor && (
              <span className="animate-animar-cursor text-xl md:text-2xl ml-1 font-medium">
                |
            </span>
          )}
      </div>
  );
}
