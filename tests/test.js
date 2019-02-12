module.exports = {
    'Demo test': function (client) {
        client.perform((client, done)=>{
            setTimeout(() => {
                console.log('log: start demo');
                done();
            }, 5000);
        });
    },
    'End of demo': function (client) {
        client.perform(()=>{
            console.log('log: End of demo');
        });
    }
};