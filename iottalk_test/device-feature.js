var ArgumentError = require("./exceptions").ArgumentError;

module.exports = class _default{
  constructor(params) {
    this.DFName = params.DFName;
    if (!this.DFName) {
      throw new ArgumentError('device feature name is required.');
    }

    this.DFType = params.DFType; // idf | odf
    if (this.DFType !== 'idf' && this.DFType !== 'odf') {
      throw new ArgumentError(`${this.DFName} DFType must be "idf" or "odf"`);
    }

    this.paramType = params.paramType || [null];

    this.onData = null;
    if (params.DFType === 'odf' && params.onData) this.onData = params.onData;

    this.pushData = null;
    if (params.DFType === 'idf' && params.pushData) this.pushData = params.pushData;
  }
}