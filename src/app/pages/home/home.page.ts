import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EmojiPickerModalComponent } from 'src/app/components/emoji-picker-modal/emoji-picker-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalCtrl:ModalController) 
  {

  }


  async openEmojiPicker()
  {
    const modal=await this.modalCtrl.create(
      {
        component:EmojiPickerModalComponent,
        showBackdrop:true
      });

      modal.present();

      modal.onDidDismiss().then(data=>
        {
          console.log('Got Data From Emoji Picker',data);
        })
  }

}
