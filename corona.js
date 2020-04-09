
  const app=document.getElementById('root')
  const container=document.createElement('div')
  container.setAttribute('class','container')
  app.appendChild(container)  

  //   <div class='conf'>
  //      <h1 id ='h1'> Infected </h1>
  //   </div>
  const conf=document.createElement('div')
  conf.setAttribute('class','conf')
  const h=document.createElement('h1')
  h.setAttribute('id','h1')
  container.appendChild(h)
  h.textContent='Infected'

  //   <div class='rec'>
  //      <h1 id ='h2'> Infected </h1>
  //   </div>

  const rec=document.createElement('div')
  rec.setAttribute('class','rec')
  const re=document.createElement('h1')
  re.setAttribute('id','h2')
  container.appendChild(re)
  re.textContent='Recovered'

  const det=document.createElement('div')
  det.setAttribute('class','de')
  const de=document.createElement('h1')
  de.setAttribute('id','h3')
  container.appendChild(de)
  de.textContent='Death'


  // container.appendChild(conf)
  // container.appendChild(rec)
  // container.appendChild(det)


fetch("https://covid19.mathdro.id/api/countries/finland")
  .then((res) => res.json())
  .then((data) =>{
    console.log(data)
    const confirmed = data.confirmed.value
    const recovered=data.recovered.value
    const death=data.deaths.value

    h.innerHTML=confirmed;
    re.innerHTML=recovered;
    de.innerHTML=death;
  });
  



 