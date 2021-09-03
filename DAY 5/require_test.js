class FingerChips {
  print() {
    console.log("In require_text.js, enjoying french fries :p");
  }
}

class Chai {
  print() {
    console.log("Chai peelo frandss.");
  }
}

module.exports = {Chai, FingerChips};
/* module.exports = Chai, FingerChips; does not work, only cahi gets exported
Hence, output-> 
Chai peelo frandss.
undefined
Chai peelo frandss.
undefined */
// module.exports = FingerChips;

/*
module.exports = Chai;
module.exports = FingerChips;
Upon writing like this the latest class exported  is considered by require.
Hence, output-> 
In require_text.js, enjoying french fries :p
undefined
In require_text.js, enjoying french fries :p
undefined
*/
