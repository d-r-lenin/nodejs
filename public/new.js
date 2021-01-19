const btn1=document.querySelector('#button1');
const btn2=document.querySelector('#button2');
const hi=document.querySelector('#hi-score');
const retrive=document.querySelector('#button3');
const hiRetrive=document.querySelector('#button4');
const p=document.querySelector('p');


btn1.addEventListener('click',async()=>{
	await axios.post('/count/high-score',{"highScore":parseInt(hi.value)});
})

btn2.addEventListener('click',async()=>{
	await axios.post('/count/score',{"count":1});
})



retrive.addEventListener('click',async()=>{
	const data=await axios.get('/get/score');
	console.dir(data)
	p.innerText=data.data.count;
})

hiRetrive.addEventListener('click',async()=>{
	const data=await axios.get('/get/high-score');
	console.dir(data)
	p.innerText=data.data.highScore;
})
