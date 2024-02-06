import logo from "./assets/Logo.svg";
import { NoteCard } from "./components/note-card";
import { NoteCardRecent } from "./components/note-card-Recent";

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NLW Expert" />
      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tighter outline-none placeholder:text-slate-500"
        />
      </form>

      <div className="h-px bg-slate-700" />
      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NoteCardRecent />
        <NoteCard
          Days={new Date()}
          TextOne="O Drizzle possui um plugin do ESLint para evitar que realizemos updates ou deletes sem where..."
          TextTwo="Para configurar o plugin, é preciso instalar como abaixo:"
        />
        <NoteCard
          Days={new Date()}
          TextOne="No app do NLW vamos criar um layout incrível, assim podemos entregar a melhor experiência para a comunidade."
          TextTwo="Na aplicação React vamos criar um projeto que permite o usuário salvar notas em texto ou áudio."
        />

        <NoteCard
          Days={new Date()}
          TextOne="Podemos utilizar o pacote chalk para exibir logs no código coloridos para dar um efeito mais legal no terminal."
          TextTwo="Podemos trocar tanto a cor do texto quanto a cor de fundo do texto impresso no console."
        />
      </div>
    </div>
  );
}
