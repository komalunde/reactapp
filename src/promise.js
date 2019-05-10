

let myPromise1 = new Promise((resolve,reject)=> {
	set Timeout(() => {
		resolve('Good to go!');
	},1000);
		
	setTimeout(()=> {
		reject('ooh uhh');
	},500);		
});


myPromise1.then((res)=> {
	console.log(res);
	}, (err) => {
		console.log(err);
}); 
.catch((err) =>{
	console.log(err);
	
});
//multiple promises

let myPromise2 = new Promise((resolve,reject)=>{
	
	set Timeout(() => {
		resolve('resolve promise 2 the promising');
	},1500);
	
});

Promise.all([myPromise1,myPromise2])
	.then(()=>{
		
		console.log(data);
	})
	
	.catch((err)=>{
		console.log(err);
	});