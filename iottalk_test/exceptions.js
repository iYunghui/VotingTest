/* eslint max-classes-per-file: ["error", 42] */

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

exports.ArgumentError = class ArgumentError extends CustomError { }

exports.RegistrationError = class RegistrationError extends CustomError { }
