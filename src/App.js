import { Content } from './Content';
import React from 'react';

function App() {
  return (
    <>
      <div className="main-content">
        <Header />
        <Content />
      </div>
      <Footer />
    </>
  );
}

export default App;

function Header() {
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Anime Ranking
          </h1>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="login-fields">
        <div className="field">
          <div className="control">
            <input className="input" type="text" />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <input className="input" type="password" />
          </div>
        </div>

        <input className="button is-primary" type="submit" value="Login" />
      </div>
    </footer>
  )
}