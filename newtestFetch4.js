const uri = 'https://gw.hml.api.enedis.fr/v1/collective_self_consumption/agreements/ACC00000537/definitive_load_curves';

let x = new Headers();
x.append('Accept','application/json')
x.append('Authorization','Bearer rFPb1mt3hjQ5fqc1ZgWtnEni80OXvYoaPyDsHGH0CKvVFhXU461Hrb')

let req = new Request(uri, {
    method: 'GET',
    headers: x,
    end: '2021-11-25',
    start: '2021-11-21',
    type: 'cons, prod, autocons, surplus, complement'
});

fetch(req)
    .then( (response)=>{
        if(response.ok){
            return response.json();
        }else{
            throw new Error('BAD http stuff') 
        }
    })
    .then( (jsonData)=>{

    })
    .catch( (err) =>{
        console.log('ERROR:',err.message);
    });