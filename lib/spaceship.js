function Spaceship(name,crewmembers,phasers,shields){
  this.name = name;
  this.phasers = 5;
  this.shields = 4;
  this.cloaked = false;
  this.warpDrive = 'disengaged';
  this.docked = true;
  this.phasersCharge = 'uncharged';

  if (crewmembers.length != 0){
    this.docked = false;
  };
  assignCrew(crewmembers, this);
};

function assignCrew(crewmembers, ship){
  crewmembers.forEach(function(member){
    member.currentShip = ship;
  });
};