import { Component, OnInit } from '@angular/core';
import { EMOJIS } from 'src/app/data/emoji.data';

@Component({
  selector: 'app-emoji-picker-modal',
  templateUrl: './emoji-picker-modal.component.html',
  styleUrls: ['./emoji-picker-modal.component.scss'],
})
export class EmojiPickerModalComponent implements OnInit {

emojiCategories:any[]=[];
mainEmojiData=EMOJIS;
currentEmojiList:any[]=[];
currentCategoryName:string='';
  constructor() 
  {

  }

  ngOnInit() 
  {
    this.getEmojiCategories();
  }

  getEmojiCategories()
  {
    this.mainEmojiData.forEach(category=>
      {
        this.emojiCategories.push(category);
      });
      this.currentCategoryName=this.emojiCategories[0].name;
      this.currentEmojiList=this.emojiCategories[0].emojis;
  }

  categoryChanged(selectedEmojiList)
  {
    this.currentEmojiList=selectedEmojiList.emojis;
  }

}
