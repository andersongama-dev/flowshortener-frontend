import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [url, seturl] = useState();

  async function shortener() {
    try {
      const response = await fetch("http://localhost:8000/api/shorten", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "url": url }),
      })

      if(!response.ok) {
        throw new Error('Erro na requisição');
      }

      const data = await response.json
      console.log(data)

    } catch(erro) {
      console.error('Erro ao enviar:', erro);
    }
    
  }

  return (
    <main className="shortener-page">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <nav className="navbar">
        <div className="brand">
          <span className="brand-mark">
            ↗
          </span>
          <span>shrtly</span>
        </div>

        <div className="nav-links">
          <a href="#features">Recursos</a>
          <a href="#stats">Estatísticas</a>
          <button className="nav-button">Entrar</button>
        </div>
      </nav>

      <section className="hero">
        <div className="eyebrow">
          <span className="status-dot" />
          Encurtador inteligente de URLs
        </div>

        <h1>
          Menos URL.
          <br />
          <span>Mais impacto.</span>
        </h1>

        <p className="hero-description">
          Transforme links longos em URLs curtas, memoráveis e fáceis
          de compartilhar.
        </p>

        <div className="url-card">
          <div className="input-wrapper">
            <span className="input-icon">⌁</span>

            <input
              type="url"
              onChange={(event) => seturl(event.target.value)}
              placeholder="Cole sua URL aqui..."
              aria-label="URL para encurtar"
            />
          </div>

          <button className="shorten-button" onClick={shortener}>
            Encurtar
            <span>↗</span>
          </button>
        </div>

        <div className="trust-row">
          <span>
            <span className="check">✓</span>
            Grátis para começar
          </span>

          <span>
            <span className="check">✓</span>
            Sem cadastro obrigatório
          </span>

          <span>
            <span className="check">✓</span>
            Links permanentes
          </span>
        </div>
      </section>

      <section className="dashboard-preview" id="stats">
        <div className="preview-header">
          <div>
            <span className="section-label">SEU PAINEL</span>
            <h2>Links recentes</h2>
          </div>

          <button className="view-all">
            Ver todos <span>→</span>
          </button>
        </div>

        <div className="links-table">
          <div className="table-head">
            <span>LINK</span>
            <span>CLIQUES</span>
            <span>CRIADO</span>
            <span />
          </div>

          <div className="link-row">
            <div className="link-info">
              <div className="link-icon purple">↗</div>

              <div>
                <strong>shrtly.to/launch</strong>
                <small>example.com/product/launch...</small>
              </div>
            </div>

            <strong>2.481</strong>
            <span>Hoje</span>

            <button className="copy-button" aria-label="Copiar link">
              ⧉
            </button>
          </div>

          <div className="link-row">
            <div className="link-info">
              <div className="link-icon orange">↗</div>

              <div>
                <strong>shrtly.to/design</strong>
                <small>example.com/articles/design...</small>
              </div>
            </div>

            <strong>1.842</strong>
            <span>Ontem</span>

            <button className="copy-button" aria-label="Copiar link">
              ⧉
            </button>
          </div>

          <div className="link-row">
            <div className="link-info">
              <div className="link-icon blue">↗</div>

              <div>
                <strong>shrtly.to/hello</strong>
                <small>example.com/welcome-to-our...</small>
              </div>
            </div>

            <strong>927</strong>
            <span>02 set.</span>

            <button className="copy-button" aria-label="Copiar link">
              ⧉
            </button>
          </div>
        </div>
      </section>

      <section className="feature-grid" id="features">
        <div className="feature-card feature-main">
          <div className="feature-icon">✦</div>

          <span className="section-label">ANALYTICS</span>

          <h3>
            Entenda o que acontece
            <br />
            depois do clique.
          </h3>

          <p>
            Acompanhe cliques, localização, dispositivos e muito mais
            em tempo real.
          </p>

          <div className="mini-chart">
            <div className="chart-line">
              <span style={{ height: "32%" }} />
              <span style={{ height: "45%" }} />
              <span style={{ height: "38%" }} />
              <span style={{ height: "62%" }} />
              <span style={{ height: "54%" }} />
              <span style={{ height: "78%" }} />
              <span style={{ height: "68%" }} />
              <span style={{ height: "94%" }} />
            </div>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-top">
            <div className="feature-icon green">✓</div>
            <span>01</span>
          </div>

          <h3>Links rápidos</h3>

          <p>
            Crie URLs curtas em segundos e compartilhe onde quiser.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-top">
            <div className="feature-icon pink">⌁</div>
            <span>02</span>
          </div>

          <h3>Domínio personalizado</h3>

          <p>
            Use sua própria marca para criar links ainda mais
            memoráveis.
          </p>
        </div>
      </section>

      <footer>
        <div className="brand">
          <span className="brand-mark">↗</span>
          <span>shrtly</span>
        </div>

        <span>© 2027 shrtly. Simples por design.</span>
      </footer>
    </main>
  );
}

export default App;
