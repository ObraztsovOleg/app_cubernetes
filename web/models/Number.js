export default m => {
    const NumberSchema = m.Schema({
      number: {
        type: Number,
        required: [true, 'You need to pass a number']
      }
    });
  
    return m.model('Num', NumberSchema);
  }