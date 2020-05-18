class player {
    constructor(){
        var heightMain = document.getElementById("player");
        heightMain.style.height = screen.height + "px";
        if(screen.width <500){
            heightMain.style.width = screen.width + "px";

        }
        var heightDiv = document.getElementById("content");
        heightDiv.style.height = screen.width - 300  + "px";
    }
}
onload = new player();


// class buttons 


class Audio_player {
    constructor() {
       this.audio_file = document.getElementById("audio_file");
       this.title_audio = document.getElementById("title_audio");
       this.play_button = document.getElementById("play");
       this.list_color = document.getElementById("list-color");
    
       this.isPlayed;

       this.play_button.addEventListener("click", ()=> {
           this.play_pause() 
        });
           
       this.play_pause();

       this.names_radio = [];
        this.names_radio[0]= "9090 Egypt";
        this.names_radio[1]= "Nojoom Fm";
        this.names_radio[2]= "Music Hits";
        this.names_radio[3]= "Quran Misr";

        
       this.source_audio = [];
        this.source_audio[0] = "http://9090streaming.mobtada.com/9090FMEGYPT";
        this.source_audio[1] = "http://178.32.62.154:8957/;stream.mp3";
        this.source_audio[2] = "https://ice31.securenetsystems.net/NOGOUM?playSessionID=2E3469A8-05AA-704E-148E5E21B9D98517";
        this.source_audio[3] = "https://livestreaming5.onlinehorizons.net/hls-live/Qurankareem/_definst_/liveevent/livestream.m3u8";
       
        this.server = 0;

       this.setResource();
      
        document.getElementById("next").addEventListener("click", ()=> {
                if(this.server < this.source_audio.length -1) {
                    ++this.server;
                    this.isPlayed = false;
                }
               this.setResource();    
        });
        document.getElementById("back").addEventListener("click", ()=> {
            if(this.server > 0){
                  --this.server;
                  this.isPlayed = false;
            }
          this.setResource(); 
        });
              
    }
    
        
    setResource(){
        this.audio_file.src = this.source_audio[this.server];
        this.title_audio.innerHTML = this.names_radio[ this.server];
        
       this.play_pause()
    }


    play_pause(){
        if (this.isPlayed == false){
            this.play_button.src ="pause.png";
            this.audio_file.play();
            this.isPlayed = true;
        }else {
            this.play_button.src ="play.png";
            this.audio_file.pause();
            this.isPlayed = false;
        }
    }

}
onload = new Audio_player();



