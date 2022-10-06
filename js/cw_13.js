// https://www.codewars.com/kata/51fda2d95d6efda45e00004e
// Codewars style ranking system

class User {
    constructor() {
      this._rankValues = [-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8];
      this._rank = -8;
      this._progress = 0;
    }  
    
    get rank() {
      return this._rank;
    }
    
    set rank(numberOfLevelsUp) {
      const totalRank = this._rankValues[this._rankValues.indexOf(this._rank) + numberOfLevelsUp];
      !totalRank ? this._rank = this._rankValues[this._rankValues.length - 1] : this._rank = totalRank;
    }
    
    get progress() {
      return this._progress;
    }
    
    set progress(pointsToBeAdded) {
      const totalPoint = this._progress + pointsToBeAdded;
      const numberOflevelsUp = Math.floor(totalPoint/100);
      let rest = totalPoint % 100;
      this.rank = numberOflevelsUp;
      if (this._rank === this._rankValues[this._rankValues.length - 1]) rest = 0;
      this._progress = rest;
    }
    
    // Private method for calculating progress points
    _calcProgressPoints(taskRank) {
      const diff = this._rankValues.indexOf(this._rank) - this._rankValues.indexOf(taskRank);
      return diff >= 1 ? 1 : diff == 0 ? 3 : 10*diff*diff; // changed according to reported issues in comments
    }
    
    incProgress(taskRank) {
      if(!this._rankValues.includes(taskRank)) throw new Error('Wrong ranking of the task provided');
      this.progress = this._calcProgressPoints(taskRank);
    }
  }