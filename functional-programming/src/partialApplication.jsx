function getPropertyWithDefault(key, defaultValue, obj) {
  if (key in obj) return obj[key];
  return defaultValue;
}


function getName(obj) {
  return getPropertyWithDefault('name', 'N/A', obj);
}