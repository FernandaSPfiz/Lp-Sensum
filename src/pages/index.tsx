import { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import Close from "../assets/close.svg";
import Menu from "../assets/menu.svg";
import Camera from "../assets/Camera.svg";
import Wand from "../assets/wand.svg";
import Tree from "../assets/tree.svg";
import Card from "../components/Card";
import sen2 from "../assets/images/sen2.jpg";
import sen3 from "../assets/images/sen3.jpg";
import Button from "../components/buttons";
import t1 from "../assets/t1.jpg";
import t2 from "../assets/t2.jpg";
import t3 from "../assets/t3.jpeg";
import t4 from "../assets/t4.avif";
import t5 from "../assets/t5.jpg";
import t6 from "../assets/t6.jpg";
import cheia from "../assets/cheia.png";
import vazia from "../assets/vazia.png";
import check from "../assets/check.png";
import LogoMarca from "../assets/logomarca.png";
import "../styles/headers.css";
import "../styles/utility.css";
import "../styles/testemony.css";
import "../styles/footer.css";
import "../styles/contacts.css";
import "../styles/pricing.css";
import "../styles/hero.css";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer ",
        },
        body: JSON.stringify({
          to_email: email,
          text_msg: mensagem,
        }),
      });

      const result = await response.text();

      if (response.ok) {
        setFeedback("Mensagem enviada com sucesso!");
        setEmail("");
        setMensagem("");
      } else {
        setFeedback("Erro ao enviar: " + result);
      }
    } catch (error) {
      setFeedback("Erro de rede: " + error);
    }
  };

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = showMobileMenu ? "hidden" : "auto";
    }
    return () => {
      if (html) {
        html.style.overflow = "auto";
      }
    };
  }, [showMobileMenu]);

  return (
    <>
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img src={Logo} alt="" width={220} height={80} />

          <div className="desktop-only">
            <ul className="flex gap-1">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#solution">Soluções</a>
              </li>
              <li>
                <a href="#testimonials">Depoimentos</a>
              </li>
              <li>
                <a href="#pricing">Preços</a>
              </li>
              <li>
                <a href="#contacts">Contato</a>
              </li>
            </ul>
            <div className="desktop-only"></div>
            <div className="mobile-menu">
              {showMobileMenu ? (
                <div className="mobile-menu-content">
                  <div className="container flex">
                    <ul>
                      <li>
                        <a onClick={() => setShowMobileMenu(false)} href="#">
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => setShowMobileMenu(false)}
                          href="#solution"
                        >
                          Soluções
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => setShowMobileMenu(false)}
                          href="#testimonials"
                        >
                          Depoimentos
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => setShowMobileMenu(false)}
                          href="#pricing"
                        >
                          Preços
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => setShowMobileMenu(false)}
                          href="#contact"
                        >
                          Contato
                        </a>
                      </li>
                    </ul>
                    <span
                      onClick={() => setShowMobileMenu(false)}
                      className="btn-wrapper"
                    >
                      <img
                        src={Close}
                        alt="ícone fechar menu"
                        width={24}
                        height={24}
                      />
                    </span>
                  </div>
                </div>
              ) : (
                <span
                  onClick={() => setShowMobileMenu(true)}
                  className="btn-wrapper"
                >
                  <img src={Menu} alt="ícone menu" width={24} height={24} />
                </span>
              )}
            </div>
          </div>
        </nav>
      </header>

      <section id="hero">
        <div
          className="container content"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              margin: "50px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p className="desktop-only"></p>
            <h1>Transforme momentos em memórias eternas.</h1>
            <br></br>
            <p>
              No nosso estúdio, cada clique é pensado para capturar a sua
              essência com beleza, emoção e autenticidade. Seja um ensaio, um
              evento ou um retrato especial, aqui sua história ganha luz
              própria.{" "}
            </p>
          </div>
          <div className="flex"></div>
        </div>
        <div className="hero-image">
          <img src={sen2} alt="imagem de fundo" width={300} height={250} />
          <img src={sen3} alt="imagem de fundo" width={300} height={250} />
        </div>
      </section>

      <section
        className="container"
        id="solution"
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <header>
          <span>
            <span className="desktop-only">
              <h2>Sensum Fotografia</h2>
            </span>
          </span>
          <p>Transformando seus sonhos em memórias eternas!</p>
        </header>
      </section>

      <section
        className="container py-lg flex flex-wrap justify-center gap-4"
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          gap: "20px",
        }}
      >
        {[
          {
            icon: Camera,
            title: "Eventos",
            content:
              "Registre cada detalhe e emoção dos seus eventos especiais com fotografias que contam histórias inesquecíveis.",
          },
          {
            icon: Tree,
            title: "Ensaios Externos",
            content:
              "Explore a beleza da natureza e cenários únicos enquanto capturamos momentos autênticos e inesquecíveis em ensaios ao ar livre.",
          },
          {
            icon: Wand,
            title: "Ensaios Tematicos",
            content:
              "Dê vida à sua imaginação com ensaios temáticos personalizados, onde cada detalhe é pensado para criar cenários únicos e memoráveis.",
          },
        ].map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            content={card.content}
          />
        ))}
      </section>
      <section id="testimonials">
        <header>
          <span>
            <p className="desktop-only">Sua história, nossa inspiração.</p>
            <h2>Porque você é a nossa melhor fotografia!</h2>
          </span>
          <p>
            Quem já fotografou com a gente sabe da qualidade do nosso trabalho.
            Estamos mudando a ideia de que ensaios fotográficos são sempre
            engessados ou impessoais. Acompanhe abaixo os depoimentos de quem
            confiou em nosso olhar e aprovou o resultado.
          </p>
        </header>
        <section className="carousel">
          <div className="carousel-content">
            <div className="carousel-card">
              <img src={t1} alt="Imagem perfil cliente" />{" "}
              <span className="testimony">
                <p>
                  "Sensibilidade, carinho e profissionalismo definem a Sensum.
                  As fotos ficaram maravilhosas e vão ficar para sempre no meu
                  coração."
                </p>
              </span>
              <span className="rating">
                <img src={cheia} alt="ícone estrela" width={22} height={20} />{" "}
                <img src={cheia} alt="ícone estrela" width={22} height={20} />{" "}
                <img src={cheia} alt="ícone estrela" width={22} height={20} />{" "}
                <img src={cheia} alt="ícone estrela" width={22} height={20} />{" "}
                <img
                  src={cheia}
                  alt="ícone estrela sem fundo"
                  width={20}
                  height={22}
                />{" "}
              </span>
              <span className="names">
                <p>Taylor Swift</p>
                <p>INDÚSTRIA MUSICAL</p>
              </span>
            </div>
            <div className="carousel-card">
              <img src={t2} alt="Imagem perfil cliente" />
              <span className="testimony">
                <p>
                  "Foi muito mais do que um ensaio, foi uma experiência única,
                  cheia de amor e cuidado. A Sensum conseguiu eternizar um dos
                  momentos mais especiais da minha vida! Cada foto transborda
                  amor e emoção. Gratidão eterna!"
                </p>
              </span>
              <span className="rating">
                <img src={cheia} alt="ícone estrela" width={22} height={20} />
                <img src={cheia} alt="ícone estrela" width={22} height={20} />
                <img src={cheia} alt="ícone estrela" width={22} height={20} />
                <img src={vazia} alt="ícone estrela" width={22} height={20} />
                <img
                  src={vazia}
                  alt="ícone estrela sem fundo"
                  width={20}
                  height={22}
                />
              </span>
              <span className="names">
                <p>Sabrina Carpenter</p>
                <p>PRINCESA DO POP</p>
              </span>
            </div>
            <div className="carousel-card">
              <img src={t3} alt="Imagem perfil cliente" />
              <span className="testimony">
                <p>
                  "O ensaio foi muito além das minhas expectativas... um
                  verdadeiro sonho registrado para sempre!"
                </p>
              </span>
              <span className="rating">
                <img src={cheia} alt="ícone estrela" width={22} height={20} />
                <img src={cheia} alt="ícone estrela" width={22} height={20} />
                <img src={cheia} alt="ícone estrela" width={22} height={20} />
                <img src={cheia} alt="ícone estrela" width={22} height={20} />
                <img
                  src={vazia}
                  alt="ícone estrela sem fundo"
                  width={20}
                  height={22}
                />
              </span>
              <span className="names">
                <p>Hozier</p>
                <p>O BARDO DO APOCALIPSE</p>
              </span>
            </div>
          </div>
          <div className="carousel-content">
            <div className="carousel-card">
              <img src={t4} alt="Imagem perfil cliente" />
              <span className="testimony">
                <p>
                  "Não tenho palavras para agradecer por transformarem meu sonho
                  em memórias eternas."
                </p>
              </span>
              <span className="rating">
                <img src={cheia} alt="ícone estrela" width={22} height={20} />
                <img src={cheia} alt="ícone estrela" width={22} height={20} />
                <img src={cheia} alt="ícone estrela" width={22} height={20} />
                <img src={vazia} alt="ícone estrela" width={22} height={20} />
                <img
                  src={vazia}
                  alt="ícone estrela sem fundo"
                  width={20}
                  height={22}
                />
              </span>
              <span className="names">
                <p>Lana Del Rey</p>
                <p>DEUSA DA MELANCOLIA</p>
              </span>
            </div>
            <div className="carousel-card">
              <img src={t5} alt="Imagem perfil cliente" />
              <span className="testimony">
                <p>
                  "Vocês eternizaram um dos momentos mais mágicos da minha vida.
                  Gratidão, Sensum Fotografia!"
                </p>
              </span>
              <span className="rating">
                <img src={cheia} alt="ícone estrela" width={22} height={20} />
                <img src={cheia} alt="ícone estrela" width={22} height={20} />
                <img src={cheia} alt="ícone estrela" width={22} height={20} />
                <img src={vazia} alt="ícone estrela" width={22} height={20} />
                <img
                  src={vazia}
                  alt="ícone estrela sem fundo"
                  width={20}
                  height={22}
                />
              </span>
              <span className="names">
                <p>Halsey</p>
                <p>RAINHA DO POP-ALT</p>
              </span>
            </div>
            <div className="carousel-card">
              <img src={t6} alt="Imagem perfil cliente" />
              <span className="testimony">
                <p>
                  "Só gratidão por eternizarem esse momento tão especial da
                  minha vida. Um trabalho feito com tanto amor, cuidado e
                  sensibilidade, que vai ficar para sempre no meu coração.”
                </p>
              </span>
              <span className="rating">
                <img src={cheia} alt="ícone estrela" width={22} height={20} />
                <img src={cheia} alt="ícone estrela" width={22} height={20} />
                <img src={cheia} alt="ícone estrela" width={22} height={20} />
                <img src={cheia} alt="ícone estrela" width={22} height={20} />
                <img
                  src={vazia}
                  alt="ícone estrela sem fundo"
                  width={20}
                  height={22}
                />
              </span>
              <span className="names">
                <p>Selena Gomez</p>
                <p>AMERICA'S SWEETHEART</p>
              </span>
            </div>
          </div>
        </section>
      </section>
      <section id="pricing" className="container">
        <header>
          <p className="desktop-only">Orçamentos e preços</p>
          <h2>Conheça nossos pacotes!</h2>
        </header>
        <section className="even-columns gap-1.5">
          <div className="pricing-card">
            <span className="plan">
              <h3>Privilegie</h3>
              <p>
                Um Lindo registro do inicio ao fim! Ideal para festas com até
                120 pessoas.
              </p>
            </span>
            <span className="price">
              <h2>R$ 899,00</h2>
              <p> /à vista.</p>
            </span>
            <Button text="Reserve!" secondary key="free" />
            <span className="hr" />
            <span className="features">
              <img src={check} alt="ícone check" width={24} height={24} />
              <p>Entrega digital</p>
            </span>
            <span className="features">
              <img src={check} alt="ícone check" width={24} height={24} />
              <p>4 horas de cobertura</p>
            </span>
            <span className="features">
              <img src={check} alt="ícone check" width={24} height={24} />
              <p>Todas as fotos editadas digitais</p>
            </span>
          </div>
          <div className="pricing-card premium">
            <span className="bonus">
              <p>OFERTA ESPECIAL!</p>
            </span>
            <span className="plan">
              <h3>Clássico</h3>
              <p>
                Ideal para eventos mais íntimos com até 30 pessoas e programação
                curta.
              </p>
            </span>
            <span className="price">
              <h2>R$ 599,00</h2>
              <p>/à vista</p>
            </span>
            <Button text="Reserve!" secondary key="premium" />
            <span className="hr" />
            <span className="features">
              <img src={check} alt="ícone check" width={24} height={24} />
              <p>Entrega digital</p>
            </span>
            <span className="features">
              <img src={check} alt="ícone check" width={24} height={24} />
              <p>2 horas de cobertura</p>
            </span>
            <span className="features">
              <img src={check} alt="ícone check" width={24} height={24} />
              <p>Todas as fotos editadas digitais</p>
            </span>
          </div>
          <div className="pricing-card">
            <span className="plan">
              <h3>Little Dream</h3>
              <p>
                Ideal para festas com até 80 pessoas com assessoria de um
                cerimonial!
              </p>
            </span>
            <span className="price">
              <h2>R$ 749,00</h2>
              <p>/à vista</p>
            </span>
            <Button text="Reserve!" secondary key="free" />
            <span className="hr" />
            <span className="features">
              <img src={check} alt="ícone check" width={24} height={24} />
              <p>Entrega digital</p>
            </span>
            <span className="features">
              <img src={check} alt="ícone check" width={24} height={24} />
              <p>3 horas de cobertura</p>
            </span>
            <span className="features">
              <img src={check} alt="ícone check" width={24} height={24} />
              <p>Todas as fotos editadas digitais</p>
            </span>
          </div>
        </section>
      </section>
      <section id="contacts">
        <header>
          <span>
            <p>Ficou com dúvida?</p>
            <h3>Fale Conosco!</h3>
          </span>
          <p>
            Queremos ouvir você! Compartilhe seus sonhos, dúvidas ou desejos —
            cada mensagem é um convite para criarmos juntos memórias cheias de
            emoção e sensibilidade. Fale com a gente e deixe seu momento ainda
            mais especial.
          </p>
        </header>
        <section>
          <form className="inputs" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Seu e-mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Sua mensagem"
              required
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
            />
            <Button text="Enviar Mensagem" />
            {feedback && <p style={{ marginTop: "1rem" }}>{feedback}</p>}
          </form>{" "}
        </section>
      </section>
      <section id="footer">
        <section className="footer-content">
          <div className="logomarca">
            <h4></h4>
            <div className="imgs">
              <img
                src={LogoMarca}
                alt="ícone campeão"
                width={120}
                height={150}
              />
            </div>
          </div>
          <div className="empresa">
            <h4>Empresa</h4>
            <p>
              Agradecemos sua visita à nossa página! Foi um prazer compartilhar
              um pouco do nosso trabalho com você.
              <br />
              Esperamos registrar momentos inesquecíveis ao seu lado em breve.
              Conte sempre com a Sensum Fotografia para eternizar suas melhores
              memórias!
            </p>
          </div>
          <div id="recursos">
            <h4>Recursos</h4>
            <ul>
              <li>Testimony</li>
              <li>IMgs</li>
              <li>Contato</li>
            </ul>
          </div>
        </section>
      </section>
      <section className="copy">
        <span>
          <p>
            Feito com amor na aula de Programação Web🖤 ©2025- Todos os direitos
            reservados.
          </p>
        </span>
      </section>
    </>
  );
}
