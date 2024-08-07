import vine from '@vinejs/vine';

const Schema = vine.object({
    name:vine.string().minLength(1),
    ven:vine.string().minLength(1),
    brand:vine.string().minLength(1),
    desc:vine.string().minLength(1),
    dom:vine.date({
        formats:['YYYY-MM-DD']
    })
});
const validateCar = vine.compile(Schema);

export default validateCar;