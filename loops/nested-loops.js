// The goal is to print this knitting pattern to the console:
// -|-|-
// |-|-|
// -|-|-

const knittingPattern = () => {
  // first, declare the variable where we'll store the result
  const rows = [];
  // then declare any other variables we'll need
  const stitches = ['-', '|'];
  let row = '';
  let prevStitch = '';
  let aboveStitch = '';

  // the outer loop creates, stores and logs every row
  for (let i = 0; i < 3; i += 1) {

    // reset the row before adding each new lot of stitches
    row = '';
    // the inner loop creates a single row
    for (let j = 0; j < 5; j += 1) {
     
      prevStitch = row[j - 1] ? row[j - 1] : null;
      aboveStitch = rows[i - 1] ? rows[i - 1][j] : null;
      
      // if prev row exists and the above stitch is a dash
      // or if prev stitch exists and the prev stitch is a dash
      if (
        (aboveStitch && aboveStitch === stitches[0]) ||
        (prevStitch && prevStitch === stitches[0])
      ) {
        // concatenate a pipe
        row += stitches[1];
      } else {
        // concatenate a dash
        row += stitches[0];
      }
    }

    rows.push(row);
    console.log(row);
  }
};

knittingPattern();