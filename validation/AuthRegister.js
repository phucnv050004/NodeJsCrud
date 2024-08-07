import vine from '@vinejs/vine';

const Schema = vine.object({
    email:vine.string().email(),
    password:vine.string().minLength(8).maxLength(32),
  
});
const validateRegister = vine.compile(Schema);

export default validateRegister;