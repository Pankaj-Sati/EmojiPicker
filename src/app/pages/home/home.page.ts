import { Component, EventEmitter } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { EmojiPickerModalComponent } from 'src/app/components/emoji-picker-modal/emoji-picker-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  newmessage:string=''; //Chat message
  showEmojiPicker=true; //To show/hide the emoji picker from footer

  constructor(private modalCtrl:ModalController,private navCtrl:NavController) 
  {

    //On Keyboard up event, hide the emoji picker
    window.addEventListener('keyboardWillShow', (event) => {
      // Describe your logic which will be run each time when keyboard is about to be shown.
      console.log('keyboardWillShow');
      this.showEmojiPicker=false;
    });
  }


  async openEmojiPicker()
  {

    const modal=await this.modalCtrl.create(
      {
        component:EmojiPickerModalComponent,
        showBackdrop:true,
        componentProps:
        {
          isInModal:true
        }
      });

      modal.present();

      //Listen to emoji select event emmited from the modal
     // modal.in

    

      modal.onDidDismiss().then(event=>
        {
          console.log('Got Data From Emoji Picker',event);
          if(event!=undefined && event.data!=undefined)
          {
            this.addEmoji(event.data); //Add emoji to the newmessage variable
          }
        });
  }

  addEmoji(event)
  {
    this.newmessage=this.newmessage+event.data; //Concatinate the emoji with text
  }

  openNewpage()
  {
    this.navCtrl.navigateForward('/demo');
  }

}
