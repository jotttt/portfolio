import React from 'react';
import logo from './logo.svg';
import avatar from './avatar.png';
import './App.css';

function App() {
return (
<div className="App">
  <img src={logo} className="App-logo" alt="logo" />
  <div className="App-circles">
    <div className="App-circle-1"></div>
    <div className="App-circle-2"></div>
    <div className="App-circle-3"></div>
    <div className="App-circle-4"></div>
  </div>
  <header className="App-header">
    <a className="App-link" href="/about" rel="noopener noreferrer">
      About
    </a>
    <a className="App-link" href="/works" rel="noopener noreferrer">
      Works
    </a>
  </header>
  <main className="App-content">
    <div className="App-avatar">
      <img src={avatar} alt=""/>
    </div>
    <div className="App-card">
      <h1>Lorem ipsum</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quibusdam? Dolore enim, ipsum voluptas velit repudiandae ex maxime, consectetur esse sapiente cum magnam maiores nemo? Corporis repellendus recusandae nihil dolor numquam blanditiis, voluptatum quidem ad tempore sint vero eos voluptatem non odio molestias nostrum perferendis molestiae mollitia quod unde odit porro sunt excepturi consequatur! Quidem placeat atque nemo sequi, vitae hic. </p>
      <h1>Asperiores consequuntur</h1>
      <p>Et reiciendis ad, reprehenderit molestias aspernatur praesentium eveniet, culpa velit esse enim odit dignissimos magni laboriosam cum explicabo soluta accusantium iste architecto. Dolore corporis dicta quod labore unde quae, quidem esse repudiandae ab magni natus, sequi eum? Magni ex ducimus labore totam sequi nesciunt quaerat debitis iste vitae aliquam ea iusto placeat repellendus, dolorum tempora autem ipsum reprehenderit unde fugit a molestiae ut at? Quibusdam minima similique, aliquam quia voluptatibus totam iste dignissimos minus voluptas, ipsa explicabo numquam iusto, qui ducimus. Asperiores consequuntur quo vel quis corrupti nihil, ab veniam aliquam molestias nemo est porro iste totam eum deleniti alias recusandae reprehenderit saepe obcaecati natus et. Quisquam quis animi consequatur vitae corrupti eius dolores dolore porro totam nemo perferendis, est sequi asperiores voluptatum beatae nisi doloremque. Esse quam earum omnis atque eveniet eaque corrupti sint eius, facilis impedit qui.</p>
    </div>
  </main>
</div>
);
}

export default App;