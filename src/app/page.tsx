import Image from "next/image";
import Logo from "@/img/Logomoba.png";
import LogoD from "@/img/Logo.png";
import Background from "@/img/Background.png";
export default function Home() { 
  return ( 
    <main className="bg-stone-800 flex flex-col max-h-screen h-screen ">
      <Image className="my-32 mx-28"  src={Logo} alt="cover" width={180}/>
      <div className="mt-8 p-5 flex flex-col cap-1: ">
        <label className="mt-6">Nome de usuário</label>
        <input className="bg-stone-700 border-0 p-3 outline outline-offset-2 outline-1  rounded-md"></input>
        <label className="mt-6 ">Senha</label>
        <input class="bg-stone-700 border-0 p-3 outline outline-offset-2 outline-1  rounded-md"></input>
        <div className="p-5 space-y-4 flex flex-col cap-1 font-bold">
          <button className="bg-pink-600 p-4 border-0 rounded-md">Entrar</button>
          <button className="bg-white text-pink-600 p-5 border-0 rounded-md">
            Esqueci minha senha 
          </button>
        </div>
      </div>
    </main>
  );
}