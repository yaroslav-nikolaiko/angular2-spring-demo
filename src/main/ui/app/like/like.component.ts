import {Component, Input} from "@angular/core";


@Component({
    selector: 'like',
    template: `
        <i class="glyphicon glyphicon-heart" 
            (click)="onClick()"
            [class.highlighted]="isActive"
        ></i>
        <span>{{likes}}</span>
    `,

    styles: [`
        .glyphicon-heart{
            color: #ccc;
            cursor: pointer;
        }

        .highlighted{
            color: deeppink;
        }
    `]
})
export class LikeComponent{
    @Input() likes=0;
    @Input('active') isActive=false;

    onClick(){
        this.isActive=!this.isActive;
        this.likes=this.isActive ? ++this.likes : --this.likes;
    }

}