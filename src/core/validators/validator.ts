import {
  ConfirmPasswordconstraint, Emailconstraint,
  Lettersconstraint, LettersForRolandconstraint,
  Numberconstraint, NumberGreaterThanZeroconstraint, NumberIntegerconstraint,
  Requiredconstraint,RequiredSelectedconstraint
} from "./constraints";
import validate from './validatorsDefaults';

export interface IValidator {
  value: string;
  result: any;
}

export class IPasswordFields {
  private password: string;
  private passwordConfirm: string;

  constructor(password: string, passwordConfirm: string) {
    this.password = password;
    this.passwordConfirm = passwordConfirm;
  }
}

interface ICommand {
  execute(value: string, constraint: any): void;

  execute(value: IPasswordFields, constraint: any): void;
}

export default class Validator implements ICommand {
  get validate() {
    return this.result
  }

  public static of(value: string): Validator {
    return new Validator(value);
  }

  private value: any;
  private result: any;

  private constructor(value: string) {
    this.value = value;
    this.result = null;
  }

  public execute(value: string, constraint: any): void;
  public execute(value: IPasswordFields, constraint: any): void;
  public execute(value: any, constraint: any) {
    if (value instanceof IPasswordFields) {
      const object_constraint = validate(value, constraint);
      if (object_constraint) {
        const key = Object.keys(object_constraint);
        this.result = (object_constraint) ? object_constraint[key[0]][0] : false;
      } else {
        this.result = (object_constraint) ? object_constraint[0] : false;
      }
    } else {
      const exec_constraint = validate.single(value, constraint);
      this.result = (exec_constraint) ? exec_constraint[0] : false;
    }
  }

  public required(): Validator {
    return this.checkResult(this.value, 'required') || this;
  }

  public requiredSelected(): Validator {
    return this.checkResult(this.value, 'requiredSelected') || this;
  }

  public email(): Validator {
    return this.checkResult(this.value, 'email') || this;
  }

  public numericInteger(): Validator {
    return this.checkResult(this.value, 'numericInteger') || this;
  }

  public numberGreaterThanZero(): Validator {
    return this.checkResult(this.value, 'numberGreaterThanZero') || this;
  }

  public numeric(): Validator {
    return this.checkResult(this.value, 'numeric') || this;
  }

  public passwordConfirm(password: any): Validator {
    const passForm = new IPasswordFields(password, this.value);
    return this.checkResult(passForm, 'passwordConfirm') || this;
  }

  public lettersForRoland(): Validator {
    return this.checkResult(this.value, 'lettersForRoland') || this;
  }

  public letters(): Validator {
    return this.checkResult(this.value, 'letters') || this;
  }

  private getConstraint(constraint: string): any {
    switch (constraint) {
      case 'required':
        return Requiredconstraint;
      case 'requiredSelected':
        return RequiredSelectedconstraint;
      case 'email':
        return Emailconstraint;
      case 'numericInteger':
        return NumberIntegerconstraint;
      case 'numeric':
        return Numberconstraint;
      case 'passwordConfirm':
        return ConfirmPasswordconstraint;
      case 'lettersForRoland':
        return LettersForRolandconstraint;
      case 'letters':
        return Lettersconstraint;
      case 'numberGreaterThanZero':
        return NumberGreaterThanZeroconstraint;
      default:
        'Unknow constraint'
    }
  }

  private checkResult(value: any, constraint: string) {
    if (!this.result) {
      if (value) {
        if (value.id) {
          this.execute(value.id, this.getConstraint(constraint));
          return this;
        } else {
          this.execute(value, this.getConstraint(constraint));
          return this;
        }
      } else {
        this.execute(value, this.getConstraint(constraint));
        return this;
      }
    }
  }
}
