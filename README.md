# nightwatch
Just a nightwatch to makesure wait on every steps!

Use:

```
"First Step" : function(){
  client.perform((client, done)=>{
    setTimeout(()=>console.log('firstStep'), 5000);
    done();
  })
},
"Second Step" : function() {
  console.log('Second Step');
}
```

to make sure the second step will be executed after the first step executed for 5 seconds!

Thanks!
