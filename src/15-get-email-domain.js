/**
 * Given an email address, return it's domain.
 *
 * @param {String} _email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(_email) {
  const dom = _email.split('@'); // разделем стрингу по "@" на массивы
  return dom[dom.length - 1]; // возвращаем именно последний массив
}

module.exports = getEmailDomain;
