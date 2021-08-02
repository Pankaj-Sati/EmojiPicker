import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.page.html',
  styleUrls: ['./demo.page.scss'],
})
export class DemoPage implements OnInit {

  showEmojiPicker=true;

  constructor(private toastCtrl:ToastController) { }

  ngOnInit() {
  }

  addEmoji(event)
  {
    this.toastCtrl.create({
      message:event.data+ 'Selected'
    }).then(toast=>
      {
        toast.present();
      })
  }

}
