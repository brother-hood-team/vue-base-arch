import { $i18n } from "@/main";
import validate from 'validate.js';

validate.validators.email.message = $i18n.t('validations.email');
validate.validators.presence.message = $i18n.t('validations.required');
validate.validators.equality.message = $i18n.t('validations.equality');

export default validate;