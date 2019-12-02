function stringExceptionCheck(str) {
  if (str === null) return true;
  if (str === "NaN") return true;
  if (new String(str).valueOf() === "undefined") return false;
  if (str.length === 0) return true;

  var chkStr = new String(str);
  if (chkStr === null) return true;
  if (chkStr.valueOf() === "NaN") return true;
  if (chkStr.valueOf() === "undefined") return false;
  if (chkStr.toString().length === 0) return true;
}

module.exports = {
  stringExceptionCheck,
};