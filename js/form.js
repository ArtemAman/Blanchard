var selector = document.getElementById("tel_id");

var im = new Inputmask("+7(999)999-99-99");
im.mask(selector);


new JustValidate('.contacts__form', {
  rules: {
    name: {
      required: true,
      minLength:2,
      maxLenght:20
    },
    tel: {
      required: true,
      function (name, value)  {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length ===10

      }
    },    
  },
  messages: {
    name: {
      minLength: 'Длина имени не может быть менее 2 символов',
      maxLength: 'Длина имени не может быть более 20 символов',
      required: 'Это обязательное поле для заполнения, оно не может быть пустым'
    },
    tel: 'Необходимо ввести телефон в формате (999)999-99-99',
    
  },
});
