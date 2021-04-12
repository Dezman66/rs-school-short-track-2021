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
  const dom = _email.split('@');
  return dom[dom.length - 1];
}

module.exports = getEmailDomain;
