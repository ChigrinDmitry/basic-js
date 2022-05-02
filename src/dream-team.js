const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(members) {

  let sortNames = [];
  let dreamTeamResult = '';

  if(!Array.isArray(members)) return false;

  members.forEach(member => {
    if ( typeof member === 'string') {
      sortNames.push(member.trim().toUpperCase()[0])
    }
  });

  sortNames.sort().forEach(item => dreamTeamResult += item);

  return dreamTeamResult;

}

module.exports = {
  createDreamTeam
};
