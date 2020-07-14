import { $i18n } from "@/main";
const Emailconstraint = {
	email: true,
};

const Requiredconstraint = {
	presence: { allowEmpty: false },
};

const NumberIntegerconstraint = {
	numericality: {
		onlyInteger: true,
		strict: true,
		noStrings: true
	}
};

const Numberconstraint = {
	numericality: {
		strict: true,
		noStrings: false,
		message: 'Este campo sólo acepta números'
	}
};

const NumberGreaterThanZeroconstraint = {
	numericality: {
		strict: true,
		noStrings: false,
		greaterThan: 0,
		message: 'Este campo sólo acepta números > 0'
	}
};

const ConfirmPasswordconstraint = {
	"passwordConfirm": {
		equality: "password",
	}
};

const RequiredSelectedconstraint = {
	presence: { allowEmpty: false },
	exclusion: {
		within: [-1],
		message: $i18n.t('validations.required')
	}
}

const StrongerPassword = {
	length: { minimum: 8 },
	format: {
		pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])",
		message: "",
	}
}

const LettersForRolandconstraint = {
	format: {
		pattern: "(([a-zA-ZñÑáéíóúÁÉÍÓÚ])+([\-])?)*[a-zA-ZñÑáéíóúÁÉÍÓÚ]+",
		message: $i18n.t('validations.lettersForRoland'),
	}
}

const Lettersconstraint = {
	format: {
		pattern: "(([a-zA-ZñÑáéíóúÁÉÍÓÚ])+([' '])?)*[a-zA-ZñÑáéíóúÁÉÍÓÚ]+",
		message: $i18n.t('validations.letters'),
	}
}

export {
	Emailconstraint, Requiredconstraint, NumberIntegerconstraint,
	Numberconstraint, ConfirmPasswordconstraint, RequiredSelectedconstraint,
	StrongerPassword, LettersForRolandconstraint, Lettersconstraint,
	NumberGreaterThanZeroconstraint
}
