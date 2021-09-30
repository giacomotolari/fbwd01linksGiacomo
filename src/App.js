import './App.scss';
import links from './data/links.json';
function App() {
  return (
    <div className='App'>
      <ul>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <a target='_blank' href={link.url} rel='noreferrer'>
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
