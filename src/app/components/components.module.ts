import { NgModule } from "@angular/core";
import { EmojiPickerModalComponent } from './emoji-picker-modal/emoji-picker-modal.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule(
    {
        declarations:[
            EmojiPickerModalComponent
        ],
        entryComponents:
        [
            EmojiPickerModalComponent
        ],
        imports:
        [
            CommonModule,
            IonicModule
        ],
        exports:[
            EmojiPickerModalComponent
        ]
    })
export class ComponentsModule{}