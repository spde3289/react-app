import './App.css';

function Header(props){
  return (
  <header>
      <h1><a href="/" onClick={function(e){
        e.preventDefault();
        props.onChangeMode()
      }}>{props.title}</a></h1>
  </header>
  );
};

function Nav(props){
  const lis = []
  for(let i =0;i<props.topics.length;i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a id={t.id} href={'./read/'+t.id} onClick={e=>{
      e.preventDefault();
      props.onChangeMode(e.target.id)
    }}>{t.title}</a></li>)
  }
  return (
  <nav>
    <ol>
      {lis}
    </ol>
  </nav>  
  );
};

function Article(props){
  return (
  <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
  );
};

function App(){
  const topics = [
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'},
    {id:3, title:'js', body:'js is...'}
  ];
  
  return (
    <div>
      <Header title="REACT" onChangeMode={function(){
        alert('header');
      }}></Header>
      <Nav topics={topics} onChangeMode={id=>{
        alert(id)
      }}></Nav>
      <Article title="welcome" body="hello, Web"></Article>
    </div>
  );
};

export default App;