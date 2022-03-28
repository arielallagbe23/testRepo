const URL = 'https://gw.hml.api.enedis.fr/v1/collective_self_consumption/agreements/ACC00000543/definitive_load_curves?start=14/08/2021&end=15/08/2021&type=cons, prod, autocons, surplus, complement'

const data = {end: '2021-11-25', start: '2021-11-21', type: 'cons, prod, autocons, surplus, complement'}

let x = new Headers();
x.append('Accept','application/json')
x.append('Authorization','Bearer T4ASfAaQT2hXnpvxWQwFYzr2DeK2mHO0SRR7tBvRRUGg1nf0cb3GAQ')

let req = new Request(URL, {
    method: 'GET',
    headers: x,
});

//Object.keys(params).foreach(key =>url.searchParams.append(key, params[key]))

fetch(req)
    .then( (response)=>{
        if(response.ok){
            return response.json();
        }else{
            throw new Error('BAD http ') 
        }
    })
    .then( (jsonData)=>{

    })
    .catch( (err) =>{
        console.log('ERROR:',err.message);
    });