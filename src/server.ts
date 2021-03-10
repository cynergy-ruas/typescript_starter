import app from "./app";

app.get('/',(req,res) => {
    res.send('This is the Starter File');
});

app.listen(8080,() => console.log('Server is up and running bro'));
