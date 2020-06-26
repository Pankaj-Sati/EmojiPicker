import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import { EMOJIS } from 'src/app/data/emoji.data';
import { IonSlides, ModalController } from '@ionic/angular';

@Component({
  selector: 'emoji-picker',
  templateUrl: './emoji-picker-modal.component.html',
  styleUrls: ['./emoji-picker-modal.component.scss'],
})
export class EmojiPickerModalComponent implements OnInit {


@ViewChild('slides',{static:false}) slides:IonSlides;
@ViewChild('categoryDiv',{static:false}) categoryContainer:ElementRef;

emojiCategories:any[]=[];
mainEmojiData=EMOJIS;
currentEmojiList:any[]=[];
currentCategoryName:string='';

@Input('isInModal') isInModal=false; //To determine whether this componet is created using a modal or not
@Output('onEmojiSelect') selectionEvent=new EventEmitter(); //TO emmit event when an emoji is selected
  constructor(private modalCtrl:ModalController) 
  {

  }

  ngOnInit() 
  {
    this.getEmojiCategories();
  }

  ngAfterViewInit()
  {
    console.log('ngAfterViewInit');
    this.setActiveCategorySlide();
    this.slides.ionSlideDidChange.subscribe(data=>
      {
        console.log('Slide changed data',data);
        this.setActiveCategorySlide();
      })
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

  categoryChanged(selectedEmojiList,categoryIndex)
  {
    this.currentEmojiList=selectedEmojiList.emojis;
    this.currentCategoryName=selectedEmojiList.name;
    this.slides.slideTo(categoryIndex);
    this.setActiveCategorySlide();
  }

  selectEmoji(code)
  {
    let selectionData={
      data:code
    };

    this.selectionEvent.emit(selectionData);
    if(this.isInModal)
    {
      this.modalCtrl.dismiss(selectionData); //Dismiss the modal with data
    }
  }
  async setActiveCategorySlide()
  {

   await this.slides.getActiveIndex().then(index=>
      {
        this.currentCategoryName=this.emojiCategories[index].name;
        console.log(this.currentCategoryName);
       let categoryDiv=this.categoryContainer.nativeElement.children.item(index); //Ge item at this index
       this.categoryContainer.nativeElement.scrollLeft=categoryDiv.offsetLeft-20;

      });
  
  }

}
