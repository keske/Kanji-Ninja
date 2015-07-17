function merge(target, source) {

  /* Merges two (or more) objects,
     giving the last one precedence */

  if (typeof target !== 'object') {
    target = {};
  }

  for (var property in source) {

    if (source.hasOwnProperty(property)) {

      var sourceProperty = source[property];

      if (typeof sourceProperty === 'object') {
        target[property] = merge(target[property], sourceProperty);
        continue;
      }

      target[property] = sourceProperty;

    }

  }

  for (var a = 2, l = arguments.length; a < l; a++) {
    merge(target, arguments[a]);
  }

  return target;
};

module.exports = merge;