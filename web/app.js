export default (express, bodyParser, CORS, Num) => {
  const app = express();
  
  app
    .use((req, res, next) => res.status(200).set(CORS) && next())
    .use(bodyParser.urlencoded({ extended: true }))
    .get('/', async (req, res) => {
      res.send(await Num.find());
    })
    .post('/', async (req, res) => {

      const { number } = req.body;
      var new_number = String(Number(number) + 1);

      try {
        if (String(await Num.find({number: Number(number)})) != '') {
          res.send("You've already sent this number");
        } else if (String(await Num.find({number: Number(number) + 1})) != '') {
          res.send("You've sent the number that less then one of the numbers in DB by 1, that you'd sent before");
        } else {
          const newNum = new Num({ number });

          await newNum.save(); 
          res.send(new_number);
        }
      }catch(e) {
        res.send('Your request is not correct');
      }
    });

  return app;
}