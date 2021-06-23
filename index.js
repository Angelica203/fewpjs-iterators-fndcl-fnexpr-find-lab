superbowlWin = (record) =>{
    let result = record.find( record => record.result === "W")
    return !!result ? result.year : undefined
}

// record.find( function(s) {return s ===win})

// // const titleCased = (input) => {
// //     return tutorials.map(tutorial => {
// //       return tutorial.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// //     })
  