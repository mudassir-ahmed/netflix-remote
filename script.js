
// WARNING: This could break in a future Netflix website update
var netflixPlayer = {
  isPlaying: function() {
    // Based on:
    // class button-nfplayerPlay appears when playing
    // class button-nfplayerPause appears when paused
    // class button-nfplayerPlay disappears when button-nfplayerPause appears
    // class button-nfplayerPause disappears when button-nfplayerPlay appears
    // pause class appears i.e. user has ability to pause since its playing
    return !!document.getElementsByClassName('button-nfplayerPause')[0];
  },
  play: function() {
    if ( !this.isPlaying() ) {
      document.getElementsByClassName('button-nfplayerPlay')[0].click();
    } else {
      console.log("Can't play it if it's already playing");
    }
  },
  pause: function() {
    if ( this.isPlaying() ) {
      document.getElementsByClassName('button-nfplayerPause')[0].click();
    } else {
      console.log("Can't pause it if it's already paused");
    }
  }
}

// Hardware used:
// Link: https://www.amazon.co.uk/gp/product/B011454EUG/
// Restar LP0005 RF 2.4GHz Wireless USB PowerPoint PPT Presenter Remote Control Laser Flip Pen

document.body.addEventListener("keydown", function(e) {

  // IDEA: use a switch block which allows more functionality to be added later
  // in a more readable way

  if (e.keyCode == 34) { // down (next) pressed on presentation clicker
    netflixPlayer.play();
  }

  if (e.keyCode == 33) { // up (prev) pressed on pressentation clicker
    netflixPlayer.pause();
  }

});
